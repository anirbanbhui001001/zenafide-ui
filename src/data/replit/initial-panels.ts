import React from "react";
import { Panel } from "@/types/replit/panel";
import FilesTab from "@/components/replit/tabs/files-tab";
import AgentsTab from "@/components/replit/tabs/agents-tab";
import AssistantLayout from "@/components/replit/assistant-layout";

export const initialPanels: Panel[] = [
  {
    id: "left-panel",
    tabs: [
      {
        id: "files",
        title: "Files",
        content: React.createElement(FilesTab),
        isCloseable: false,
      },
      {
        id: "insights",
        title: "Insights",
        content: React.createElement(AgentsTab),
        isCloseable: false,
      },
    ],
    activeTabId: "files",
    width: 240,
  },
  {
    id: "center-panel",
    tabs: [
      {
        id: "assistant",
        title: "Assistant",
        content: React.createElement(AssistantLayout),
        isCloseable: true,
      },
      { id: "new-tab-center", title: "New Tab", isCloseable: true },
    ],
    activeTabId: "assistant",
  },
  {
    id: "right-panel",
    tabs: [{ id: "new-tab-right", title: "New Tab", isCloseable: true }],
    activeTabId: "new-tab-right",
    width: 320,
  },
];
