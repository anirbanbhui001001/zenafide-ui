"use client";

import type { SidebarItem } from "./sidebar";

import React from "react";
import {
  User,
  Badge,
  Avatar,
  Chip,
  Button,
  ScrollShadow,
  Card,
  CardBody,
  CardFooter,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Input,
  Spacer,
  SelectSection,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { AcmeIcon } from "../acme";
import NotificationsCard from "../notifications-card";
import Sidebar from "./sidebar";

interface User {
  id: number;
  name: string;
  role: string;
  team: string;
  avatar: string;
  email: string;
}

interface Workspace {
  value: string;
  label: string;
  items?: {
    value: string;
    label: string;
  }[];
}

interface CustomSidebarProps {
  sidebarItems: SidebarItem[];
  workspaces: Workspace[];
  users: User[];
}

export default function CustomSidebar({
  sidebarItems,
  workspaces,
  users,
}: CustomSidebarProps) {
  return (
    <div className="h-full min-h-[48rem]">
      <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 px-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
              <AcmeIcon className="text-background" />
            </div>
            <span className="text-small font-bold uppercase">Acme</span>
          </div>
        </div>

        <Spacer y={8} />

        <ScrollShadow className="flex h-full w-full flex-col gap-6">
          <Select
            classNames={{
              trigger: "h-12",
            }}
            placeholder="Choose workspace"
            variant="bordered"
          >
            {workspaces.map((workspace) => (
              <SelectSection key={workspace.value} title={workspace.label}>
                {workspace.items?.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectSection>
            ))}
          </Select>

          <Sidebar
            className="w-full"
            defaultSelectedKey="home"
            items={sidebarItems}
          />

          <div className="mt-auto">
            <div className="flex flex-col gap-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8" size="sm" src={user.avatar} />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-small font-medium">{user.name}</h3>
                      <p className="text-tiny text-default-400">{user.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
}
