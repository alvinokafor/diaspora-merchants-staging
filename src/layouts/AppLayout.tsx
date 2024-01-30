import React from "react";
import { Navbar, SideBar } from "../partials";
import { Grid, Box } from "@radix-ui/themes";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid columns={"4"} className="grid grid-cols-6">
      <Box className="fixed">
        <SideBar />
      </Box>

      <Box className="col-span-5 ml-[220px] w-full">
        <Navbar />

        <Box className="bg-slate-50 min-h-screen px-6">{children}</Box>
      </Box>
    </Grid>
  );
}
