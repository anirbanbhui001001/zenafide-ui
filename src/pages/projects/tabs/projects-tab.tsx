import DataTable from "@/components/table/datatable";
import { projects } from "@/data/projects";
import { Project } from "@/types/projects";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

interface ProjectsTabProps {
  onProjectSelect: (project: Project) => void;
}

export default function ProjectsTab({ onProjectSelect }: ProjectsTabProps) {
  const actions = (
    <Button size="sm" color="primary" startContent={<Icon icon="mdi:plus" />}>
      Add Project
    </Button>
  );

  const columns = [
    { key: "id", label: "ID", width: 50 },
    {
      key: "name",
      label: "Name",
      render: (project: Project) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:lightbulb-on-outline" className="text-gray-500" width={20} />
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
        actions={actions}
        onRowClick={onProjectSelect}
      />
    </div>
  );
}