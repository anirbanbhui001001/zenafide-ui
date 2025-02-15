
import React from "react";
import { Button, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

interface PromptEditorPanelProps {
  systemPrompt: string;
  userMessage: string;
  onSystemPromptChange: (value: string) => void;
  onUserMessageChange: (value: string) => void;
  onAddMessagePair: () => void;
}

export default function PromptEditorPanel({
  systemPrompt,
  userMessage,
  onSystemPromptChange,
  onUserMessageChange,
  onAddMessagePair
}: PromptEditorPanelProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">SYSTEM PROMPT</label>
          <Textarea
            value={systemPrompt}
            onChange={(e) => onSystemPromptChange(e.target.value)}
            className="w-full min-h-[200px]"
            placeholder="Enter system prompt..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">USER</label>
          <Textarea
            value={userMessage}
            onChange={(e) => onUserMessageChange(e.target.value)}
            className="w-full min-h-[150px]"
            placeholder="Enter user message..."
          />
        </div>
      </div>
      
      <div className="mt-auto p-4 border-t">
        <Button
          variant="light"
          startContent={<Icon icon="mdi:plus" />}
          onClick={onAddMessagePair}
          fullWidth
        >
          Add message pair
        </Button>
      </div>
    </div>
  );
}
