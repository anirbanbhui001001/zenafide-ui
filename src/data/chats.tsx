
import { Chat, AssistantMessage, FileChange } from "@/types/assistant";

const fileChanges: FileChange[] = [
  {
    filePath: "src/components/side-panel/side-panel.tsx",
    description: "Update side panel with modern theme",
    additions: 8,
    deletions: 26,
    canApply: true
  },
  {
    filePath: "src/components/side-panel/side-panel-basic-details.tsx",
    description: "Add modern theme to inputs",
    additions: 3,
    deletions: 0,
    canApply: true
  }
];

export const chats: Chat[] = [
  {
    id: "1",
    title: "Configuring Assistant Details Component",
    lastMessageTime: "2 minutes ago",
    messages: [
      {
        id: "msg1",
        content: "How do I configure the Assistant Details component?",
        timestamp: new Date(Date.now() - 120000).toISOString(),
        isUser: true,
        files: []
      },
      {
        id: "msg2",
        content: "I'll help you configure the Assistant Details component...",
        timestamp: new Date(Date.now() - 60000).toISOString(),
        isUser: false,
        files: ["src/components/assistant/assistant-details.tsx"]
      }
    ]
  },
  {
    id: "2",
    title: "Assistant UI Component Design",
    lastMessageTime: "7 minutes ago",
    messages: [
      {
        id: "msg3",
        content: "src/components/side-panel is not using theme= modern why",
        timestamp: new Date(Date.now() - 960000).toISOString(),
        isUser: true,
        files: ["src/components/side-panel/side-panel.tsx", "src/components/side-panel/side-panel-basic-details.tsx"]
      },
      {
        id: "msg4",
        content: "Looking at the side panel components, I can see they're not using the modern theme configuration. Let's update them to match the pink modern theme:",
        timestamp: new Date(Date.now() - 900000).toISOString(),
        isUser: false,
        files: ["src/components/side-panel/side-panel.tsx", "src/components/side-panel/side-panel-basic-details.tsx"],
        proposedChanges: fileChanges
      }
    ]
  },
  {
    id: "3",
    title: "react component import trouble",
    lastMessageTime: "1 hour ago",
    messages: []
  },
  {
    id: "4",
    title: "Left Panel Styling Improvements",
    lastMessageTime: "1 hour ago",
    messages: []
  },
  {
    id: "5",
    title: "regulations page document analysis",
    lastMessageTime: "1 hour ago",
    messages: []
  }
];
