import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db/db";
import { Link } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>
        User with id {id} is named: {users[Number(id)].name}
      </h1>
      <hr />
      <Link to={"followers"}>see followers</Link>
      <Outlet context={{ name: users[Number(id)].name }} />
    </div>
  );
}
