
import React from 'react';
import AssistantInput from './assistant/assistant-input';
import AssistantChatMessage from './assistant/assistant-chat-message';
import { Chat } from '@/types/assistant';

interface AssistantMainAreaProps {
  selectedChat?: Chat;
  onReviewChangesClick?: () => void;
}

export default function AssistantMainArea({ selectedChat, onReviewChangesClick }: AssistantMainAreaProps) {
  return (
    <div className="flex flex-1 h-full">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
          {selectedChat?.messages.map((message) => (
            <AssistantChatMessage
              key={message.id}
              message={message}
              onReviewChangesClick={onReviewChangesClick}
            />
          ))}
        </div>
        <AssistantInput />
      </div>
    </div>
  );
}
