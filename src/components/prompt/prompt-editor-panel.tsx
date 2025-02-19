
import { Button, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function PromptEditorPanel() {
  return (
    <div className="h-full flex flex-col p-4 gap-4 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">System Prompt</label>
        <Textarea
          placeholder="Enter system prompt..."
          minRows={4}
          className="flex-1"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">User Message</label>
          <Textarea
            placeholder="Enter user message..."
            minRows={3}
          />
        </div>
      </div>

      <Button
        variant="light"
        startContent={<Icon icon="mdi:plus" />}
        className="w-full"
      >
        Add message pair
      </Button>
    </div>
  );
}
