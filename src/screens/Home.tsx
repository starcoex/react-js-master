import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { users } from "../db/db";
import About from "./About";
import { Link } from "react-router-dom";

// interface User {
//   id: number;
//   name: string;
// }

export default function Home() {
  const param = useParams();
  console.log(param);
  //   console.log(navigate);
  return (
    <div>
      {users.map((user) => (
        <ul>
          <li key={user.id}>
            <Link to={`users/${user.id}`}>{user.name}</Link>
          </li>
          {/* <About name={user.name} /> */}
        </ul>
      ))}
    </div>
  );
}
