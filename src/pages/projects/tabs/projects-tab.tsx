
import React from "react";
import DataTable from "@/components/table/datatable";
import { projects } from "@/data/projects";
import { Project } from "@/types/projects";

interface ProjectsTabProps {
  onProjectSelect: (project: Project) => void;
}

export default function ProjectsTab({ onProjectSelect }: ProjectsTabProps) {
  const columns = [
    { key: "name", label: "Name" },
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
