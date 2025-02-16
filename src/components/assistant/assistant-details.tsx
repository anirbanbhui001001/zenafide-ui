
import React from "react";
import AssistantChatHistory from "./assistant-chat-history";
import AssistantMainArea from "./assistant-main-area";
import AssistantHeader from "./assistant-header";

import { Chat } from "@/types/assistant";

interface AssistantDetailsProps {
  chats: Chat[];
}

export default function AssistantDetails({ chats }: AssistantDetailsProps) {
  const [isChatHistoryVisible, setIsChatHistoryVisible] = React.useState(true);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <AssistantHeader onMenuClick={() => setIsChatHistoryVisible(!isChatHistoryVisible)} />
      <div className="flex flex-1">
        <div className={`transition-all duration-300 ${isChatHistoryVisible ? 'w-64' : 'w-0 overflow-hidden'}`}>
          <AssistantChatHistory chats={chats} />
        </div>
        <AssistantMainArea />
      </div>
    </div>
  );
}
