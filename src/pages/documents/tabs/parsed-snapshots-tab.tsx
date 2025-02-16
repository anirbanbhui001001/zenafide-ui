
import React from "react";
import DataTable from "@/components/table/datatable";
import { parsedSnapshots } from "@/data/documents";

export default function ParsedSnapshotsTab() {
  const columns = [
    { key: "filename", label: "Filename" },
    { key: "docSnapshotId", label: "Doc Snapshot ID" },
    { key: "parsedSnapshotId", label: "Parsed Snapshot ID" },
    { key: "status", label: "Status" },
    { key: "updatedAt", label: "Updated At" },
    { key: "updatedBy", label: "Updated By" },
  ];

  return (
    <DataTable
      data={parsedSnapshots}
      columns={columns}
      title="Parsed Snapshots"
    />
  );
}
