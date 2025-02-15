"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import APIKeyModal from "./api-key-modal";

type Provider = {
  id: string;
  name: string;
  status: "Configured" | "Not Configured";
  created: string;
};

const providers: Provider[] = [
  {
    id: "1",
    name: "azure_openai",
    status: "Configured",
    created: "1/8/2025, 11:04:47 AM",
  },
  {
    id: "2",
    name: "llama_parse",
    status: "Configured",
    created: "1/6/2025, 8:32:41 PM",
  },
  {
    id: "3",
    name: "openai",
    status: "Configured",
    created: "1/6/2025, 10:13:59 PM",
  },
];

export default function AIProviders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<Provider | undefined>();

  const columns = [
    { key: "name", label: "Name" },
    { 
      key: "status", 
      label: "Status",
      render: (provider: Provider) => (
        <div className="flex items-center">
          <span className="text-success mr-2">●</span>
          {provider.status}
        </div>
      )
    },
    { key: "created", label: "Created" },
    {
      key: "actions",
      label: "Actions",
      align: "end" as const,
      render: (provider: Provider) => (
        <div className="flex justify-end mr-2">
          <Icon 
            icon="akar-icons:edit" 
            width={20} 
            className="cursor-pointer"
            onClick={() => {
              setSelectedProvider(provider);
              setIsModalOpen(true);
            }}
          />
          <Icon
            icon="proicons:trash"
            width={20}
            className="ml-2 text-light cursor-pointer"
          />
        </div>
      )
    }
  ];

  const addKeyButton = (
    <Button
      color="primary"
      size="sm"
      startContent={<Icon icon="mdi:plus" />}
    >
      Add Key
    </Button>
  );

  return (
    <DataTable
      data={providers}
      columns={columns}
      title="AI Providers"
      actions={addKeyButton}
    />
    <APIKeyModal 
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        setSelectedProvider(undefined);
      }}
      provider={selectedProvider}
    />
  );
}