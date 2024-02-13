import { Box } from "@radix-ui/themes";
import AppLayout from "@/layouts/AppLayout";
import { ComplianceTabs } from "@/components/compliance";

function Compliance() {
  return (
    <AppLayout>
      <Box className="">
        <ComplianceTabs />
      </Box>
    </AppLayout>
  );
}

export default Compliance;
