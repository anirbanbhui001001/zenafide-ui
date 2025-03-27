
import { Button } from "@heroui/react";
import { Chat } from "@/types/assistant";
import React from "react";

interface AssistantChatHistoryProps {
  chats: Chat[];
  onChatSelect?: (chat: Chat) => void;
}

export default function AssistantChatHistory({ chats, onChatSelect }: AssistantChatHistoryProps) {
  return (
      <div></div>
  )
}
