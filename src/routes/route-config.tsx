
import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";
import AIProviders from "@/pages/ai-providers/ai-providers";
import Home from "@/pages/home/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "ai-providers",
        element: <AIProviders />
      }
    ]
  }
];

export default routes;
