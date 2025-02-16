
import React from "react";
import AssistantChatHistory from "./assistant-chat-history";
import AssistantMainArea from "./assistant-main-area";

import { Chat } from "@/types/assistant";

interface AssistantDetailsProps {
  chats: Chat[];
}

export default function AssistantDetails({ chats }: AssistantDetailsProps) {
  return (
    <div className="flex h-[calc(100vh-100px)]">
      <AssistantChatHistory chats={chats} />
      <AssistantMainArea />
    </div>
  );
}
