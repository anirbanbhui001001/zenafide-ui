
import React, { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

interface TestCaseProps {
  testCase?: {
    id: string;
    label: string;
    chatHistory: string;
    target: string;
  };
  onClose: () => void;
}

export default function TestCase({ testCase, onClose }: TestCaseProps) {
  const [formData, setFormData] = useState({
    label: testCase?.label || "",
    chatHistory: testCase?.chatHistory || "",
    target: testCase?.target || ""
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here
    onClose();
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {testCase ? "Edit Test Case" : "Create Test Case"}
        </h2>
        <Button isIconOnly variant="light" onPress={onClose}>
          <Icon icon="mdi:close" />
        </Button>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <Input
          label="Label"
          value={formData.label}
          onChange={(e) => setFormData(prev => ({ ...prev, label: e.target.value }))}
        />
        <Textarea
          label="Chat History"
          value={formData.chatHistory}
          onChange={(e) => setFormData(prev => ({ ...prev, chatHistory: e.target.value }))}
        />
        <Input
          label="Target"
          value={formData.target}
          onChange={(e) => setFormData(prev => ({ ...prev, target: e.target.value }))}
        />
        <div className="flex justify-end gap-2 mt-6">
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
