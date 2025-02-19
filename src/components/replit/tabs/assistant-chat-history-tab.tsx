
import { Button } from "@heroui/react";
import { Chat } from "@/types/assistant";

interface AssistantChatHistoryProps {
  chats: Chat[];
  onChatSelect?: (chat: Chat) => void;
}

export default function AssistantChatHistory({ chats, onChatSelect }: AssistantChatHistoryProps) {
  return (
    <div className="w-full h-full bg-content1">
      <div className="flex flex-col gap-1 p-2">
        {chats.map((chat) => (
          <Button 
            key={chat.id}
            variant="light"
            className="justify-start h-auto py-2"
            fullWidth
            onClick={() => onChatSelect?.(chat)}
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
