import { Flex, Heading, TextField, Text, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Login() {
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
      <form className="p-6 bg-white rounded-md space-y-6 shadow-lg w-[450px]">
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
          <TextField.Input size={"3"} placeholder="Enter Email" type="text" />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Password</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Password"
            type="text"
          />
        </Flex>

        <Button className="w-full" size={"3"}>
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
