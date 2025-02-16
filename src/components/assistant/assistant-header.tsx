
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface AssistantHeaderProps {
  onMenuClick: () => void;
}

export default function AssistantHeader({ onMenuClick }: AssistantHeaderProps) {
  return (
    <div className="flex items-center gap-2 p-4 border-b border-divider">
      <Button isIconOnly variant="light" size="sm" onPress={onMenuClick}>
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
  );
}
