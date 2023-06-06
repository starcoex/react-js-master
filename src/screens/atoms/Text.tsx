import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./atoms";

export default function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return (
    <div>
      <p style={{ fontSize }}>This text will increase in size too.</p>
    </div>
  );
}
