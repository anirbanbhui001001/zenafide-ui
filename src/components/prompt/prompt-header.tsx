
import React from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";

interface PromptHeaderProps {
  name: string;
  onRun: () => void;
  onUpdate: () => void;
  onSettingsOpen: () => void;
}

export default function PromptHeader({ name, onRun, onUpdate, onSettingsOpen }: PromptHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center gap-2">
        <Icon icon="mdi:robot" className="w-5 h-5" />
        <span className="text-lg font-medium">{name}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="light"
          startContent={<Icon icon="mdi:tune" />}
          onClick={onSettingsOpen}
        >
          Model Settings
        </Button>
        
        <Button
          color="secondary"
          startContent={<Icon icon="mdi:content-save" />}
          onClick={onUpdate}
        >
          Update Prompt
        </Button>
        
        <Button
          color="primary"
          startContent={<Icon icon="mdi:play" />}
          onClick={onRun}
        >
          Run
        </Button>
        
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light">
              <Icon icon="mdi:dots-vertical" className="w-5 h-5" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Duplicate</DropdownItem>
            <DropdownItem>Export</DropdownItem>
            <DropdownItem className="text-danger">Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
