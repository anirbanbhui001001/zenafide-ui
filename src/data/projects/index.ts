
import { Project, ProjectAgent } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "1",
    filename: "Project A",
    folder: "folder/1/projects/1/",
    uploadedDate: "2024-02-15",
    status: "active",
    content: "Project A content",
  },
  {
    id: "2",
    filename: "Project B",
    folder: "folder/2/projects/2/",
    uploadedDate: "2024-02-15",
    status: "active",
  },
];

export const projectAgents: ProjectAgent[] = [
  {
    id: "1",
    name: "Project A Overview",
    folder: "folder/1/projects/1/overview",
    type: "summary",
    projectId: "1",
    content: "Project A overview content"
  },
  {
    id: "2",
    name: "Project B Overview",
    folder: "folder/2/projects/2/overview",
    type: "summary",
    projectId: "2",
    content: "Project B overview content"
  },
];
