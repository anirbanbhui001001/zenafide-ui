"use client";

import React from "react";
import { User } from "@/types/user-dropdown";
import { users } from "@/data/user-dropdown";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  Avatar,
  User,
} from "@heroui/react";
import {Icon} from "@iconify/react";



export default function UserDropdown() {
  const [currentUser, setCurrentUser] = React.useState(users[0]);

  return (
    <Dropdown showArrow placement="bottom-start">
      <DropdownTrigger>
        <Button disableRipple isIconOnly className="-mr-1" radius="full" variant="light">
          <Avatar
            className="h-6 w-6 cursor-pointer"
            name={currentUser.name}
            src={currentUser.avatar}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="User menu" 
        onAction={(key) => {
          const user = users.find(u => u.id === Number(key));
          if (user) setCurrentUser(user);
        }}
      >
        <DropdownSection showDivider aria-label="Users">
          {users.map((user) => (
            <DropdownItem key={user.id} textValue={user.name}>
              <User
                avatarProps={{
                  size: "sm",
                  src: user.avatar,
                  imgProps: {className: "transition-none"},
                }}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                description={user.role}
                name={user.name}
              />
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}