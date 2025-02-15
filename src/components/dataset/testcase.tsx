import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/react";
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
    target: testCase?.target || "",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here
    onClose();
  };

  return (
    <Card className="h-[90%] rounded-none flex flex-col" shadow="none">
      <CardHeader className="flex justify-between items-center px-4 py-2 border-b shrink-0">
        <span className="text-large">
          {testCase ? "Edit Test Case" : "Create Test Case"}
        </span>
        <Button isIconOnly variant="light" onPress={onClose}>
          <Icon icon="mdi:close" className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardBody className="flex-grow overflow-y-auto">
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Label"
            value={formData.label}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, label: e.target.value }))
            }
          />
          <Textarea
            label="Chat History"
            value={formData.chatHistory}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, chatHistory: e.target.value }))
            }
          />
          <Textarea
            label="Target"
            value={formData.target}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, target: e.target.value }))
            }
          />
        </form>
      </CardBody>
      <CardFooter className="flex justify-end gap-2 mt-6">
        <Button color="danger" variant="light" onPress={onClose} size="sm">
          Cancel
        </Button>
        <Button color="primary" type="submit" size="sm" onPress={handleSave}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
