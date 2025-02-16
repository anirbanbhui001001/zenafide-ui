
import { Regulation, RegulationAgent } from "@/types/regulation";

export const regulations: Regulation[] = [
  {
    id: "1",
    filename: "NEC reg 1.0",
    folder: "NEC",
    uploadedDate: "2024-02-15",
    status: "active",
  },
  {
    id: "2",
    filename: "NEC reg 2.0",
    folder: "NEC",
    uploadedDate: "2024-02-15",
    status: "active",
  },
];

export const regulationAgents: RegulationAgent[] = [
  {
    id: "1",
    name: "Table of Contents",
    type: "table_of_contents",
    regulationId: "1",
  },
  {
    id: "2",
    name: "Summary",
    type: "summary",
    regulationId: "1",
  },
];
