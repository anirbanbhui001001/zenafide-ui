
import { Regulation, RegulationAgent } from "@/types/regulations";

export const regulations: Regulation[] = [
  {
    id: "1",
    filename: "NEC reg 1.0",
    folder: "evsDrive/documents/1/",
    uploadedDate: "2024-02-15",
    status: "active",
    content: "my content",
  },
  {
    id: "2",
    filename: "NEC reg 2.0",
    folder: "evsDrive/documents/2/",
    uploadedDate: "2024-02-15",
    status: "active",
  },
];

export const regulationAgents: RegulationAgent[] = [
  {
    id: "1",
    name: "NEC 1.0 Table of Contents",
    folder: "evsDrive/documents/1/table-of-contents",
    type: "table_of_contents",
    regulationId: "1",
    content: "my table of contents"
  },
  {
    id: "2",
    name: "NEC 1.0 Summary",
    folder: "evsDrive/documents/1/summary",
    type: "summary",
    regulationId: "1",
    content: "my summary"
  },
  {
    id: "3",
    name: "NEC 2.0 Table of Contents",
    folder: "evsDrive/documents/2/table-of-contents",
    type: "table_of_contents",
    regulationId: "2",
    content: "my table of contents"
  },
  {
    id: "4",
    name: "NEC 1.0 Summary",
    folder: "evsDrive/documents/2/summary",
    type: "summary",
    regulationId: "2",
    content: "my summary"
  },
];
