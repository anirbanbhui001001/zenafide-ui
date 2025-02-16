
import React from "react";
import AssistantInput from "./assistant-input";
import AssistantChatMessage from "./assistant-chat-message";
import { chats } from "@/data/chats";

export default function AssistantMainArea() {
  const defaultChat = chats.find(chat => chat.id === "2");
  const [selectedFile, setSelectedFile] = useState<FileChange | null>(null);

  return (
    <div className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {defaultChat?.messages.map(message => (
            <AssistantChatMessage 
              key={message.id} 
              message={message} 
              onFileSelect={setSelectedFile}
            />
          ))}
        </div>
        <AssistantInput />
      </div>
      {selectedFile && (
        <div className="w-1/2 border-l">
          <AssistantRightPanel 
            selectedFile={selectedFile}
            onClose={() => setSelectedFile(null)}
          />
        </div>
      )}
    </div>
  );
}
