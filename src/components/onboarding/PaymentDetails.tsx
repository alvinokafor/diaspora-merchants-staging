import { Flex, TextField, Button } from "@radix-ui/themes";
import { FormWrapper } from ".";
import { useSearchParams } from "react-router-dom";

export default function PaymentDetails() {
  const [_searchParams, setSearchParams] = useSearchParams();

  const handleMoveToAgreement = (e: any) => {
    e.preventDefault();
    setSearchParams({ step: "patnership_agreement" });
  };
  return (
    <form className="mx-auto max-w-4xl">
      <FormWrapper>
        <Flex direction={"column"} gap={"5"}>
          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">Tax ID*</label>
            <TextField.Input size="3" placeholder="Enter Tax ID" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">Company Account Number</label>

            <TextField.Input size="3" placeholder="Enter Account Number" />
          </Flex>

          <Flex direction={"column"} gap={"2"}>
            <label htmlFor="buisness_name">Company Bank Name</label>

            <TextField.Input size="3" placeholder="Enter Bank Name" />
          </Flex>

          <Button onClick={handleMoveToAgreement}>Next</Button>
        </Flex>
      </FormWrapper>
    </form>
  );
}
