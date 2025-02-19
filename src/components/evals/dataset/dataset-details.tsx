import { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import DatasetInformation from "./dataset-information";
import TestCase from "./testcase";
import { Dataset } from "@/types/evals/dataset";

interface DatasetDetailsProps {
  dataset: Dataset;
  onBack: () => void;
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
  onBack,
}: DatasetDetailsProps) {
  const [selectedTestCase, setSelectedTestCase] = useState<TestCaseType | null>(
    null,
  );
  const [isCreating, setIsCreating] = useState(false);

  const columns = [
    { key: "label", label: "Label" },
    { key: "chatHistory", label: "Chat History" },
    { key: "target", label: "Target" },
  ];

  const actions = (
    <Button
      size="sm"
      color="primary"
      startContent={<Icon icon="mdi:plus" />}
      onPress={() => setIsCreating(true)}
    >
      Add Test Case
    </Button>
  );

  return (
    <div className="flex">
      <div className="flex-1 pr-4 flex flex-col">
        <div className="flex items-center">
          <Button
            size="sm"
            variant="light"
            startContent={<Icon icon="mdi:arrow-left" />}
            onPress={onBack}
          >
            Back to Datasets
          </Button>
        </div>
        <div className="flex-1 min-h-0">
          <DataTable<TestCaseType>
            data={testCases}
            columns={columns}
            actions={actions}
            onRowClick={setSelectedTestCase}
          />
        </div>
      </div>
      <div className="w-[400px] border-l pl-4 h-full">
        {isCreating ? (
          <TestCase onClose={() => setIsCreating(false)} />
        ) : selectedTestCase ? (
          <TestCase
            testCase={selectedTestCase}
            onClose={() => setSelectedTestCase(null)}
          />
        ) : (
          <DatasetInformation dataset={dataset} />
        )}
      </div>
    </div>
  );
}
