import {
  Box,
  Flex,
  TextField,
  Button,
  TextArea,
  Select,
  Text,
} from "@radix-ui/themes";

export default function ProfileForm() {
  return (
    <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
      <form className="space-y-4">
        <Text className="font-semibold">Profile</Text>
        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Buisness Name</label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Buisness Name"
            type="text"
          />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Description</label>
          <TextArea size={"3"} placeholder="Enter Description" />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Industry</label>
          <Select.Root size={"2"} defaultValue="Retail">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="retail">Retail</Select.Item>
              <Select.Item value="legal">Legal Services</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Button className="w-full" size={"3"}>
          Save
        </Button>
      </form>
    </Box>
  );
}
