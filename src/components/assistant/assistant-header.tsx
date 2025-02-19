
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface AssistantHeaderProps {
  onMenuClick: () => void;
  onReviewChangesClick: () => void;
}

export default function AssistantHeader({ onMenuClick, onReviewChangesClick }: AssistantHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
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
      <Button isIconOnly variant="light" size="sm" onPress={onReviewChangesClick}>
        <Icon icon="mdi:menu" className="text-xl" />
      </Button>
    </div>
  );
}
