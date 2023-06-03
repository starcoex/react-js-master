import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Reset } from "styled-reset";
import GlobalFont from "./styles/GlobalFont";
import Globalstyle from "./styles/Globalstyle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

function Root() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Reset />
        <Globalstyle />
        <GlobalFont />
        {/* <Header /> */}
        <Outlet context={{ darkMode: true }} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default Root;
