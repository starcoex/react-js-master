import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalFont from "./styles/GlobalFont";
import Globalstyle from "./styles/Globalstyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, ligthTheme } from "./theme/defaulttheme";

const queryClient = new QueryClient();

function Root() {
  const [isDark, setIsDark] = useState(false);
  const handleThemeChange = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={isDark ? darkTheme : ligthTheme}>
        <QueryClientProvider client={queryClient}>
          <Reset />
          <Globalstyle />
          <GlobalFont />
          {/* <button onClick={handleThemeChange}>
            {isDark ? "DarkMode" : "LightMode"}
          </button> */}
          <Outlet context={{ toggleDark: handleThemeChange, isDark: isDark }} />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default Root;
