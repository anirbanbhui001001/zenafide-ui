
import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { projects } from "@/data/projects";
import { Project } from "@/types/projects";

interface DocumentsTabProps {
  onProjectSelect: (project: Project) => void;
}

export default function DocumentsTab({
  onProjectSelect,
}: DocumentsTabProps) {
  const columns = [
    { key: "filename", label: "Filename" },
    { key: "folder", label: "Folder" },
    { key: "uploadedDate", label: "Uploaded Date" },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (project: Project) => (
        <div className="flex justify-end gap-2">
          <Icon
            icon="mdi:file-eye"
            width={20}
            className="cursor-pointer"
            onClick={() => onProjectSelect(project)}
          />
        </div>
      ),
    },
  ];

  return <DataTable data={projects} columns={columns} />;
}
