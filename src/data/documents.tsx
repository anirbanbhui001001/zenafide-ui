
import { Document, ParsedSnapshot, IndexedSnapshot } from "@/types/document";

export const documents: Document[] = [
  {
    id: "1",
    filename: "requirements.pdf",
    uploadedDate: "2024-02-15",
    uploadedBy: "John Doe",
    status: "active",
  },
  {
    id: "2",
    filename: "architecture.docx",
    uploadedDate: "2024-02-14",
    uploadedBy: "Jane Smith",
    status: "active",
  },
];

export const parsedSnapshots: ParsedSnapshot[] = [
  {
    id: "1",
    documentId: "1",
    filename: "requirements.pdf",
    docSnapshotId: "doc_1",
    parsedSnapshotId: "parsed_1",
    status: "completed",
    updatedAt: "2024-02-15",
    updatedBy: "John Doe",
  },
];

export const indexedSnapshots: IndexedSnapshot[] = [
  {
    id: "1",
    documentId: "1",
    filename: "requirements.pdf",
    docSnapshotId: "doc_1",
    parsedSnapshotId: "parsed_1",
    chunkingStrategy: "paragraph",
    status: "completed",
    updatedAt: "2024-02-15",
    updatedBy: "John Doe",
  },
];
