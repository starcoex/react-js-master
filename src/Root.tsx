import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Reset } from "styled-reset";
import GlobalFont from "./styles/GlobalFont";
import Globalstyle from "./styles/Globalstyle";

function Root() {
  return (
    <React.StrictMode>
      <Reset />
      <Globalstyle />
      <GlobalFont />
      {/* <Header /> */}
      <Outlet context={{ darkMode: true }} />
    </React.StrictMode>
  );
}

export default Root;
