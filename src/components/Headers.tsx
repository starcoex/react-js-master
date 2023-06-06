import React from "react";
import Home from "../routes/Home";
import About from "../screens/About";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import styled from "styled-components";

interface IToggleDark {
  toggleDark: () => void;
  isDark: boolean;
}

export default function Headers() {
  const { toggleDark, isDark } = useOutletContext<IToggleDark>();
  console.log(toggleDark, isDark);

  const param = useParams();
  console.log("header param", param);
  //   const navigate = useNavigate();
  //   const onHomeClick = () => {
  //     navigate("/");
  //   };
  //   const onAboutClick = () => {
  //     navigate("/about");
  //   };
  return (
    <header>
      <ul>
        <li>
          {/* <button onClick={onHomeClick}>Home</button> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
          {/* <button onClick={onAboutClick}>About</button> */}
        </li>
      </ul>
      <button onClick={toggleDark}>{isDark ? "DarkMode" : "LightMode"}</button>
    </header>
  );
}
