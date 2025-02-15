
"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@heroui/react";

interface APIKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  provider?: {
    id?: string;
    name: string;
    plain_key?: string;
  };
}

export default function APIKeyModal({
  isOpen,
  onClose,
  provider,
}: APIKeyModalProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [accessKey, setAccessKey] = useState(provider?.plain_key || "");
  const [providerName, setProviderName] = useState(provider?.name || "");
  
  const providers = {
    openai: "OpenAI",
    azure_openai: "Azure OpenAI",
    llama_parse: "Llama Parse",
  };

  const handleSave = () => {
    // TODO: Implement API key saving logic
    console.log("Saving key:", { providerName, accessKey });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="text-medium">
          {provider?.id ? `Configure ${provider.name}` : "Create New Provider"}
        </ModalHeader>
        <ModalBody>
          <div className="space-y-4">
            <Select
              label="Provider"
              selectedKeys={providerName ? [providerName] : []}
              onChange={(e) => setProviderName(e.target.value)}
            >
              {Object.entries(providers).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <div>
              <span className="text-small">API key</span>
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter secret"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                endContent={
                  <button
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="ml-2"
                    aria-label="Toggle password visibility"
                  >
                    <Icon
                      icon={isPasswordVisible ? "mdi:eye-off" : "mdi:eye"}
                      width="20"
                    />
                  </button>
                }
              />
              <p className="text-xs text-default-400 mt-4">
                This secret will be encrypted at rest using Transparent Data
                Encryption with a unique 256-bit key and nonce.
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" size="sm" onPress={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
