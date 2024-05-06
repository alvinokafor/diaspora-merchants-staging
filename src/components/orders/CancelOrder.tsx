import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export default function CancelOrder() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="solid" color="red">
          Cancel Order
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Cancel Order</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to cancle this order?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              No
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="blue">
              Yes
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
