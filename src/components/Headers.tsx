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
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDarkState } from "../screens/atoms/atoms";

interface IToggleDark {
  toggleDark: () => void;
  isDark: boolean;
}

const Header = styled.header``;

export default function Headers() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  return (
    <Header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
          {/* <button onClick={onAboutClick}>About</button> */}
        </li>
      </ul>
      <button onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? "DarkMode" : "LightMode"}
      </button>
    </Header>
  );
}
