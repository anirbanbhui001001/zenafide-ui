
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { experiments } from "@/data/experiments";
import { Experiment } from "@/types/experiment";

export default function ExperimentsTab() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "errors", label: "Errors" },
    { key: "duration", label: "Duration (avg)" },
    { key: "llmDuration", label: "LLM duration" },
    { key: "promptTokens", label: "Prompt tokens" },
    { key: "completionTokens", label: "Completion tokens" },
    { key: "totalTokens", label: "Total tokens" },
    { key: "creator", label: "Creator" },
    { key: "updated", label: "Updated" },
    { key: "examples", label: "Examples" },
    { key: "source", label: "Source" },
  ];

  const actions = (
    <div className="flex gap-2">
      <Button size="sm" variant="flat" startContent={<Icon icon="mdi:database" />}>
        Dataset
      </Button>
      <Button size="sm" variant="flat" startContent={<Icon icon="mdi:percent" />}>
        Scorers
      </Button>
      <Button
        size="sm"
        color="primary"
        startContent={<Icon icon="mdi:plus" />}
      >
        Experiment
      </Button>
      <Button
        size="sm"
        color="secondary"
        startContent={<Icon icon="mdi:play" />}
      >
        Run
      </Button>
    </div>
  );

  return (
    <DataTable<Experiment>
      data={experiments}
      columns={columns}
      actions={actions}
    />
  );
}
