
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";

interface AssistantFileSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssistantFileSelector({ isOpen, onClose }: AssistantFileSelectorProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex justify-between items-center">
          <span>Select Files</span>
          <Icon icon="mdi:close" className="cursor-pointer" onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <Input
            placeholder="Search files..."
            startContent={<Icon icon="mdi:search" />}
          />
          <div className="mt-4 space-y-2">
            {/* File list with checkboxes will go here */}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
