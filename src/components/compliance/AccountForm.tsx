import { Box, Flex, TextField, Button, Text, Select } from "@radix-ui/themes";

export default function AccountForm() {
  return (
    <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
      <form className="space-y-4">
        <Text className="font-semibold">Account Details</Text>
        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Bank</label>
          <Select.Root size={"2"} defaultValue="lagos">
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
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Account Name</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Account Number"
            type="text"
          />
        </Flex>

        <Button className="w-full" size={"3"}>
          Save
        </Button>
      </form>
    </Box>
  );
}
