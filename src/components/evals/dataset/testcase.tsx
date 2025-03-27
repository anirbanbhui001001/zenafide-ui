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
    <div>
      <Card className="flex flex-col gap-4">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Test Case</h2>
          <Button
            color="secondary"
            onPress={() => onClose()}
          >
            <Icon icon="tabler:x" />
          </Button>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleSave}>
            <div className="flex flex-col gap-4">
              <label htmlFor="label" className="text-sm font-medium text-gray-900">
                Label
              </label>
              <Input
                type="text"
                name="label"
                id="label"
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                placeholder="Enter label"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="chatHistory" className="text-sm font-medium text-gray-900">
                Chat History
              </label>
              <Textarea
                name="chatHistory"
                id="chatHistory"
                rows={4}
                value={formData.chatHistory}
                onChange={(e) => setFormData({ ...formData, chatHistory: e.target.value })}
                placeholder="Enter chat history"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="target" className="text-sm font-medium text-gray-900">
                Target
              </label>
              <Input
                type="text"
                name="target"
                id="target"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                placeholder="Enter target"
              />
            </div>
          </form>
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button color="primary" type="submit">
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
