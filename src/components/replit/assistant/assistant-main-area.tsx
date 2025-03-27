
import AssistantInput from './assistant-input';
import AssistantChatMessage from './assistant-chat-message';
import { Chat } from '@/types/assistant';
import React from "react";

interface AssistantMainAreaProps {
  selectedChat?: Chat;
  onReviewChangesClick?: () => void;
}

export default function AssistantMainArea({ selectedChat, onReviewChangesClick }: AssistantMainAreaProps) {
  return (
      <div></div>
  )
}
