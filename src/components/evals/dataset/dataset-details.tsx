import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import DatasetInformation from "./dataset-information";
import TestCase from "./testcase";
import { Dataset } from "@/types/evals/dataset";

interface DatasetDetailsProps {
  dataset: Dataset;
}

interface TestCaseType {
  id: string;
  label: string;
  chatHistory: string;
  target: string;
}

const testCases: TestCaseType[] = [
  {
    id: "1",
    label: "Basic Greeting",
    chatHistory: "User: Hello Assistant: Hi, how can I help you today?",
    target: "Friendly and professional greeting",
  },
  {
    id: "2",
    label: "Product Inquiry",
    chatHistory:
      "User: What's the price of your basic plan? Assistant: Our basic plan starts at $9.99 per month and includes all essential features.",
    target: "Accurate pricing information",
  },
];

export default function DatasetDetails({
  dataset,
}: DatasetDetailsProps) {

  return (
    <div>
      <DatasetInformation dataset={dataset} />
    </div>
  )
}
