
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { insightsHistory } from "@/data/insights_history";
import { Insight } from "@/types/core/insights";

interface InsightsTabProps {
  onInsightSelect: (insight: Insight) => void;
}

export default function InsightsTab({ onInsightSelect }: InsightsTabProps) {
  const columns = [
    { key: "id", label: "ID", width: "5%" },
    {
      key: "name",
      label: "Name",
      render: (insight: Insight) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:lightbulb-outline" className="text-gray-500 flex-shrink-0" width={20} />
          <span className="truncate">{insight.name}</span>
        </div>
      ),
    },
    { 
      key: "folder", 
      label: "Folder",
      width: "35%",
      render: (insight: Insight) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:folder-outline" className="text-gray-500 flex-shrink-0" width={20} />
          <span className="truncate">{insight.folder}</span>
        </div>
      )
    },
    { key: "parent", label: "Parent" },
    { key: "parent_id", label: "Parent ID" },
    {
      key: "actions",
      label: "Actions",
      width: "5%",
      align: "end" as const,
      render: (insight: Insight) => (
        <div className="flex justify-end gap-2">
          <Icon
            icon="mdi:file-eye"
            width={20}
            className="cursor-pointer"
            onClick={() => onInsightSelect(insight)}
          />
        </div>
      ),
    },
  ];

  return <DataTable data={insightsHistory} columns={columns} title="All Insights" />;
}
