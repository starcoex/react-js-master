import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
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
    </header>
  );
}
