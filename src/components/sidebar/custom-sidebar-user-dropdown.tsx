"use client";

import React from "react";

interface User {
  id: number;
  name: string;
  role: string;
  team: string;
  avatar: string;
  email: string;
}

const users: User[] = [
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