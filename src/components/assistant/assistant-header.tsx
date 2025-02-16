
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function AssistantHeader() {
  return (
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
  );
}
