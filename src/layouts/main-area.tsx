
"use client";

import React from "react";
import {ScrollShadow, Button} from "@heroui/react";
import {Icon} from "@iconify/react";
import {Outlet} from "react-router-dom";

interface MainAreaProps {
  isMobile?: boolean;
  onOpenChange?: () => void;
}

export default function MainArea({isMobile = false, onOpenChange}: MainAreaProps) {
  return (
    <ScrollShadow className="w-full">
      <main className="h-full w-full">
        <div className="grid h-full w-full gap-0 overflow-y-auto p-0 sm:rounded-large sm:border-small sm:border-default-200">
          <div className="flex h-full w-full flex-col gap-1 rounded-medium border-divider">
            {isMobile && (
              <header className="sticky top-0 z-50 flex w-full items-center justify-between px-3 pt-3 bg-background sm:px-6 -mb-4">
                <Button
                  isIconOnly
                  className="flex text-default-500 sm:hidden"
                  size="sm"
                  variant="light"
                  onPress={onOpenChange}
                >
                  <Icon
                    height={24}
                    icon="solar:hamburger-menu-outline"
                    width={24}
                  />
                </Button>
              </header>
            )}
            <Outlet />
          </div>
        </div>
      </main>
    </ScrollShadow>
  );
}
