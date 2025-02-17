import React from "react";
import DataTable from "@/components/table/datatable";
import { regulationAgents } from "@/data/regulations";

export default function AgentsTab() {
  const columns = [
    { key: "name", label: "name" }, // Empty label for no header
    { key: "folder", label: "folder" },
  ];

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={regulationAgents}
        columns={columns}
        hideHeader={true}
        onRowClick={() => {}} // Placeholder for future implementation
      />
    </div>
  );
}
