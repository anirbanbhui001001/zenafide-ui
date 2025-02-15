
import React from "react";
import { Icon } from "@iconify/react";
import { Button, Select, SelectItem } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { experimentResults, scoreMetrics, experimentMetrics } from "@/data/experiments";
import { ExperimentResult } from "@/types/experiment-details";

interface ExperimentDetailsProps {
  id: string;
  onBack: () => void;
}

export default function ExperimentDetails({
  id,
  onBack,
}: ExperimentDetailsProps) {
  const columns = [
    { key: "input", label: "Input" },
    { key: "output", label: "Output" },
    { key: "expected", label: "Expected" },
    { key: "tags", label: "Tags" },
    { key: "factuality", label: "Factuality" },
    { key: "factualityParsed", label: "Factuality parsed" },
    { key: "avgRelevance", label: "avg_relevance" },
    { key: "maxRelevance", label: "max_relevance" },
  ];

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <button onClick={onBack} className="text-sm hover:text-gray-900">
                  Experiments
                </button>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2.5">/</span>
                  <span className="text-sm text-gray-500">Experiment {id}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="flex gap-2 mb-4">
          <Button size="sm" variant="bordered" className="border-1">
            All rows
            <Icon icon="material-symbols:expand-more" />
          </Button>
          <Button size="sm" variant="bordered" className="border-1">
            <Icon icon="material-symbols:view-column" />
            Columns
          </Button>
          <Button size="sm" variant="bordered" className="border-1">
            <Icon icon="material-symbols:filter-alt" />
            Filter
          </Button>
          <Button size="sm" variant="bordered" className="border-1">
            <Icon icon="material-symbols:group-work" />
            Group
          </Button>
          <Button size="sm" variant="bordered" className="border-1">
            <Icon icon="material-symbols:height" />
            Row height
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">Score distribution for</span>
          <Select
            size="sm"
            variant="light"
            className="w-40"
            defaultSelectedKeys={['avgRelevance']}
            items={scoreMetrics}
          >
            {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
          </Select>
        </div>
        <div className="h-8 bg-gray-100 rounded-full relative">
          <div
            className="absolute right-0 h-full w-[20%] bg-gray-400 rounded-r-full"
            style={{ right: '10%' }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {experimentMetrics.map((metric) => (
          <div key={metric.label} className="p-4 border rounded-lg">
            <div className="text-sm text-gray-600">{metric.label}</div>
            <div className="text-2xl font-semibold">{metric.value}</div>
            <div className="text-xs text-gray-500">{metric.subtext}</div>
          </div>
        ))}
      </div>

      <DataTable<ExperimentResult>
        data={experimentResults}
        columns={columns}
      />
    </div>
  );
}
