
"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { zenUsers } from "@/data/zen_users";
import { ZenUser } from "@/types/zen_user";

export default function Users() {
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
    <Button color="primary" size="sm" startContent={<Icon icon="mdi:plus" />}>
      Add User
    </Button>
  );

  return (
    <DataTable
      data={zenUsers}
      columns={columns}
      title="User Management"
      actions={addUserButton}
    />
  );
}
