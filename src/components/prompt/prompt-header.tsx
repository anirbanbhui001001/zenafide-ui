import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export default function PromptHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">Summarization v1</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="bordered"
          startContent={<Icon icon="mdi:tune" />}
          size="sm"
        >
          Model Settings
        </Button>

        <Button
          variant="bordered"
          startContent={<Icon icon="mdi:content-save" />}
          size="sm"
        >
          Update Prompt
        </Button>

        <Button
          color="primary"
          startContent={<Icon icon="mdi:play" />}
          size="sm"
        >
          Run
        </Button>

        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light" size="sm">
              <Icon icon="mdi:dots-vertical" />
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
