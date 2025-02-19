
"use client";

import React, { useState } from "react";
import { Button, Switch } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { agents } from "@/data/agents";
import { Agent } from "@/types/agents";

import { useNavigate } from "react-router-dom";

export default function Agents() {
  const [data, setData] = useState<Agent[]>(agents);
  const navigate = useNavigate();

  const handleToggleStatus = (agent: Agent) => {
    setData(prev => 
      prev.map(a => a.id === agent.id ? { ...a, status: !a.status } : a)
    );
  };

  const handleDelete = (agent: Agent) => {
    setData(prev => prev.filter(a => a.id !== agent.id));
  };

  const columns = [
    { key: "id", label: "ID", width: 50 },
    { key: "name", label: "Name" },
    { key: "systemPrompt", label: "System Prompt" },
    { key: "createdBy", label: "Created By" },
    { key: "createdAt", label: "Created At" },
    {
      key: "status",
      label: "Status",
      render: (agent: Agent) => (
        <Switch
          isSelected={agent.status}
          onValueChange={() => handleToggleStatus(agent)}
          size="sm"
        />
      ),
    },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (agent: Agent) => (
        <div className="flex justify-end gap-2 mr-2">
          <Icon
            icon="akar-icons:edit"
            width={20}
            className="cursor-pointer"
            onClick={() => console.log('Edit agent:', agent.id)}
          />
          <Icon
            icon="proicons:trash"
            width={20}
            className="cursor-pointer text-danger"
            onClick={() => handleDelete(agent)}
          />
        </div>
      ),
    },
  ];

  const addAgentButton = (
    <Button
      color="primary"
      size="sm"
      startContent={<Icon icon="mdi:plus" />}
    >
      Add Agent
    </Button>
  );

  return (
    <DataTable
      data={data}
      columns={columns}
      title="Agents"
      actions={addAgentButton}
      onRowClick={(agent: Agent) => navigate(`/agents/${agent.id}/prompt`)}
    />
  );
}
