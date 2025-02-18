
import React from "react";
import DataTable from "@/components/table/datatable";
import { projectDocuments } from "@/data/projects";

interface DocumentsTabProps {
  projectId?: string;
}

export default function DocumentsTab({ projectId }: DocumentsTabProps) {
  const columns = [
    { 
      key: "filename", 
      label: "Name",
      render: (document: Document) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:file-outline" className="text-gray-500" width={20} />
          {document.filename}
        </div>
      )
    },
    { key: "uploadedDate", label: "Uploaded Date" },
    { key: "status", label: "Status" },
  ];

  const filteredDocuments = projectId
    ? projectDocuments.filter((doc) => doc.project_id === projectId)
    : projectDocuments;

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={filteredDocuments}
        columns={columns}
      />
    </div>
  );
}
