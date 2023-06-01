import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Root from "../Root";
import ErrorComponent from "../components/ErrorComponent";
import NotFound from "../screens/NotFound";
import User from "../screens/users/User";
import Followers from "../screens/users/Followers";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About name="Hello" />,
      },
      {
        path: `users/:id`,
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default routers;
