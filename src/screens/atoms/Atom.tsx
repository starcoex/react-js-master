import React from "react";
import FontButton from "./FontButton";
import Text from "./Text";
import Country from "../country/Country";
import CharacterCount from "./CharacterCount";

export default function Atom() {
  return (
    <div>
      {/* <FontButton />
      <Text /> */}
      <Country />
      <CharacterCount />
    </div>
  );
}
