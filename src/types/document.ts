
export interface Document {
  id: string;
  filename: string;
  uploadedDate: string;
  uploadedBy: string;
  status: 'active' | 'archived';
}

export interface ParsedSnapshot {
  id: string;
  documentId: string;
  filename: string;
  docSnapshotId: string;
  parsedSnapshotId: string;
  status: 'processing' | 'completed' | 'failed';
  updatedAt: string;
  updatedBy: string;
}

export interface IndexedSnapshot {
  id: string;
  documentId: string;
  filename: string;
  docSnapshotId: string;
  parsedSnapshotId: string;
  chunkingStrategy: string;
  status: 'processing' | 'completed' | 'failed';
  updatedAt: string;
  updatedBy: string;
}
