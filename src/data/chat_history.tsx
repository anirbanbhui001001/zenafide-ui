
import { Chat, AssistantMessage, FileChange } from "@/types/assistant";

const fileChanges: FileChange[] = [
  {
    filePath: "evsDrive/table-of-contents",
    description: "NEC 1.0 Table of Contents",
    additions: 500,
    deletions: 0,
    canApply: true,
    content: "my table-of-contents",
  },
  {
    filePath: "evsDrive/summary",
    description: "NEC 1.0 Summary",
    additions: 99,
    deletions: 0,
    canApply: true,
    content: "my summary",
  },
  {
    filePath: "evsDrive/documents/2/table-of-contents",
    description: "NEC 2.0 Table of Contents",
    additions: 500,
    deletions: 0,
    canApply: true,
    content: "my table-of-contents",
  },
  {
    filePath: "evsDrive/documents/2/summary",
    description: "NEC 2.0 Summary",
    additions: 99,
    deletions: 0,
    canApply: true,
    content: "my summary",
  },
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
  }
];

export const chats: Chat[] = [
  {
    id: "1",
    title: "Generate NEC 1.0 Table of Contents",
    lastMessageTime: "2 minutes ago",
    messages: [
      {
        id: "msg1",
        content: "Generate NEC 1.0 Table of Contents",
        timestamp: new Date(Date.now() - 120000).toISOString(),
        isUser: true,
        files: [],
      },
      {
        id: "msg2",
        content: "I'll help you extract the Table of Contents...",
        timestamp: new Date(Date.now() - 60000).toISOString(),
        isUser: false,
        files: [
          "evsDrive/table-of-contents",
          "evsDrive/summary",
        ],
        proposedChanges: [fileChanges[0], fileChanges[1]],
      },
    ],
  },
  {
    id: "2",
    title: "Generate NEC 2.0 Table of Contents",
    lastMessageTime: "2 minutes ago",
    messages: [
      {
        id: "msg3",
        content: "Generate NEC 2.0 Table of Contents",
        timestamp: new Date(Date.now() - 120000).toISOString(),
        isUser: true,
        files: [],
      },
      {
        id: "msg4",
        content: "I'll help you extract the Table of Contents...",
        timestamp: new Date(Date.now() - 60000).toISOString(),
        isUser: false,
        files: [
          "evsDrive/documents/2/table-of-contents",
          "evsDrive/documents/2/summary",
        ],
        proposedChanges: [fileChanges[2], fileChanges[3]],
      },
    ],
  },
  {
    id: "3",
    title: "File Search",
    lastMessageTime: "1 hour ago",
    messages: [],
  },
  {
    id: "4",
    title: "Web Search",
    lastMessageTime: "1 hour ago",
    messages: [],
  },
  {
    id: "5",
    title: "Greeting",
    lastMessageTime: "1 hour ago",
    messages: [],
  },
  {
    id: "6",
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
        proposedChanges: [fileChanges[4], fileChanges[5]],
      },
    ],
  }
];
