import React from "react";
import { Box } from "@radix-ui/themes";

export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box className={"shadow-sm rounded-xl px-4 py-6"}>{children}</Box>;
}
