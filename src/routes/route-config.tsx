
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

// Create a wrapper component for PromptDetails
function PromptDetailsWrapper() {
  const id = window.location.pathname.split('/')[2];
  const agent = agents.find(a => a.id === id);
  
  return (
    <PromptDetails
      name={agent?.name || ""}
      initialSystemPrompt={agent?.systemPrompt || ""}
      initialUserMessage=""
    />
  );
}

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
        path: "/agents/:id/prompt",
        element: <PromptDetailsWrapper />
      },
    ],
  },
];

export default routes;
