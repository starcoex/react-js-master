import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersProps {
  name: string;
}
export default function Followers() {
  const { name } = useOutletContext<IFollowersProps>();

  return (
    <div>
      <h1>Here are {name} of followers</h1>
    </div>
  );
}
