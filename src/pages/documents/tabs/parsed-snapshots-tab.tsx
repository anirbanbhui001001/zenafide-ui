
import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { parsedSnapshots } from "@/data/documents";
import { Document, ParsedSnapshot } from "@/types/documents/document";
import { Button } from "@heroui/react";

interface ParsedSnapshotsTabProps {
  onDocumentSelect?: (document: Document) => void;
}

export default function ParsedSnapshotsTab({ onDocumentSelect }: ParsedSnapshotsTabProps) {
  const actions = (
    <Button size="sm" color="primary" startContent={<Icon icon="mdi:play" />}>
      Run Extraction
    </Button>
  );
  const columns = [
    {
      key: "id",
      label: "ID",
      width: "5%",
    },
    {
      key: "documentId",
      label: "Doc ID",
      width: "5%",
    },
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
    { key: "status", label: "Status" },
    { key: "updatedAt", label: "Updated At" },
    { key: "updatedBy", label: "Updated By" },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (snapshot: ParsedSnapshot) => (
        <div className="flex justify-end gap-2">
          <Icon
            icon="mdi:file-eye"
            width={20}
            className="cursor-pointer"
            onClick={() => onDocumentSelect?.({
              id: snapshot.documentId,
              filename: snapshot.filename,
              uploadedDate: snapshot.updatedAt,
              uploadedBy: snapshot.updatedBy,
              status: 'active'
            })}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable
      data={parsedSnapshots}
      columns={columns}
      title="Parsed Snapshots"
      actions={actions}
    />
  );
}
