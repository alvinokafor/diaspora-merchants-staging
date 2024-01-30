import { TextField, Flex, Grid, Button, Box, Text } from "@radix-ui/themes";
import { FormWrapper } from ".";
import { useSearchParams } from "react-router-dom";

export default function BuisnessDetails() {
  const [_searchParams, setSearchParams] = useSearchParams();

  const handleSaveBuisnessDetails = (e: any) => {
    e.preventDefault();
    setSearchParams({ step: "personal_info" });
  };
  return (
    <Grid columns={"2"} className="mx-auto max-w-4xl mt-6">
      <form>
        <FormWrapper>
          <Flex direction={"column"} gap={"5"}>
            <Flex direction={"column"} gap={"2"}>
              <label htmlFor="buisness_name">Buisness Name</label>

              <TextField.Input
                size="3"
                placeholder="Enter your buisness name"
              />
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label htmlFor="buisness_name">Buisness CAC Number</label>

              <TextField.Input size="3" placeholder="Enter CAC Number" />
            </Flex>

            <Flex direction={"column"} gap={"2"}>
              <label htmlFor="buisness_name">Buisness Location</label>

              <TextField.Input size="3" placeholder="Enter Buisness Location" />

              <Text size={"2"} color="amber">
                If you can't find your location, put a pin on the map{" "}
              </Text>
            </Flex>
            <Button onClick={handleSaveBuisnessDetails}>Next</Button>
          </Flex>
        </FormWrapper>
      </form>

      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3191.708801974967!2d73.13016848451862!3d22.285120636635604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705563079752!5m2!1sen!2sin"
          width="450"
          height="350"
          loading="lazy"
          style={{ border: "0" }}
        ></iframe>
      </Box>
    </Grid>
  );
}
