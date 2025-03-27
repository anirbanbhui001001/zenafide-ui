import EditorTab from "@/components/replit/tabs/editor-tab";
import DataTable from "@/components/table/datatable";
import React from "react";

interface AgentsTabProps {
  insights: any[];
}

export default function AgentsTab({ insights }: AgentsTabProps) {
  const columns = [
    { key: "id", label: "ID", width: 200},
    { key: "name", label: "Name" }, // Empty label for no header
  ];

  return (
      <div></div>
  )
}
