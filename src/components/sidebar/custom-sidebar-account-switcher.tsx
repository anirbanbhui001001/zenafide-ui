
"use client";

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User, Avatar} from "@heroui/react";
import {Icon} from "@iconify/react";

import {users} from "@/data/ui/user-dropdown";

export default function AccountSwitcher() {
  return (
    <Dropdown placement="top">
      <DropdownTrigger>
        <Button className="mb-4 h-16 items-center justify-between" variant="light">
          <User
            avatarProps={{
              size: "sm",
              isBordered: false,
              src: users[0].avatar,
            }}
            className="justify-start transition-transform"
            description={users[0].role}
            name={users[0].name}
          />
          <Icon className="text-default-400" icon="lucide:chevrons-up-down" width={16} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Account switcher"
        variant="flat"
        onAction={(key) => console.log(`selected user ${key}`)}
      >
        {users.map((user) => (
          <DropdownItem key={user.id} textValue={user.name}>
            <div className="flex items-center gap-x-3">
              <Avatar
                alt={user.name}
                classNames={{
                  base: "flex-shrink-0",
                  img: "transition-none",
                }}
                size="sm"
                src={user.avatar}
              />
              <div className="flex flex-col">
                <p className="text-small font-medium text-default-600">{user.name}</p>
                <p className="text-tiny text-default-400">{user.email}</p>
              </div>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
