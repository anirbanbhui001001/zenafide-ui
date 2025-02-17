import { Project, ProjectDocument, ProjectAgent } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "1",
    name: "Project A",
    updatedAt: "2023-07-31",
    updatedBy: "Rohit Joshi",
  },
  {
    id: "2",
    name: "Project B",
    updatedAt: "2024-02-18",
    updatedBy: "Rohit Joshi",
  },
];

export const projectDocuments: ProjectDocument[] = [
  {
    id: "1",
    project_id: "1",
    filename: "Blueprint A",
    folder: "folder/1/projects/1/",
    uploadedDate: "2024-02-15",
    status: "active",
    content: "Blueprint A content",
  },
  {
    id: "2",
    project_id: "2",
    filename: "Blueprint B",
    folder: "folder/2/projects/2/",
    uploadedDate: "2024-02-15",
    status: "active",
  },
];

export const projectAgents: ProjectAgent[] = [
  {
    id: "1",
    name: "Blueprint A Summary",
    folder: "folder/1/projects/1/overview",
    type: "summary",
    projectId: "1",
    content: "my summary",
  },
  {
    id: "2",
    name: "Blueprint B Summary",
    folder: "folder/2/projects/2/overview",
    type: "summary",
    projectId: "2",
    content: "my summary",
  },
];
