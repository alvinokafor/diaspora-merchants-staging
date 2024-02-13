import {
  Box,
  Flex,
  TextField,
  Button,
  TextArea,
  Select,
  Text,
} from "@radix-ui/themes";
import { profile } from '../../config/apiCall';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


export default function ProfileForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    description: "",
    industry: "",
    cac: "",
    country: "",
    region: "",
    city: "",
    address: "",
    longitude: "",
    latitude: "",
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
        toast(`${error.message} Error !`);
        console.error(' error:', error);
      } else {
        console.error('Unknown error:', error);
      }
    }
  };
  const handleSelectChange = (newValue: string) => {
    setFormData((prevState: any) => ({
      ...prevState,
      industry: newValue,
    }));
  };  
  return ( 
  <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
    <ToastContainer />
  <form className="space-y-4" onSubmit={handleSubmit}>
    <Text className="font-semibold">Profile</Text>
    
    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Business Name</label>
      <TextField.Input
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        placeholder="Enter Business Name"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Description</label>
      <TextArea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter Description"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Industry</label>
      <Select.Root onValueChange={handleSelectChange} 
        defaultValue="Retail"
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="Retail">Retail</Select.Item>
          <Select.Item value="Legal">Legal Services</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">CAC</label>
      <TextField.Input
        name="cac"
        value={formData.cac}
        onChange={handleChange}
        placeholder="Enter CAC"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Country</label>
      <TextField.Input
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Enter Country"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Region</label>
      <TextField.Input
        name="region"
        value={formData.region}
        onChange={handleChange}
        placeholder="Enter Region"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">City</label>
      <TextField.Input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Enter City"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Address</label>
      <TextField.Input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter Address"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Longitude</label>
      <TextField.Input
        name="longitude"
        value={formData.longitude}
        onChange={handleChange}
        placeholder="Enter Longitude"
        type="text"
      />
    </Flex>

    <Flex direction={"column"} gap={"2"}>
      <label className="font-medium text-sm">Latitude</label>
      <TextField.Input
        name="latitude"
        value={formData.latitude}
        onChange={handleChange}
        placeholder="Enter Latitude"
        type="text"
      />
    </Flex>

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

    <Button style={{backgroundColor:"var(--accent-9)"}} className="w-full" size={"3"} type="submit">
      Save
    </Button>
  </form>
</Box>
  );
}
