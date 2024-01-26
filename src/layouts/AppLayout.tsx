import React from "react";
import { Navbar } from "../partials";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
