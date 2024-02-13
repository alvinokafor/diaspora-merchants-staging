import { Box, Flex, TextField, Button, Text, Select } from "@radix-ui/themes";
import { profile } from '../../config/apiCall';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export default function AccountForm() {
  const [formData, setFormData] = useState({
    taxId:"",
    bankName: "",
    accountNumber: "",
    accountOwnerName: ""
});
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log('token:', token);
      const response = await profile(formData, token); 
      console.log('this are all the datas:', response.data);
      localStorage.setItem('datas', response.data);
      toast(`${response.data.message}`,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }catch (error: any) {
      if (error instanceof Error) {
        toast(`${error.message} Error in !`);
        console.error(' error:', error);
      } else {
        console.error('Unknown error:', error);
      }
    }
  };
  const handleSelectChange = (newValue: string) => {
    setFormData((prevState: any) => ({
      ...prevState,
      bankName: newValue,
    }));
  };  


  return (
    <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
      <ToastContainer />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Text className="font-semibold">Account Details</Text>
        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Bank</label>
          <Select.Root size={"2"} onValueChange={handleSelectChange} defaultValue="lagos">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="lagos">Kuda MFB</Select.Item>
              <Select.Item value="Abuja">Opay Microfinance</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Account Number</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Account Number"
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange} 
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Account Name</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Account Number"
            type="text"
            name="accountOwnerName"
            value={formData.accountOwnerName}
            onChange={handleChange} 
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Taxt ID</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Taxt ID"
            type="text"
            name="taxId"
            value={formData.taxId}
            onChange={handleChange} 
          />
        </Flex>

        <Button style={{backgroundColor:"var(--accent-9)"}} className="w-full" size={"3"} type="submit">
          Save
        </Button>
      </form>
    </Box>
  );
}
