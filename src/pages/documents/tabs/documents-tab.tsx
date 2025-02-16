
import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { documents } from "@/data/documents";
import { Document } from "@/types/document";

interface DocumentsTabProps {
  onDocumentSelect: (document: Document) => void;
}

export default function DocumentsTab({ onDocumentSelect }: DocumentsTabProps) {
  const columns = [
    { key: "filename", label: "Filename" },
    { key: "uploadedDate", label: "Uploaded Date" },
    { key: "uploadedBy", label: "Uploaded By" },
    { key: "status", label: "Status" },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (document: Document) => (
        <div className="flex justify-end gap-2">
          <Icon
            icon="mdi:file-eye"
            width={20}
            className="cursor-pointer"
            onClick={() => onDocumentSelect(document)}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={documents}
      columns={columns}
      title="All Documents"
    />
  );
}
