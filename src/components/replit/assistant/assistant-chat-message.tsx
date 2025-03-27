import { Button, Card } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AssistantMessage, FileChange } from "@/types/assistant";
import React from "react";

interface AssistantChatMessageProps {
  message: AssistantMessage;
  onFileSelect?: (file: FileChange) => void;
  onReviewChangesClick?: () => void;
}

const getTimeAgo = (timestamp: string) => {
  const minutes = Math.floor(
    (Date.now() - new Date(timestamp).getTime()) / 60000,
  );
  return `${minutes} minutes ago`;
};

export default function AssistantChatMessage({
  message,
  onReviewChangesClick,
}: AssistantChatMessageProps) {
  return (
      <div></div>
  )
}
