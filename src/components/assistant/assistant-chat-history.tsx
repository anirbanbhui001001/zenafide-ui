
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function AssistantChatHistory() {
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
        {/* Chat list items will go here */}
      </div>
    </div>
  );
}
