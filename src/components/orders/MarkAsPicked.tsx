import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export default function MarkAsPicked() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="solid" color="blue">
          Confirm Pickup
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Cancel Order</AlertDialog.Title>
        <AlertDialog.Description size="2">
          This action will mark this order as picked.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="blue">
              Confirm
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
