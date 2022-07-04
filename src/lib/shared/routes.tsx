import React from "react";
import { RouteObject } from "react-router-dom";
import { FC } from "react";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";

type CustomRoute = RouteObject & {
  layout?: FC;
};

const routes: CustomRoute[] = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <NotFound />,
    path: "*",
  },
];

routes.forEach((r) => {
  if (r.layout) {
    r.element = r.layout(r.element);
  } else {
    r.element = <Layout>{r.element}</Layout>;
  }
});

export default routes;
