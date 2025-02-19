import EditorTab from "@/components/replit/tabs/editor-tab";
import DataTable from "@/components/table/datatable";

interface AgentsTabProps {
  insights: any[];
}

export default function AgentsTab({ insights }: AgentsTabProps) {
  const columns = [
    { key: "id", label: "ID", width: "20%"},
    { key: "name", label: "Name" }, // Empty label for no header
  ];

  return (
    <div className="h-full overflow-hidden">
      <DataTable
        data={insights}
        columns={columns}
        onRowClick={(row) => {
          const newTab = {
            id: `agent-${row.id}`,
            title: row.name,
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
        }}
      />
    </div>
  );
}
