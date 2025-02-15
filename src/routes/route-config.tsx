
import PromptDetails from "@/components/prompt/prompt-details";

// Add this to your routes array
{
  path: "/agents/:id/prompt",
  element: (
    <ApplicationLayout>
      <PromptDetails
        name={agents.find(a => a.id === useParams().id)?.name || ""}
        initialSystemPrompt={agents.find(a => a.id === useParams().id)?.systemPrompt || ""}
        initialUserMessage=""
      />
    </ApplicationLayout>
  )
}

import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";
import AIProviders from "@/pages/ai-providers/ai-providers";
import Home from "@/pages/home/home";
import EvaluationsPage from "@/pages/evaluations/evaluations-page";
import Users from "@/pages/users/users";
import Agents from "@/pages/agents/agents";
import ExperimentDetails from "@/components/experiments/experiment-details";
import { useParams, useNavigate } from "react-router-dom";

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
    ],
  },
];

export default routes;
