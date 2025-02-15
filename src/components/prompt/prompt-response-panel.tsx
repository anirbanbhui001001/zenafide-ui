
import React from "react";

interface PromptResponsePanelProps {
  response: string;
}

export default function PromptResponsePanel({ response }: PromptResponsePanelProps) {
  return (
    <div className="h-full">
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Generated Response</h2>
        <div className="bg-gray-50 rounded-lg p-4 min-h-[400px]">
          {response || "Click Run to generate a response"}
        </div>
      </div>
    </div>
  );
}
