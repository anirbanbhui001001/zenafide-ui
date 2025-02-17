import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import DatasetDetails from "@/components/evals/dataset/dataset-details";
import { datasets } from "@/data/evals/datasets";
import { Dataset } from "@/types/dataset";

export default function DataSetsTab() {
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);

  const columns = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "testCases", label: "Test Cases" },
    { key: "type", label: "Type" },
    { key: "creator", label: "Creator" },
    { key: "updated", label: "Updated" },
  ];

  const actions = (
    <Button size="sm" color="primary" startContent={<Icon icon="mdi:plus" />}>
      Add Dataset
    </Button>
  );

  if (selectedDataset) {
    return (
      <DatasetDetails
        dataset={selectedDataset}
        onBack={() => setSelectedDataset(null)}
      />
    );
  }

  return (
    <DataTable<Dataset>
      data={datasets}
      columns={columns}
      actions={actions}
      onRowClick={setSelectedDataset}
    />
  );
}
