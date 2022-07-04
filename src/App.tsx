import React from "react";
import routes from "./lib/shared/routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  const pages = useRoutes(routes);
  return <>{pages}</>;
}
