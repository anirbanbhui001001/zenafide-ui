
import React from "react";
import DataTable from "@/components/table/datatable";
import { regulations } from "@/data/regulations";

export default function FilesTab() {
  const columns = [
    { key: "filename", label: "" },  // Empty label for no header
  ];

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={regulations}
        columns={columns}
        hideHeader={true}
        onRowClick={() => {}} // Placeholder for future implementation
      />
    </div>
  );
}
