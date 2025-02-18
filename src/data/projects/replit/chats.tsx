
import { Chat, AssistantMessage, FileChange } from "@/types/assistant";

const fileChanges: FileChange[] = [
  {
    filePath: "projects/1/overview",
    description: "Project A Overview",
    additions: 500,
    deletions: 0,
    canApply: true,
    content: "Project A overview content",
  },
  {
    filePath: "projects/1/summary",
    description: "Project A Summary",
    additions: 99,
    deletions: 0,
    canApply: true,
    content: "Project A summary",
  },
];

export const chats: Chat[] = [
  {
    id: "1",
    title: "Generate Project A Overview",
    lastMessageTime: "2 minutes ago",
    messages: [
      {
        id: "msg1",
        content: "Generate Project A Overview",
        timestamp: new Date(Date.now() - 120000).toISOString(),
        isUser: true,
        files: [],
      },
      {
        id: "msg2",
        content: "I'll help you analyze Project A...",
        timestamp: new Date(Date.now() - 60000).toISOString(),
        isUser: false,
        files: [
          "projects/1/overview",
          "projects/1/summary",
        ],
        proposedChanges: [fileChanges[0], fileChanges[1]],
      },
    ],
  }
];
