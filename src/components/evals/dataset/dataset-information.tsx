
import React from "react";
import { Dataset } from "@/types/evals/dataset";

interface DatasetInformationProps {
  dataset: Dataset;
}

export default function DatasetInformation({ dataset }: DatasetInformationProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-6">Dataset Information</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm text-gray-500">Description</h3>
          <p className="text-sm mt-1">{dataset.description}</p>
        </div>

        <div>
          <h3 className="text-sm text-gray-500">Metadata</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Total Test Cases:</span>
              <span>{dataset.testCases}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Last Updated:</span>
              <span>{dataset.updated}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Creator:</span>
              <span>{dataset.creator}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Type:</span>
              <span>{dataset.type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
