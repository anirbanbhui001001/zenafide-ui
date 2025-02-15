import React from "react";
import { RouteObject } from "react-router-dom";
import ApplicationLayout from "@/layouts/application-layout";

// Placeholder component for AIProviders page.  Replace with actual implementation.
const AIProviders = () => {
  return (
    <div>
      <h1>AI Providers Page</h1>
      {/* Add HeroUI components here */}
    </div>
  );
};

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