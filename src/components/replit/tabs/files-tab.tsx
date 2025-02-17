import React from "react";
import DataTable from "@/components/table/datatable";
import EditorTab from "@/components/replit/tabs/editor-tab";
import { regulations } from "@/data/regulations";

export default function FilesTab() {
  const columns = [
    { key: "filename", label: "name" }, // Empty label for no header
    { key: "folder", label: "folder" },
  ];

  const handleRowClick = (row: any) => {
    const newTab = {
      id: `file-${row.filename}`,
      title: row.filename,
      content: <EditorTab content={row.content || ""} />,
      isCloseable: true,
    };

    const event = new CustomEvent("openNewTab", {
      detail: {
        panelId: "center-panel",
        tab: newTab,
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={regulations}
        columns={columns}
        hideHeader={true}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
