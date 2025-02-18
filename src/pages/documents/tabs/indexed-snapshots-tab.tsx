
import React from "react";
import DataTable from "@/components/table/datatable";
import { indexedSnapshots } from "@/data/documents";

export default function IndexedSnapshotsTab() {
  const columns = [
    { 
      key: "filename", 
      label: "Filename",
      render: (snapshot: any) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:file-outline" className="text-gray-500" width={20} />
          {snapshot.filename}
        </div>
      )
    },
    { key: "docSnapshotId", label: "Doc Snapshot ID" },
    { key: "parsedSnapshotId", label: "Parsed Snapshot ID" },
    { key: "chunkingStrategy", label: "Chunking Strategy" },
    { key: "status", label: "Status" },
    { key: "updatedAt", label: "Updated At" },
    { key: "updatedBy", label: "Updated By" },
  ];

  return (
    <DataTable
      data={indexedSnapshots}
      columns={columns}
      title="Indexed Snapshots"
    />
  );
}
