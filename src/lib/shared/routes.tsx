import React from "react";
import { RouteObject } from "react-router-dom";
import { FC } from "react";
import Home from "./pages/Home";

type CustomRoute = RouteObject & {
  layout?: FC;
};

const routes: CustomRoute[] = [
  {
    element: <Home />,
    path: "/",
  },
];

routes.forEach((r) => {
  if (r.layout) {
    r.element = r.layout(r.element);
  }
});

export default routes;
