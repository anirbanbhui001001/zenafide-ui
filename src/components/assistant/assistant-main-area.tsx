
import React from "react";
import AssistantInput from "./assistant-input";
import AssistantChatMessage from "./assistant-chat-message";

export default function AssistantMainArea() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Messages will be rendered here */}
      </div>
      <AssistantInput />
    </div>
  );
}
