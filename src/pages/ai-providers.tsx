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
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Providers</h1>
        <Button
          color="primary"
          size="sm"
          startContent={<Icon icon="mdi:plus" />}
        >
          Add Key
        </Button>
      </div>
      <div>
        <div className="flex flex-col relative gap-4 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-3 items-end">
              <div className="flex gap-3"></div>
            </div>
            <div className="flex justify-between items-center"></div>
          </div>
          <Table aria-label="AI Providers" hideHeader={false} removeWrapper>
            <TableHeader className="border-b border-divider">
              <TableColumn className="text-default-500 bg-transparent">Name</TableColumn>
              <TableColumn className="text-default-500 bg-transparent">Status</TableColumn>
              <TableColumn className="text-default-500 bg-transparent">Created</TableColumn>
              <TableColumn className="text-default-500 bg-transparent" align="end">Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {providers.map((provider) => (
                <TableRow 
                  key={provider.id} 
                  className="border-b border-divider last:border-b-0"
                >
                  <TableCell className="pb-2">{provider.name}</TableCell>
                  <TableCell className="pb-2">
                    <div className="flex items-center">
                      <span className="text-success mr-2">●</span>
                      {provider.status}
                    </div>
                  </TableCell>
                  <TableCell className="pb-2">{provider.created}</TableCell>
                  <TableCell className="pb-2">
                    <div className="flex justify-end mr-2 cursor-pointer">
                      <Icon icon="akar-icons:edit" width={20} />
                      <Icon
                        icon="proicons:trash"
                        width={20}
                        className="ml-2 text-light"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
