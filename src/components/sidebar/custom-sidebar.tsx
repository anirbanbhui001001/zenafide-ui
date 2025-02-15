"use client";

import type { SidebarItem } from "./sidebar";
import React from "react";
import { Input, ScrollShadow, Spacer } from "@heroui/react";
import { Icon } from "@iconify/react";
import Sidebar from "./sidebar";
import SidebarHeader from "./custom-sidebar-header";
import WorkspaceSelect from "./custom-sidebar-workspace-select";
import UpgradeCard from "./custom-sidebar-upgrade-card";
import AccountSwitcher from "./custom-sidebar-account-switcher";
import { Chip } from "@heroui/react";

const sidebarItems: SidebarItem[] = [
  {
    key: "menu",
    title: "Menu",
    items: [
      {
        key: "home",
        href: "/home",
        icon: "solar:home-2-linear",
        title: "Home",
      },
      {
        key: "projects",
        href: "/home",
        icon: "solar:widget-2-outline",
        title: "Projects",
      },
      {
        key: "documents",
        href: "/home",
        icon: "solar:file-text-outline",
        title: "Documents",
      },
    ],
  },
  {
    key: "admin",
    title: "Admin",
    items: [
      {
        key: "agents",
        href: "/home",
        icon: "la:robot",
        title: "Agents",
      },
      {
        key: "conversation-history",
        href: "/home",
        icon: "material-symbols:work-history-outline",
        title: "Conversation History",
      },
      {
        key: "users",
        href: "/home",
        icon: "ci:users-group",
        title: "Users",
      },
      {
        key: "ai-providers",
        href: "/ai-providers",
        icon: "material-symbols:api",
        title: "AI Providers",
      },
      {
        key: "evaluations",
        href: "/evaluations",
        icon: "material-symbols:balance",
        title: "Evaluations",
      },
    ],
  },
];

export default function CustomSidebar() {
  return (
    <div className="h-full min-h-[48rem]">
      <div className="relative flex h-full w-72 flex-1 flex-col p-6">
        <SidebarHeader />
        <Spacer y={8} />
        <div className="flex flex-col gap-y-2">
          <WorkspaceSelect />
          <Input
            fullWidth
            aria-label="search"
            classNames={{
              base: "px-1",
              inputWrapper: "dark:bg-default-50",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <Icon
                className="text-default-500 [&>g]:stroke-[2px]"
                icon="solar:magnifer-linear"
                width={18}
              />
            }
          />
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar
            defaultSelectedKey="home"
            iconClassName="group-data-[selected=true]:text-primary-foreground"
            itemClasses={{
              base: "data-[selected=true]:bg-primary-400 dark:data-[selected=true]:bg-primary-300 data-[hover=true]:bg-default-300/20 dark:data-[hover=true]:bg-default-200/40",
              title:
                "text-black dark:text-white group-data-[selected=true]:text-primary-foreground",
            }}
            items={sidebarItems}
          />
          <Spacer y={8} />
        </ScrollShadow>
        <AccountSwitcher />
      </div>
    </div>
  );
}
