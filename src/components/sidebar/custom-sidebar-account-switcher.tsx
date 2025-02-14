
"use client";

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User, Avatar} from "@heroui/react";
import {Icon} from "@iconify/react";

const users = [
  {
    id: 1,
    name: "Kate Moore",
    role: "Customer Support",
    team: "Customer Support",
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg",
    email: "kate.moore@example.com",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Product Designer",
    team: "Design",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    email: "john.doe@example.com",
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Product Manager",
    team: "Product",
    avatar: "https://i.pravatar.cc/150?u=a04258114e22026708c",
    email: "jane.doe@example.com",
  },
];

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
