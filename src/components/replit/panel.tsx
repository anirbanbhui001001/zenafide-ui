import React from "react";
import { Tab } from "@/types/replit/panel";
import { Icon } from "@iconify/react";

interface PanelProps {
  tabs: Tab[];
  activeTabId: string;
  onTabClose: (tabId: string) => void;
  onTabClick: (tabId: string) => void;
  onNewTab: () => void;
}

export default function Panel({
  tabs,
  activeTabId,
  onTabClose,
  onTabClick,
  onNewTab,
}: PanelProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-1 gap-1 border-b border-divider overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center gap-1 px-3 py-1 rounded cursor-pointer ${
              activeTabId === tab.id ? "bg-default-200" : "hover:bg-default-100"
            }`}
            onClick={() => onTabClick(tab.id)}
          >
            <span>{tab.title}</span>
            {tab.isCloseable && (
              <Icon
                icon="mdi:close"
                className="w-4 h-4 hover:bg-default-300 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
              />
            )}
          </div>
        ))}
        <button onClick={onNewTab} className="p-1 hover:bg-default-100 rounded">
          <Icon icon="mdi:plus" className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1 p-2">
        {activeTabId && tabs.find((tab) => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
}
