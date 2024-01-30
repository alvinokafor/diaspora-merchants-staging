import { Box, Flex, TextField, Button, Text, Select } from "@radix-ui/themes";

export default function ContactForm() {
  return (
    <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
      <form className="space-y-4">
        <Text className="font-semibold">Profile</Text>
        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Email</label>
          <TextField.Input size={"3"} placeholder="Enter Email" type="email" />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Phone Number</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Phone Number"
            type="text"
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
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
        </Flex>

        <Button className="w-full" size={"3"}>
          Save
        </Button>
      </form>
    </Box>
  );
}
