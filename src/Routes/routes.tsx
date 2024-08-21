import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
const Garden = lazy(async () => await import("../Pages/Garden"));
const Map = lazy(async () => await import("../Pages/Map"));
const TreeDetails = lazy(
  async () => await import("../Components/TreeDetails")
);

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to={"/garden"} />,
    },
    {
      path: "/garden",
      element: <Garden />,
    },
    {
      path: "/garden/:id",
      element: <TreeDetails />,
    },
    {
      path: "/map",
      element: <Map />,
    },
  ]);
  return routes;
};

export default Router;
