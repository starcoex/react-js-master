import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Root from "../Root";
import ErrorComponent from "../components/ErrorComponent";
import NotFound from "../screens/NotFound";
import Charcter from "./Charcter";
import Atom from "../screens/atoms/Atom";
import ToDoList from "../screens/atoms/toDos/ToDoList";

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
      { path: "todos", element: <ToDoList /> },
      { path: "atom", element: <Atom /> },
    ],
    errorElement: <NotFound />,
  },
]);

export default routers;
