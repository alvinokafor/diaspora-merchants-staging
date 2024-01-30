import { FormWrapper } from ".";
import { Flex, TextField, Button } from "@radix-ui/themes";
import { useSearchParams } from "react-router-dom";

export default function PersonalInfo() {
  const [_searchParams, setSearchParams] = useSearchParams();

  const handleMoveToPayments = (e: any) => {
    e.preventDefault();
    setSearchParams({ step: "payment_info" });
  };
  return (
    <form className="mx-auto max-w-4xl">
      <FormWrapper>
        <Flex direction={"column"} gap={"5"}>
          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">First Name</label>

            <TextField.Input size="3" placeholder="Enter your first name" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">Last Name</label>

            <TextField.Input size="3" placeholder="Enter Last Name" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">Phone Number</label>

            <TextField.Input size="3" placeholder="Enter Phone Number" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">Email</label>

            <TextField.Input size="3" type="email" placeholder="Enter Email" />
          </Flex>
          <Button onClick={handleMoveToPayments}>Next</Button>
        </Flex>
      </FormWrapper>
    </form>
  );
}
