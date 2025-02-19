
import { useState } from "react";
import { Button, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import AssistantFileSelector from "./assistant-file-selector";

export default function AssistantInput() {
  const [isFileSelectorOpen, setFileSelectorOpen] = useState(false);

  return (
    <div className="p-4 border-t border-divider bg-content1">
      <div className="flex gap-2">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setFileSelectorOpen(true)}
        >
          <Icon icon="mdi:file-multiple" className="text-xl" />
        </Button>
        <Textarea
          placeholder="Ask a question..."
          minRows={1}
          maxRows={5}
          className="flex-1"
        />
        <Button isIconOnly color="primary">
          <Icon icon="mdi:send" className="text-xl" />
        </Button>
      </div>
      <AssistantFileSelector 
        isOpen={isFileSelectorOpen}
        onClose={() => setFileSelectorOpen(false)}
      />
    </div>
  );
}
