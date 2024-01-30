import { Flex, Heading, TextField, Text, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      direction={"column"}
      gap={"4"}
      className="bg-[url('/background.png')] bg-cover bg-no-repeat min-h-screen "
    >
      <form className="p-6 bg-white rounded-md space-y-6 shadow-lg max-w-[550px]">
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
            size={"3"}
            placeholder="Enter Buisness Name"
            type="text"
          />
        </Flex>

        <Flex align={"center"} gap={"4"}>
          <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">First Name</label>
            <TextField.Input
              size={"3"}
              placeholder="Enter First Name"
              type="text"
            />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Last Name</label>
            <TextField.Input
              size={"3"}
              placeholder="Enter Last Name"
              type="text"
            />
          </Flex>
        </Flex>

        <Flex align={"center"} gap={"4"}>
          <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Email</label>
            <TextField.Input size={"3"} placeholder="Enter Email" type="text" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label className="font-medium text-sm">Phone Number</label>
            <TextField.Input
              size={"3"}
              placeholder="Enter Phone Number"
              type="text"
            />
          </Flex>
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
