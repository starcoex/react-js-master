import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Root from "../Root";
import ErrorComponent from "../components/ErrorComponent";
import NotFound from "../screens/NotFound";
import Charcter from "./Charcter";
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
        path: `character/:id`,
        element: <Charcter />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default routers;
