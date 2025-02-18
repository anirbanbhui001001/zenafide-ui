export interface Document {
  id: string;
  filename: string;
  folder: string;
  uploadedDate: string;
  uploadedBy: string;
  status: "active" | "archived";
  content?: string;
}

export interface ParsedSnapshot {
  id: string;
  documentId: string;
  filename: string;
  status: "processing" | "completed" | "failed";
  updatedAt: string;
  updatedBy: string;
  content?: string;
}

export interface IndexedSnapshot {
  id: string;
  documentId: string;
  parsedSnapshotId: string;
  filename: string;
  chunkingStrategy: string;
  status: "processing" | "completed" | "failed";
  updatedAt: string;
  updatedBy: string;
}
