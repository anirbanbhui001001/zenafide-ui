
import React from "react";
import DataTable from "@/components/table/datatable";
import { projects } from "@/data/projects";
import { Project } from "@/types/projects";

interface ProjectsTabProps {
  onProjectSelect: (project: Project) => void;
}

export default function ProjectsTab({ onProjectSelect }: ProjectsTabProps) {
  const columns = [
    { 
      key: "name", 
      label: "Name",
      render: (project: any) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:file-outline" className="text-gray-500" width={20} />
          {project.name}
        </div>
      )
    },
    { key: "updatedAt", label: "Updated At" },
    { key: "updatedBy", label: "Updated By" },
  ];

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={projects}
        columns={columns}
        onRowClick={onProjectSelect}
      />
    </div>
  );
}
