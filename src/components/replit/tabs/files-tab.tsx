import DataTable from "@/components/table/datatable";
import EditorTab from "@/components/replit/tabs/editor-tab";

interface FilesTabProps {
  documents: any[];
}

export default function FilesTab({ documents }: FilesTabProps) {
  const columns = [
    { key: "id", label: "ID", width: "20%" },
    { key: "filename", label: "Name" }, // Empty label for no header
    // { key: "folder", label: "Folder" },
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
        data={documents}
        columns={columns}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
