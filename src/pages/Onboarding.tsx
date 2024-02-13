import AppLayout from "../layouts/AppLayout";
import { useSearchParams } from "react-router-dom";
import { Box } from "@radix-ui/themes";
import {
  Progress,
  BuisnessDetails,
  PersonalInfo,
  PaymentDetails,
  PaternshipAgreement,
  Success,
} from "../components/onboarding";

export default function Onboarding() {
  const [searchParams] = useSearchParams();
  const formStep = searchParams.get("step");

  return (
    <AppLayout>
      <Box className="pt-32 mx-auto">
        <Progress />

        {!formStep && <BuisnessDetails />}
        {formStep === "personal_info" && <PersonalInfo />}
        {formStep === "payment_info" && <PaymentDetails />}
        {formStep === "patnership_agreement" && <PaternshipAgreement />}
        {formStep === "success" && <Success />}
      </Box>
    </AppLayout>
  );
}
