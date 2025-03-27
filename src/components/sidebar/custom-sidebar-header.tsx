"use client";

import UserDropdown from "./custom-sidebar-user-dropdown";
import NotificationsButton from "./custom-sidebar-notifications-button";

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
          <div className="text-background"></div> {/* Removed AcmeIcon */}
        </div>
        <span className="text-small font-bold uppercase">NewCo</span>
      </div>
      <div className="flex items-center justify-end">
        <UserDropdown />
        <NotificationsButton />
      </div>
    </div>
  );
}
