import {
  Document,
  ParsedSnapshot,
  IndexedSnapshot,
} from "@/types/documents/document";

export const documents: Document[] = [
  {
    id: "1",
    filename: "NEC reg 1.0",
    folder: "evsDrive/documents/1/",
    uploadedDate: "2024-02-15",
    uploadedBy: "Rohit Joshi",
    status: "active",
    content: "my content",
  },
  {
    id: "2",
    filename: "NEC reg 2.0",
    folder: "evsDrive/documents/2/",
    uploadedDate: "2024-02-14",
    uploadedBy: "Rohit Joshi",
    status: "active",
    content: "my content",
  },
  {
    id: "3",
    filename: "Blueprint A",
    folder: "evsDrive/projects/1/documents/3/",
    uploadedDate: "2024-02-15",
    uploadedBy: "Rohit Joshi",
    status: "active",
    content: "my content",
  },
  {
    id: "4",
    filename: "Blueprint B",
    folder: "evsDrive/projects/2/documents/4/",
    uploadedDate: "2024-02-15",
    uploadedBy: "Rohit Joshi",
    status: "active",
    content: "my content",
  },
];

export const parsedSnapshots: ParsedSnapshot[] = [
  {
    id: "1",
    documentId: "1",
    filename: "NEC reg 1.0",
    status: "completed",
    updatedAt: "2024-02-15",
    updatedBy: "Rohit Joshi",
    content: "my content",
  },
];

export const indexedSnapshots: IndexedSnapshot[] = [
  {
    id: "1",
    documentId: "1",
    filename: "NEC reg 1.0",
    parsedSnapshotId: "1",
    chunkingStrategy: "paragraph",
    status: "completed",
    updatedAt: "2024-02-15",
    updatedBy: "Rohit Joshi",
  },
];
