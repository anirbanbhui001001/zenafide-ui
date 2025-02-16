import React from "react";
import AssistantInput from "./assistant-input";
import AssistantChatMessage from "./assistant-chat-message";
import AssistantRightPanel from "./assistant-right-panel";
import { chats } from "@/data/chats";
import { FileChange } from "@/types/assistant";

export default function AssistantMainArea() {
  const defaultChat = chats.find((chat) => chat.id === "2");
  const [selectedFile, setSelectedFile] = React.useState<FileChange | null>(
    null,
  );

  return (
    <div className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {defaultChat?.messages.map((message) => (
            <AssistantChatMessage
              key={message.id}
              message={message}
              onFileSelect={setSelectedFile}
            />
          ))}
        </div>
        <AssistantInput />
      </div>
      <Modal 
        isOpen={!!selectedFile}
        onOpenChange={(open) => !open && setSelectedFile(null)}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-between">
                <span>{selectedFile?.filePath}</span>
                <Button isIconOnly variant="light" onPress={onClose}>
                  <Icon icon="mdi:close" />
                </Button>
              </ModalHeader>
              <ModalBody>
                {selectedFile && (
                  <AssistantRightPanel
                    selectedFile={selectedFile}
                    onClose={onClose}
                  />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
