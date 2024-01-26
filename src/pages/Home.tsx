import { Box, Button, Grid, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { Container } from "../partials";

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Box className="pt-32">
          <Grid columns={"2"} align={"center"}>
            <Box className="w-[85%] space-y-6">
              <Box className="space-y-6">
                <Heading size={"8"} className="pb-4 text-slate-900">
                  Join Our Growing Community of Successful Merchants
                </Heading>

                <Text className="text-slate-500">
                  Connect with thousands of potential customers across various
                  demographics. Our marketplace is frequented by a diverse
                  audience looking for quality products like yours.
                </Text>
              </Box>

              <Button className="block font-semibold" size={"4"}>
                <Link to={"/onboarding"} className="w-full h-full">
                  Become A Merchant
                </Link>
              </Button>
            </Box>
            <Box>
              <img
                src="https://media.istockphoto.com/id/508319768/photo/portrait-of-male-owner-standing-in-gift-store.jpg?s=612x612&w=0&k=20&c=FU3VvhPQqkKtOEfpcTPM17lU5by_Hj2bqkpwOZnlPXc="
                alt=""
                className="rounded-xl"
              />
            </Box>
          </Grid>
        </Box>
      </Container>
    </AppLayout>
  );
}
