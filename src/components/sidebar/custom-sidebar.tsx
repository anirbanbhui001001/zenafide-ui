"use client";

import { Input, ScrollShadow, Spacer } from "@heroui/react";
import { Icon } from "@iconify/react";
import Sidebar from "./sidebar";
import SidebarHeader from "./custom-sidebar-header";
import WorkspaceSelect from "./custom-sidebar-workspace-select";
import AccountSwitcher from "./custom-sidebar-account-switcher";

import { sidebarItems } from "@/data/ui/sidebar-items";

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
