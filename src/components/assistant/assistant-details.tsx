
import React from "react";
import AssistantChatHistory from "./assistant-chat-history";
import AssistantMainArea from "./assistant-main-area";
import AssistantHeader from "./assistant-header";

import { Chat } from "@/types/assistant";

interface AssistantDetailsProps {
  chats: Chat[];
}

export default function AssistantDetails({ chats }: AssistantDetailsProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <AssistantHeader />
      <div className="flex flex-1">
        <AssistantChatHistory chats={chats} />
        <AssistantMainArea />
      </div>
    </div>
  );
}
