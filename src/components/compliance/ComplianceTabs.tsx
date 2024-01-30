import { Box, Tabs, Text, Badge } from "@radix-ui/themes";
import { ProfileForm, ContactForm, OwnerForm, AccountForm } from ".";

export default function ComplianceTabs() {
  return (
    <Box className="pt-4">
      <Tabs.Root defaultValue="profile">
        <Tabs.List size="2">
          <Tabs.Trigger className="flex items-center gap-4" value="profile">
            <Text>Profile</Text>
            <Badge className="ml-2" variant="soft" color="green">
              Completed
            </Badge>
          </Tabs.Trigger>
          <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
          <Tabs.Trigger value="owner">Owner</Tabs.Trigger>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="profile">
            <ProfileForm />
          </Tabs.Content>

          <Tabs.Content value="contact">
            <ContactForm />
          </Tabs.Content>

          <Tabs.Content value="owner">
            <OwnerForm />
          </Tabs.Content>

          <Tabs.Content value="account">
            <AccountForm />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
}
