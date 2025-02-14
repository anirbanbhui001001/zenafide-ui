
import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <ApplicationLayout />,
  },
];

export default routes;
