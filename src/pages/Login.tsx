import { useState } from 'react';
import { Flex, Heading, TextField, Text, Button } from "@radix-ui/themes";
import { Link, useNavigate  } from "react-router-dom";
import { signIn } from '../config/apiCall';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate ();
  const [formData, setFormData] = useState({
    email: '',
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
      const response = await signIn(formData);
      console.log('Signin successful:', response.data);
      localStorage.setItem('data', response.data);
      const token = response.data.data.token;
      localStorage.setItem('token', token);
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
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error: any) {
      if (error instanceof Error) {
        toast(`${error.message} Error Login in !`);
        console.error('SignIn error:', error);
      } else {
        console.error('Unknown error:', error);
      }
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
      <Heading
        align={"center"}
        className=" text-white"
        size={"6"}
        weight={"regular"}
      >
        Diaspora
      </Heading>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-md space-y-6 shadow-lg w-[450px]">
        <Heading
          align={"center"}
          className="uppercase"
          size={"3"}
          weight={"regular"}
        >
          Login
        </Heading>

       
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
          Login
        </Button>
      </form>

      <Text className="text-white pb-10">
        Don't Have an Account?
        <Link to={"/signup"} className="underline">
          SignUp
        </Link>
      </Text>
    </Flex>
  );
}
