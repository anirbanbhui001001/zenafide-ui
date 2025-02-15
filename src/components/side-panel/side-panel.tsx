import React from "react";
import { Modal, ModalContent, ModalHeader, Tab, Tabs } from "@heroui/react";
import SidePanelBasicDetails from "./side-panel-basic-details";
import SidePanelPermissions from "./side-panel-permissions";
import { ZenUser } from "@/types/zen_user";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  user?: ZenUser;
  onSave: (user: ZenUser) => void;
}

export default function SidePanel({
  isOpen,
  onClose,
  user,
  onSave,
}: SidePanelProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      classNames={{
        base: "w-[400px] h-full m-0",
        wrapper: "justify-end",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex justify-between items-center  px-4 py-2 border-b">
          {user
            ? `Edit ${user.firstName} ${user.lastName} (User id: ${user.id})`
            : "Add New User"}
        </ModalHeader>
        <Tabs aria-label="User details">
          <Tab key="basic-details" title="Basic Details">
            <SidePanelBasicDetails
              user={user}
              onSave={onSave}
              onCancel={onClose}
            />
          </Tab>
          <Tab key="permissions" title="Permissions">
            <SidePanelPermissions
              user={user}
              onSave={onSave}
              onCancel={onClose}
            />
          </Tab>
        </Tabs>
      </ModalContent>
    </Modal>
  );
}
