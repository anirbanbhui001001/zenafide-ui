
import { useEffect, useState } from "react";
import { Alert, Button } from "@heroui/react";
import DataTable from "@/components/table/datatable";
// import { insightsHistory } from "@/data/insights_history";
import { Insight } from "@/types/core/insights";
import { supabase } from "@/utils/superbase";
import { Icon } from "@iconify/react";
import LoadingOverlay from "@/components/loading";
import AddInsightsModal from "./add-insights";

interface InsightsTabProps {
  onInsightSelect: (insight: Insight) => void;
  selectedInsight: Insight | null;
}

export default function InsightsTab({ onInsightSelect, selectedInsight }: InsightsTabProps) {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [openAddInsightsModal, setOpenAddInsightsModal] = useState(false);

  const getInsights = async () => {
    setLoading(true);
    let { data, error } = await supabase
      .from('insights')
      .select('*')
      .order('createdAt', { ascending: true });

    if (error) console.log(error);
    setInsights(data ?? []);
    setLoading(false);
  };

  const deleteInsight = async (item: Insight) => {
    const { error } = await supabase.from('insights').delete().eq('id', item.id);
    if (error) console.log(error);
    getInsights();
  }

  useEffect(() => {
    getInsights();
  }, []);

  const handleModalClose = () => {
    getInsights();
    setOpenAddInsightsModal(false);
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
        data={insights}
        columns={[
          {
            key: "action",
            label: "Action",
            width: 100,
            render: (item: Insight) => (
              <button
                onClick={() => onInsightSelect(item)}
                className="text-primary"
              >
                {selectedInsight?.id === item.id ? "Selected" : "Select"}
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
            key: "type",
            label: "Type",
            width: 100,
          },
          {
            key: "content",
            label: "Content",
            width: 100,
          },
          {
            key: "parent",
            label: "Parent",
            width: 100,
          },
          {
            key: "parent_id",
            label: "Parent ID",
            width: 100,
          },
          {
            key: "action",
            label: "Actions",
            width: 100,
            //delete insight
            render: (item: Insight) => {
              return (
                <button
                  onClick={() => deleteInsight(item)}
                  className="text-primary"
                >
                  <Icon icon="tabler:trash" />
                </button>
              );
            }
          },
        ]}
        title="Insights"
        actions={
          <Button
            color="secondary"
            onPress={() => setOpenAddInsightsModal(true)}
          >
            <Icon icon="tabler:plus" />
            Add Insights
          </Button>
        }
      />
      <AddInsightsModal isOpen={openAddInsightsModal} onClose={handleModalClose} />
    </>
  )
}
