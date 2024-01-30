import {
  Box,
  Flex,
  Grid,
  TextField,
  Button,
  Text,
  Select,
} from "@radix-ui/themes";

export default function OwnerForm() {
  return (
    <Box className="p-6 bg-white max-w-[550px] mx-auto rounded-md shadow-md">
      <form className="space-y-4">
        <Text className="font-semibold">Identification</Text>

        <Grid align={"center"} columns={"2"} className="w-full" gap={"4"}>
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
        </Grid>

        <Box className="space-y-2">
          <label className="font-medium text-sm">Date of Birth</label>
          <Grid align={"end"} columns={"3"} className="w-full gap-x-4 gap-y-2">
            <Flex direction={"column"} gap={"2"}>
              <Select.Root size={"3"} defaultValue="january">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="january">January</Select.Item>
                  <Select.Item value="febuary">Febuary</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <TextField.Input size={"3"} placeholder="Day" type="text" />
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <TextField.Input size={"3"} placeholder="Year" type="text" />
            </Flex>
          </Grid>
        </Box>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Nationality</label>
          <Select.Root size={"3"} defaultValue="lagos">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="lagos">Nigerian</Select.Item>
              <Select.Item value="Abuja">Canada</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Identification Document</label>
          <Select.Root size={"3"} defaultValue="lagos">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="lagos">Bank Verification Number</Select.Item>
              <Select.Item value="Abuja">International Passport</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">
            Upload Idenitification Document
          </label>
          <input type="file" />
        </Flex>

        <Flex direction={"column"} gap={"2"}>
          <label className="font-medium text-sm">Upload Proof of Address</label>
          <input type="file" />
          <Text className="text-sm text-gray-400">
            Proof of address can be any of these documents, not more than 6
            months old:
            <ul className="list-disc">
              <li className="ml-6">
                Utility bill for services to the address.{" "}
              </li>
              <li className="ml-6">Bank statement showing current address. </li>
              <li className="ml-6">Tax assessment. </li>
              <li className="ml-6">Cable TV bill such as DSTV bill. </li>
              <li className="ml-6">Letter from a public authority </li>
            </ul>
          </Text>
        </Flex>

        <Button className="w-full" size={"3"}>
          Save
        </Button>
      </form>
    </Box>
  );
}
