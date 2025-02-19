
"use client";

import MainArea from "./main-area";
import CustomSidebar from "../components/sidebar/custom-sidebar";

interface ApplicationLayoutProps {
  isMobile?: boolean;
  onOpenChange?: () => void;
}

export default function ApplicationLayout({
  isMobile = false,
  onOpenChange,
}: ApplicationLayoutProps) {
  return (
    <div className="flex h-dvh w-full gap-x-3 p-2">
      {!isMobile && <CustomSidebar />}
      <MainArea isMobile={isMobile} onOpenChange={onOpenChange} />
    </div>
  );
}
