
import React from "react";
import DataTable from "@/components/table/datatable";
import { indexedSnapshots } from "@/data/documents";

export default function IndexedSnapshotsTab() {
  const columns = [
    { key: "filename", label: "Filename" },
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
