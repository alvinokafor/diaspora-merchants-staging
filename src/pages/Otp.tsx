import { useState, useRef, useEffect } from "react";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import { otps } from "../config/apiCall";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  //   const otpInputs = useRef([]);
  const otpInputs = useRef<Array<HTMLInputElement | null>>(
    Array(otp.length).fill(null)
  );
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      alert("email not found");
    }
  }, []);

  const handleChange = async (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    const isOtpEntered = newOtp.every((digit) => digit !== "");

    if (isOtpEntered) {
      try {
        const otpCode = newOtp.join("");
        const formData = {
          email: email,
          otp: otpCode,
        };
        console.log(formData);
        const response = await otps(formData);
        console.log("OTP verified:", response.data);
        toast(`${response.data.message} Successful`, {
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
          navigate("/login");
        }, 3000);
      } catch (error: any) {
        if (error instanceof Error) {
          toast(`${error.message} Error creating account !`);
          console.error("OTP verification failed", error);
        } else {
          console.error("Unknown error:", error);
        }
      }
    } else {
      if (value !== "") {
        if (index < otp.length - 1 && otpInputs.current[index + 1]) {
          otpInputs.current[index + 1]!.focus();
        }
      } else {
        if (index > 0 && otpInputs.current[index - 1]) {
          otpInputs.current[index - 1]!.focus();
        }
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
      <ToastContainer />
      <Heading
        align={"center"}
        className=" text-white"
        size={"6"}
        weight={"regular"}
      >
        Diaspora
      </Heading>
      <form className="p-6 bg-white rounded-md space-y-6 shadow-lg w-[450px]">
        <Heading
          align={"center"}
          className="uppercase"
          size={"3"}
          weight={"bold"}
        >
          Email Verification
        </Heading>
        <br />
        <Text>
          A 6 Digit code has been sent to your mail kindly input code to confirm
          your registration
        </Text>

        <Flex direction={"row"} gap={"2"} style={{ justifyContent: "center" }}>
          {otp.map((value, index) => (
            <input
              ref={(el) => (otpInputs.current[index] = el)}
              key={index}
              className="border-solid border-gray-300 border rounded-md w-12 h-12 text-center"
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </Flex>

        {/* <Button className="w-full" size={"3"}>
          Login
        </Button> */}
      </form>

      <Text className="text-white pb-10">
        Already Have an Account?
        <Link to={"/login"} className="underline">
          SignIn
        </Link>
      </Text>
    </Flex>
  );
}
