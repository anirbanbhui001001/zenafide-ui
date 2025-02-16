
import React from "react";
import AssistantChatHistory from "./assistant-chat-history";
import AssistantMainArea from "./assistant-main-area";

export default function AssistantDetails() {
  return (
    <div className="flex h-[calc(100vh-100px)]">
      <AssistantChatHistory />
      <AssistantMainArea />
    </div>
  );
}
