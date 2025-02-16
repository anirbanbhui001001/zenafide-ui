
import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { documents } from "@/data/documents";
import { Document } from "@/types/document";
import { useNavigate } from "react-router-dom";

export default function DocumentsTab() {
  const navigate = useNavigate();

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
            onClick={() => navigate(`/documents/viewer/${document.id}`)}
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
