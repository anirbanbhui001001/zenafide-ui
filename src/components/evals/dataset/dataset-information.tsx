
import { Dataset } from "@/types/evals/dataset";
import React from "react";

interface DatasetInformationProps {
  dataset: Dataset;
}

export default function DatasetInformation({ dataset }: DatasetInformationProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <hr />
      <h1 className="text-2xl font-bold">{dataset.name}</h1>
      <p className="text-sm text-default-500">Description: {dataset.description}</p>
      <p className="text-sm text-default-500">Test Cases: {dataset.testCases}</p>
      <p className="text-sm text-default-500">Created By: {dataset.creator}</p>
      <p className="text-sm text-default-500">Updated: {dataset.updated}</p>
      <p className="text-sm text-default-500">Type: {dataset.type}</p>
    </div >
  )
}
