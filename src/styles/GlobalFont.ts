import Font_ISOCTERU_woff from "../assets/fonts/ISOCTEUR V1.woff";
import Font_ISOCTERU_ttf from "../assets/fonts/ISOCTEUR V1.ttf";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "ISOCTEUR-V1";
  font-style:normal;
  src: local("Font_ISOCTERU"), url(${Font_ISOCTERU_ttf}) format("truetype");
}
@font-face {
  font-family: "ISOCTEUR-V1-W";
  font-style:normal;
  src: local("Font_ISOCTERU"), url(${Font_ISOCTERU_woff}) format("woff");
}
`;
