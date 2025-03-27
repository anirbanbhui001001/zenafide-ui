import DataTable from "@/components/table/datatable";
import { projects } from "@/data/projects";
import { Project } from "@/types/projects";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

interface ProjectsTabProps {
  onProjectSelect: (project: Project) => void;
}

export default function ProjectsTab({ onProjectSelect }: ProjectsTabProps) {
  return (
    <div></div>
  )
}