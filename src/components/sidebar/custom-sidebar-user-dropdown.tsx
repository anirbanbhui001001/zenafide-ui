
"use client";

import React from "react";
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

import {users} from "@/data/user-dropdown";

export default function UserDropdown() {
  return (
    <Dropdown showArrow placement="bottom-start">
      <DropdownTrigger>
        <Button disableRipple isIconOnly className="-mr-1" radius="full" variant="light">
          <Avatar
            className="h-6 w-6 cursor-pointer"
            name="Kate Moore"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Custom item styles" disabledKeys={["profile"]}>
        <DropdownSection showDivider aria-label="Profile & Actions">
          <DropdownItem key="profile" isReadOnly className="h-14 gap-2 opacity-100" textValue="Signed in as">
            <User
              avatarProps={{
                size: "sm",
                imgProps: {className: "transition-none"},
                src: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg",
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description="Customer Support"
              name="Kate Moore"
            />
          </DropdownItem>
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem key="new_project" endContent={<Icon className="text-large" icon="lucide:plus" />}>
            New Project
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider aria-label="Preferences">
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem
            key="theme"
            isReadOnly
            className="cursor-default"
            endContent={
              <select
                className="z-10 w-16 rounded-md border-small border-default-300 bg-transparent py-0.5 text-tiny text-default-500 outline-none group-data-[hover=true]:border-default-500 dark:border-default-200"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout">Log Out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}