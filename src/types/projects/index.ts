
export type Project = {
  id: string;
  name: string;
  updatedAt: string;
  updatedBy: string;
};

export type ProjectDocument = {
  id: string;
  project_id: string;
  filename: string;
  folder: string;
  uploadedDate: string;
  status?: "active" | "archived";
  content?: string;
};

export type ProjectAgent = {
  id: string;
  name: string;
  folder?: string;
  type: "table_of_contents" | "summary";
  projectId: string;
  content?: string;
};
