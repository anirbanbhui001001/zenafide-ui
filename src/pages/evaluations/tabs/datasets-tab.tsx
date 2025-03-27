import { useState, useEffect } from "react";
import { Button, Alert } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import DatasetDetails from "@/components/evals/dataset/dataset-details";
// import { datasets } from "@/data/evals/datasets";
import { Dataset } from "@/types/evals/dataset";
import AddDatasetsModal from "./add-datasets";
import { supabase } from "@/utils/superbase";
import LoadingOverlay from "@/components/loading";

export default function DataSetsTab() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openAddDatasetModal, setOpenAddDatasetModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);

  const getDatasets = async () => {
    let { data, error } = await supabase
      .from('datasets')
      .select('*')
      .order('createdAt', { ascending: true });
    if (error) console.log(error);
    setDatasets(data ?? []);
  };

  useEffect(() => {
    getDatasets();
  }, []);

  const deleteDataset = async (item: Dataset) => {
    const { error } = await supabase.from('datasets').delete().eq('id', item.id);
    if (error) console.log(error);
    getDatasets();
  }

  const handleModalClose = () => {
    getDatasets();
    setOpenAddDatasetModal(false);
  };

  return (
    <>
      {error &&
        <div className="w-full flex items-center my-3 p-4">
          <Alert
            color="danger"
            title={`Error: ${error}`}
            onClose={() => setError(null)}
          />
        </div>
      }
      <LoadingOverlay loading={loading} />
      <DataTable
        data={datasets}
        columns={[
          {
            key: "select",
            label: "Select",
            width: 100,
            render: (item: Dataset) => (
              <button
                onClick={() => setSelectedDataset(item)}
                className="text-primary"
              >
                {selectedDataset?.id === item.id ? "Selected" : "Select"}
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
            key: "description",
            label: "Description",
            width: 100,
          },
          {
            key: "creator",
            label: "Creator",
            width: 100,
          },
          {
            key: "updated",
            label: "Updated",
            width: 100,
          },
          {
            key: "type",
            label: "Type",
            width: 100,
          },
          {
            key: "action",
            label: "Action",
            width: 100,
            render: (item: Dataset) => (
              <Button
                color="secondary"
                onPress={() => deleteDataset(item)}
              >
                <Icon icon="tabler:trash" />
                Delete
              </Button>
            ),
          }
        ]}
        title="Datasets"
        actions={
          <Button
            color="secondary"
            onPress={() => setOpenAddDatasetModal(true)}
          >
            <Icon icon="tabler:plus" />
            Add Datasets
          </Button>
        }
      />
      {selectedDataset && <DatasetDetails
        dataset={selectedDataset}
      />}
      <AddDatasetsModal isOpen={openAddDatasetModal} onClose={handleModalClose} />
    </>
  )
}
