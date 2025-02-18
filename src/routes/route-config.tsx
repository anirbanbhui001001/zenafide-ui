
import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";
import AIProviders from "@/pages/ai-providers/ai-providers";
import Home from "@/pages/home/home";
import DocumentsPage from "@/pages/documents/documents-page";
import EvaluationsPage from "@/pages/evaluations/evaluations-page";
import RegulationsPage from "@/pages/regulations/regulations-page";
import Users from "@/pages/users/users";
import Agents from "@/pages/agents/agents";
import ReplitLayout from "@/components/replit/replit-layout";
import ExperimentDetails from "@/components/evals/experiments/experiment-details";
import PromptDetails from "@/components/prompt/prompt-details";
import { agents } from "@/data/agents";
import ProjectsPage from "@/pages/projects/projects-page";
import InsightsPage from "@/pages/insights/insights-page";


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
        path: "documents",
        element: <DocumentsPage />,
      },
      {
        path: "regulations",
        element: <RegulationsPage />,
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
      },
      {
        path: "replit",
        element: <ReplitLayout />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "insights-history",
        element: <InsightsPage />,
      }
    ],
  },
];

export default routes;
