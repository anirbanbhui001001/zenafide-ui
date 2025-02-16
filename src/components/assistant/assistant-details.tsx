
import React from "react";
import AssistantChatHistory from "./assistant-chat-history";
import AssistantMainArea from "./assistant-main-area";
import AssistantHeader from "./assistant-header";
import AssistantRightPanel from "./assistant-right-panel";
import { Chat } from "@/types/assistant";

interface AssistantDetailsProps {
  chats: Chat[];
}

export default function AssistantDetails({ chats }: AssistantDetailsProps) {
  const [isChatHistoryVisible, setIsChatHistoryVisible] = React.useState(true);
  const [isReviewPanelVisible, setIsReviewPanelVisible] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <AssistantHeader
        onMenuClick={() => setIsChatHistoryVisible(!isChatHistoryVisible)}
        onReviewChangesClick={() => setIsReviewPanelVisible(!isReviewPanelVisible)}
      />
      <div className="flex flex-1">
        <div
          className={`transition-all duration-300 ${isChatHistoryVisible ? "w-64" : "w-0 overflow-hidden"}`}
        >
          <AssistantChatHistory chats={chats} />
        </div>
        <div className="flex-1">
          <AssistantMainArea />
        </div>
        <div
          className={`transition-all duration-300 border-l border-divider ${
            isReviewPanelVisible ? "w-64" : "w-0 overflow-hidden"
          }`}
        >
          <AssistantRightPanel
            selectedFile={selectedFile}
            onClose={() => {
              setSelectedFile(null);
              setIsReviewPanelVisible(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
