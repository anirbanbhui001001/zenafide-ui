
"use client";

import React from "react";
import {Button, Badge, Popover, PopoverTrigger, PopoverContent} from "@heroui/react";
import {Icon} from "@iconify/react";
import NotificationsCard from "./custom-sidebar-notifications-button";

export default function NotificationsButton() {
  return (
    <Popover offset={12} placement="bottom-start">
      <PopoverTrigger>
        <Button disableRipple isIconOnly className="overflow-visible" radius="full" variant="light">
          <Badge color="danger" content="5" showOutline={false} size="md">
            <Icon className="text-default-500" icon="solar:bell-linear" width={22} />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
        <NotificationsCard className="w-full shadow-none" />
      </PopoverContent>
    </Popover>
  );
}
