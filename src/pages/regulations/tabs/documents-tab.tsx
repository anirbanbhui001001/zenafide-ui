import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { regulations } from "@/data/regulations";
import { Regulation } from "@/types/regulations";

interface DocumentsTabProps {
  onRegulationSelect: (regulation: Regulation) => void;
}

export default function DocumentsTab({
  onRegulationSelect,
}: DocumentsTabProps) {
  const columns = [
    { key: "filename", label: "Filename" },
    { key: "folder", label: "Folder" },
    { key: "uploadedDate", label: "Uploaded Date" },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (regulation: Regulation) => (
        <div className="flex justify-end gap-2">
          <Icon
            icon="mdi:file-eye"
            width={20}
            className="cursor-pointer"
            onClick={() => onRegulationSelect(regulation)}
          />
        </div>
      ),
    },
  ];

  return (
    <DataTable data={regulations} columns={columns} title="All Regulations" />
  );
}
