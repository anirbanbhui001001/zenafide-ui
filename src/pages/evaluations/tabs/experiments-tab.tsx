
import React, { useState, useEffect } from "react";
import { Alert, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import ExperimentDetails from "@/components/evals/experiments/experiment-details";
// import { experiments } from "@/data/evals/experiments";
import { Experiment } from "@/types/evals/experiment";
import { supabase } from "@/utils/superbase";
import LoadingOverlay from "@/components/loading";

export default function ExperimentsTab() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);

  const getExperiments = async () => {
    let { data, error } = await supabase
      .from('experiments')
      .select('*')
      .order('createdAt', { ascending: true });
    if (error) console.log(error);
    setExperiments(data ?? []);
  };

  const handleDelete = async (item: Experiment) => {
    const { error } = await supabase.from('experiments').delete().eq('id', item.id);
    if (error) console.log(error);
    getExperiments();
  }

  useEffect(() => {
    getExperiments();
  }, [])

  return (
    <>
      {
        error && <Alert color="danger" title={`Error: ${error}`} onClose={() => setError(null)} />
      }
      <LoadingOverlay loading={loading} />
      <DataTable
        data={experiments}
        columns={[
          {
            key: 'select',
            label: 'Select',
            width: 100,
            render: (item: Experiment) => (
              <button
                onClick={() => setSelectedExperiment(item)}
                className="text-primary"
              >
                {selectedExperiment?.id === item.id ? "Selected" : "Select"}
              </button>
            ),
          },
          {
            key: "id",
            label: "ID",
            width: 100,
          },
          {
            key: "name",
            label: "Name",
            width: 100,
          },
          {
            key: "errors",
            label: "Errors",
            width: 100,
          },
          {
            key: "llmDuration",
            label: "llm Duration",
            width: 100,
          },
          {
            key: "promptTokens",
            label: "Prompt Tokens",
            width: 100,
          },
          {
            key: "completionTokens",
            label: "Completion Tokens",
            width: 100,
          },
          {
            key: "totalTokens",
            label: "Total Tokens",
            width: 100,
          },
          {
            key: "updated",
            label: "Updated",
            width: 100,
          },
          {
            key: "action",
            label: "Action",
            width: 100,
            render: (item: Experiment) => (
              <Button
                color="secondary"
                onPress={() => handleDelete(item)}
              >
                <Icon icon="tabler:trash" />
                Delete
              </Button>
            ),
          }
        ]}
        title="Experiments"
      />
      {
        selectedExperiment &&
        <ExperimentDetails
          experiments={selectedExperiment}
        />
      }
    </>
  )
}
