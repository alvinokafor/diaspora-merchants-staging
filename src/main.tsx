import "@fontsource/public-sans";
import "@fontsource/roboto";
import "@radix-ui/themes/styles.css";
import "./styles/theme-config.css";
import React from "react";
import { Theme } from "@radix-ui/themes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./config";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
