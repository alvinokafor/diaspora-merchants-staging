import { useState } from 'react';
import { Flex, Heading, TextField, Text, Button } from "@radix-ui/themes";
import { Link, useNavigate  } from "react-router-dom";
import { signUp } from '../config/apiCall';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const navigate = useNavigate ();
  const [formData, setFormData] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  // const [notification, setNotification] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // setNotification('An OTP has been sent to your email. Please wait...');
      const response = await signUp(formData);
      console.log('Signup successful:', response.data);
      localStorage.setItem('email', formData.email);
      toast(`${response.data.message} Successful`,{
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
      setTimeout(() => {
        navigate('/otp');
      }, 3000);
    } catch (error) {
      toast(`${error.message} Error creating account!`);
      console.error('Signup error:', error);
    }
  };

  return (
    <Flex
      align={"center"}
      justify={"center"}
      direction={"column"}
      gap={"4"}
      className="bg-[url('/background.png')] bg-cover bg-no-repeat min-h-screen "
    >
       <ToastContainer />
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-md space-y-6 shadow-lg max-w-[550px]">
        <Heading
          align={"center"}
          className="uppercase"
          size={"3"}
          weight={"regular"}
        >
          Create Your Diaspora Account
        </Heading>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Buisness Name</label>
          <TextField.Input
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            size={"3"}
            placeholder="Enter Business Name"
            type="text"
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">First Name</label>
          <TextField.Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            size={"3"}
            placeholder="Enter First Name"
            type="text"
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Last Name</label>
          <TextField.Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            size={"3"}
            placeholder="Enter Last Name"
            type="text"
          />
        </Flex>

        <Flex align={"center"} gap={"4"}>
          <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Email</label>
            <TextField.Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              size={"3"}
              placeholder="Enter Email"
              type="text"
            />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Phone Number</label>
            <TextField.Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              size={"3"}
              placeholder="Enter Phone Number"
              type="text"
            />
          </Flex>
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Password</label>
          <TextField.Input
            name="password"
            value={formData.password}
            onChange={handleChange}
            size={"3"}
            placeholder="Enter Password"
            type="text"
          />
        </Flex>

        <Button type="submit" className="w-full" style={{backgroundColor:"#3e63dd"}} size={"3"}>
          Create My Account
        </Button>
      </form>

      <Text className="text-white pb-10">
        Already Have an Account?
        <Link to={"/login"} className="underline">
          Login
        </Link>
      </Text>
    </Flex>
  );
}
