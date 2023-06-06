import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeLabelState, fontSizeState } from "./atoms";

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  const handleButtonClick = () => {
    setFontSize((current) => current + 1);
  };
  return (
    <>
      <div> Current font size: {fontSizeLabel}</div>
      <button onClick={handleButtonClick} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}
