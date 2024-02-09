import { Box, Flex, TextField, Button, Text } from "@radix-ui/themes";
import { contact } from '../../config/apiCall';
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: ""
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
      const response = await contact(formData, token); 
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

  return (
    <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
       <ToastContainer />
     <form className="space-y-4" onSubmit={handleSubmit}>
        <Text className="font-semibold">Contact</Text>
        <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Email</label>
            <TextField.Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              size={"3"}
              placeholder="Enter Email"
              type="text"
        /></Flex>

        <Flex direction={"column"} gap={"2"}>
              <label className="font-medium text-sm">Phone Number</label>
              <TextField.Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                type="text"
              />
            </Flex>

        {/* <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">State or Region</label>
          <Select.Root size={"2"} defaultValue="lagos">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="lagos">Lagos</Select.Item>
              <Select.Item value="Abuja">Abuja</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">City</label>
          <TextField.Input size={"3"} placeholder="Enter City" type="text" />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Address</label>
          <TextField.Input size={"3"} placeholder="Enter Address" type="text" />
        </Flex> */}

        <Button type="submit" className="w-full" style={{backgroundColor:"#3e63dd"}} size={"3"}>
          Login
        </Button>
      </form>
    </Box>
  );
}
