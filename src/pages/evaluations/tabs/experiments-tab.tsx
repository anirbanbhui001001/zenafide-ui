
import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import DataTable from "@/components/table/datatable";
import ExperimentDetails from "@/components/evals/experiments/experiment-details";
import { experiments } from "@/data/evals/experiments";
import { Experiment } from "@/types/evals/experiment";

export default function ExperimentsTab() {
  const navigate = useNavigate();
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null);

  const columns = [
    { key: "id", label: "ID", width: "5%" },
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

  if (selectedExperiment) {
    return (
      <ExperimentDetails
        id={selectedExperiment}
        onBack={() => setSelectedExperiment(null)}
      />
    );
  }

  return (
    <DataTable<Experiment>
      data={experiments}
      columns={columns}
      actions={actions}
      onRowClick={(experiment) => setSelectedExperiment(experiment.id)}
    />
  );
}
