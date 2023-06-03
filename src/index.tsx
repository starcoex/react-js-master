import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routers";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme/defaulttheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={routers} />
    </ThemeProvider>
  </React.StrictMode>
);
