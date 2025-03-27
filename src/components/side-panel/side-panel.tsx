import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tab,
  Tabs,
  Button,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";
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
  const [activeTab, setActiveTab] = React.useState("basic-details");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      hideCloseButton
      classNames={{
        wrapper: "!items-start !justify-end",
        base: "!m-0 rounded-medium h-[calc(100vh-64px)] w-full sm:w-[400px] modern",
        backdrop: "hidden",
      }}
      motionProps={{
        variants: {
          enter: {
            x: 0,
            transition: { duration: 0.3 },
          },
          exit: {
            x: 400,
            transition: { duration: 0.2, ease: "easeIn" },
          },
        },
      }}
    >
      <ModalContent className="absolute top-2 right-2 h-[calc(100vh-20px)]">
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-between items-center px-4 py-2 border-b">
              <span className="text-large">
                {user
                  ? `Edit ${user.firstName} ${user.lastName} (User id: ${user.id})`
                  : "Add New User"}
              </span>
              <Button isIconOnly variant="light" onPress={onClose}>
                <Icon icon="mdi:close" className="h-5 w-5" />
              </Button>
            </ModalHeader>
            <ModalBody className="overflow-hidden mt-2">
              <Tabs
                aria-label="User Details"
                fullWidth
                onSelectionChange={(key) => setActiveTab(key.toString())}
              >
                <Tab key="basic-details" title="Basic Details">
                  <ScrollShadow className="h-[calc(100vh-250px)]">
                    <SidePanelBasicDetails
                      user={user}
                      onSave={onSave}
                      onCancel={onClose}
                    />
                  </ScrollShadow>
                </Tab>
                <Tab key="permissions" title="Permissions">
                  <ScrollShadow className="h-[calc(100vh-250px)]">
                    <SidePanelPermissions
                      user={user}
                      onSave={onSave}
                      onCancel={onClose}
                    />
                  </ScrollShadow>
                </Tab>
              </Tabs>
            </ModalBody>

            <ModalFooter>
              <Button
                color="primary"
                className="w-[80%]"
                onPress={() => document.forms[0]?.requestSubmit()}
              >
                Save
              </Button>
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>
            </ModalFooter>
            )
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
