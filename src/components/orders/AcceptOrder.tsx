import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { Dispatch, SetStateAction } from "react";

export default function AcceptOrder({
  setShowMap,
}: {
  setShowMap: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="solid" color="blue">
          Accept Order
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Accept Order</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Accepting this order will publish it to the dispatch riders
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              onClick={() => setShowMap(true)}
              variant="solid"
              color="blue"
            >
              Accept
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
