import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "./atoms";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <p>Character Count: {count}</p>
    </div>
  );
}
