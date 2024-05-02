/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Pokemon } from "../components/Pokemon";
import { Teams } from "../pages/Teams";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:pokemon",
    element: <Pokemon />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
]);
