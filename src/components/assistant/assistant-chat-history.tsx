
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Chat } from "@/types/assistant";

interface AssistantChatHistoryProps {
  chats: Chat[];
}

export default function AssistantChatHistory({ chats }: AssistantChatHistoryProps) {
  return (
    <div className="w-64 border-r border-divider bg-content1">
      <div className="flex items-center justify-between p-4 border-b border-divider">
        <Button isIconOnly variant="light" size="sm">
          <Icon icon="mdi:menu" className="text-xl" />
        </Button>
        <Button 
          color="primary" 
          size="sm" 
          startContent={<Icon icon="mdi:plus" />}
          onPress={() => console.log("New chat")}
        >
          New Chat
        </Button>
      </div>
      <div className="flex flex-col gap-1 p-2">
        {chats.map((chat) => (
          <Button 
            key={chat.id}
            variant="light"
            className="justify-start h-auto py-2"
            fullWidth
          >
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm">{chat.title}</span>
              <span className="text-xs text-default-500">{chat.lastMessageTime}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
