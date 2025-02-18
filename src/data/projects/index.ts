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
    id: "3",
    project_id: "1",
    filename: "Blueprint A",
    folder: "evsDrive/projects/1/documents/3/",
    uploadedDate: "2024-02-15",
    status: "active",
    content: "Blueprint A content",
  },
  {
    id: "4",
    project_id: "2",
    filename: "Blueprint B",
    folder: "evsDrive/projects/2/documents/4/",
    uploadedDate: "2024-02-15",
    status: "active",
  },
];

export const projectAgents: ProjectAgent[] = [
  {
    id: "3",
    name: "Blueprint A Summary",
    folder: "evsDrive/projects/1/documents/3/overview",
    type: "summary",
    projectId: "1",
    content: "my summary",
  },
  {
    id: "4",
    name: "Blueprint B Summary",
    folder: "evsDrive/projects/2/documents/4/overview",
    type: "summary",
    projectId: "2",
    content: "my summary",
  },
];
