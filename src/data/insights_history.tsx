
import { Insight } from "@/types/core/insights";

export const insightsHistory: Insight[] = [
  {
    id: "1",
    name: "NEC 1.0 Table of Contents",
    folder: "evsDrive/documents/1/table-of-contents",
    type: "table_of_contents",
    content: "my table of contents",
    parent: "regulation",
    parent_id: "1"
  },
  {
    id: "2",
    name: "NEC 1.0 Summary",
    folder: "evsDrive/documents/1/summary",
    type: "summary",
    content: "my summary",
    parent: "regulation",
    parent_id: "1"
  },
  {
    id: "3",
    name: "NEC 2.0 Table of Contents",
    folder: "evsDrive/documents/2/table-of-contents",
    type: "table_of_contents",
    content: "my table of contents",
    parent: "regulation",
    parent_id: "2"
  },
  {
    id: "4",
    name: "NEC 1.0 Summary",
    folder: "evsDrive/documents/2/summary",
    type: "summary",
    content: "my summary",
    parent: "regulation",
    parent_id: "2"
  },
  {
    id: "5",
    name: "Blueprint A Summary",
    folder: "evsDrive/projects/1/documents/3/overview",
    type: "summary",
    content: "my summary",
    parent: "project",
    parent_id: "1"
  },
  {
    id: "6",
    name: "Blueprint B Summary",
    folder: "evsDrive/projects/2/documents/4/overview",
    type: "summary",
    content: "my summary",
    parent: "project",
    parent_id: "2"
  }
];
