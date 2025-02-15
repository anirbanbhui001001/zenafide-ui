
"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
} from "@heroui/react";
import { Icon } from "@iconify/react";

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
  return (
    <div className="flex h-full w-full flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">AI Providers</h1>
        <Button color="primary" startContent={<Icon icon="solar:add-circle-bold" />}>
          Add Key
        </Button>
      </div>

      <Table aria-label="AI Providers table">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Created</TableColumn>
          <TableColumn align="end">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {providers.map((provider) => (
            <TableRow key={provider.id}>
              <TableCell>{provider.name}</TableCell>
              <TableCell>
                <Chip
                  color="success"
                  startContent={
                    <div className="h-2 w-2 rounded-full bg-success-500" />
                  }
                >
                  {provider.status}
                </Chip>
              </TableCell>
              <TableCell>{provider.created}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    aria-label="Edit provider"
                  >
                    <Icon icon="solar:pen-2-linear" width={16} />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    aria-label="Delete provider"
                  >
                    <Icon icon="solar:trash-bin-trash-linear" width={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
