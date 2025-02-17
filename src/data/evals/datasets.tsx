
import { Dataset } from "@/types/dataset";

export const datasets: Dataset[] = [
  {
    id: "1",
    name: "General Conversation Tests",
    description: "Basic conversation scenarios",
    testCases: 3,
    creator: "Admin",
    updated: "2h ago",
    type: "conversation"
  },
  {
    id: "2",
    name: "Technical Support Tests",
    description: "Support-related scenarios",
    testCases: 0,
    creator: "Admin",
    updated: "1h ago",
    type: "support"
  }
];
