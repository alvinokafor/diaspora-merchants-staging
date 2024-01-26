import { Box, Grid, Text } from "@radix-ui/themes";
import { useSearchParams } from "react-router-dom";

const progress = [
  {
    id: 1,
    text: "Buisness Details",
    step: "",
  },
  {
    id: 2,
    text: "Personal Information",
    step: "personal_info",
  },
  {
    id: 3,
    text: "Payment Details",
    step: "payment_info",
  },
  {
    id: 4,
    text: "Patnership Agreement",
    step: "patnership_agreement",
  },
];

export default function Progress() {
  const [searchParams] = useSearchParams();
  const formStep = searchParams.get("step");
  return (
    <Grid className="max-w-4xl mx-auto" columns={"4"}>
      {progress.map((data) => (
        <Box
          key={data.id}
          className={`${
            formStep === data.step
              ? "border-blue-700 bg-blue-200"
              : "bg-blue-50 border-blue-200"
          } border-b-4 py-3 text-center`}
        >
          <Text
            as="p"
            className="bg-blue-300 mx-auto rounded-full w-6 h-6 flex items-center justify-center"
          >
            {data.id}
          </Text>

          <Text>{data.text}</Text>
        </Box>
      ))}
    </Grid>
  );
}
