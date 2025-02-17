import React from "react";
import EditorTab from "@/components/replit/tabs/editor-tab";
import DataTable from "@/components/table/datatable";
import { regulationAgents } from "@/data/regulations";

export default function AgentsTab() {
  const columns = [
    { key: "name", label: "name" }, // Empty label for no header
    { key: "folder", label: "folder" },
  ];

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={regulationAgents}
        columns={columns}
        hideHeader={true}
        onRowClick={(row) => {
          const newTab = {
            id: `agent-${row.id}`,
            title: row.name,
            content: <EditorTab content={row.folder || ""} />,
            isCloseable: true,
          };

          const event = new CustomEvent("openNewTab", {
            detail: {
              panelId: "center-panel",
              tab: newTab,
            },
          });
          window.dispatchEvent(event);
        }}
      />
    </div>
  );
}
