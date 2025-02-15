
import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";
import AIProviders from "@/pages/ai-providers/ai-providers";
import Home from "@/pages/home/home";
import EvaluationsPage from "@/pages/evaluations/evaluations-page";
import Users from "@/pages/users/users";
import ExperimentDetails from "@/components/experiments/experiment-details";
import { useParams, useNavigate } from "react-router-dom";

const ExperimentDetailsWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/evaluations');
  };

  return <ExperimentDetails id={id!} onBack={handleBack} />;
};

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
      },
      {
        path: "evaluations",
        element: <EvaluationsPage />,
        children: [
          {
            path: "experiment/:id",
            element: <ExperimentDetailsWrapper />
          }
        ]
      },
      {
        path: "users",
        element: <Users />
      }
    ]
  }
];

export default routes;
