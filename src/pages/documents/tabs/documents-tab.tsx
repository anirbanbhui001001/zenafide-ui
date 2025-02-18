import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { documents } from "@/data/documents";
import { Document } from "@/types/documents/document";
import {Button} from "@heroui/react";

interface DocumentsTabProps {
  onDocumentSelect: (document: Document) => void;
}

export default function DocumentsTab({ onDocumentSelect }: DocumentsTabProps) {
  const actions = (
    <Button size="sm" color="primary" startContent={<Icon icon="mdi:plus" />}>
      Add Document
    </Button>
  );

  const columns = [
    { 
      key: "filename", 
      label: "Filename",
      width: "20%",
      render: (document: Document) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:file-outline" className="text-gray-500 flex-shrink-0" width={20} />
          <span className="truncate">{document.filename}</span>
        </div>
      )
    },
    { 
      key: "folder", 
      label: "Folder",
      width: "40%",
      render: (document: Document) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:folder-outline" className="text-gray-500 flex-shrink-0" width={20} />
          <span className="truncate">{document.folder}</span>
        </div>
      )
    },
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

  return <DataTable data={documents} columns={columns} title="All Documents" actions={actions} />;
}