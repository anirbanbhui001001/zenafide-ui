
"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { zenUsers } from "@/data/zen_users";
import { ZenUser } from "@/types/zen_user";
import SidePanel from "@/components/side-panel/side-panel";

export default function Users() {
  const [users, setUsers] = useState<ZenUser[]>(zenUsers);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ZenUser | undefined>();

  const handleSave = (updatedUser: ZenUser) => {
    setUsers(prev => {
      const index = prev.findIndex(u => u.id === updatedUser.id);
      if (index >= 0) {
        return prev.map(u => u.id === updatedUser.id ? updatedUser : u);
      }
      return [...prev, updatedUser];
    });
    setIsOpen(false);
    setSelectedUser(undefined);
  };

  const columns = [
    { key: "id", label: "User Id" },
    { key: "firstName", label: "First name" },
    { key: "lastName", label: "Last name" },
    { key: "email", label: "Email" },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (user: ZenUser) => (
        <div className="flex justify-end mr-2">
          <Icon
            icon="akar-icons:edit"
            width={20}
            className="cursor-pointer"
            onClick={() => {
              setSelectedUser(user);
              setIsOpen(true);
            }}
          />
          <Icon
            icon="proicons:trash"
            width={20}
            className="ml-2 text-light cursor-pointer"
          />
        </div>
      ),
    },
  ];

  const addUserButton = (
    <Button 
      color="primary" 
      size="sm" 
      startContent={<Icon icon="mdi:plus" />}
      onPress={() => {
        setSelectedUser(undefined);
        setIsOpen(true);
      }}
    >
      Add User
    </Button>
  );

  return (
    <>
      <DataTable
        data={users}
        columns={columns}
        title="User Management"
        actions={addUserButton}
      />
      <SidePanel
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSelectedUser(undefined);
        }}
        user={selectedUser}
        onSave={handleSave}
      />
    </>
  );
}
