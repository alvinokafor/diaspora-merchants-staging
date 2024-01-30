import { Box, Flex, Heading, Text } from "@radix-ui/themes";

export default function Success() {
  return (
    <Flex
      direction={"column"}
      className="mt-4 mx-auto rounded-xl max-w-4xl"
      gap={"6"}
    >
      <Box className="text-center py-6 bg-slate-100">
        <Heading size={"7"} mb={"2"}>
          Congratulations!
        </Heading>
        <Text>
          You have completed the onboarding process. We will review your
          information shortly to finalize the activation process
        </Text>
      </Box>

      <Box className="py-6 px-6 bg-slate-100">
        <Heading size={"4"} mb={"2"}>
          Please wait for review (1-3) days
        </Heading>
        <Text className="pt-3">
          Please, remeber that to activate your store on Diaspora, you must
          provide{" "}
          <strong>
            all the necessary pictures and descriptions for your products.
          </strong>
          You can convinetly upload them via our Management Portal using the
          credentials we will share with you via email.
        </Text>
      </Box>
    </Flex>
  );
}
