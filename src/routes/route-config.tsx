
import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";
import AIProviders from "@/pages/ai-providers/ai-providers";
import Home from "@/pages/home/home";
import EvaluationsPage from "@/pages/evaluations/evaluations-page";
import Users from "@/pages/users/users";
import Agents from "@/pages/agents/agents";
import ExperimentDetails from "@/components/experiments/experiment-details";
import PromptDetails from "@/components/prompt/prompt-details";
import { agents } from "@/data/agents";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "ai-providers",
        element: <AIProviders />,
      },
      {
        path: "evaluations",
        element: <EvaluationsPage />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "agents/:agentId/prompt",
        element: <PromptDetails />,
      }
    ],
  },
];

export default routes;
