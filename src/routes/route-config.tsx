
import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";
import AIProviders from "@/pages/ai-providers";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <ApplicationLayout />,
  },
  {
    path: "/ai-providers",
    element: <AIProviders />,
  },
];

export default routes;
