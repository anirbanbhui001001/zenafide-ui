
"use client";

import React from "react";
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
    <div className="flex h-full w-full gap-0">
      {!isMobile && <CustomSidebar />}
      <MainArea isMobile={isMobile} onOpenChange={onOpenChange} />
    </div>
  );
}
