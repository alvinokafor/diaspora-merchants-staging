import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Flex, Text, Avatar } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const pathName = useLocation().pathname;
  return (
    <Flex
      align={"center"}
      justify={"between"}
      className="p-4 border-b border-gray-200 shadow-sm z-50"
    >
      <Text className="font-semibold capitalize">
        {pathName === "/" ? "Home" : pathName.slice(1)}
      </Text>

      <Flex align={"center"} gap={"1"}>
        <Avatar fallback="AC" radius="full" />
        <TriangleDownIcon />
      </Flex>
    </Flex>
  );
}
