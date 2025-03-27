
"use client";

import React, { useState, useEffect } from "react";
import { Alert, Button, Switch, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
// import { agents } from "@/data/agents";
import { Agent } from "@/types/agents";
import AddAgentsModal from "./add-agents";
import LoadingOverlay from "@/components/loading";

import { supabase } from "@/utils/superbase";
import formatDate from "@/utils/date-format";


export default function Agents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [openAddAgentsModal, setOpenAddAgentsModal] = useState(false);

  const getAgents = async () => {
    setLoading(true);

    let { data, error } = await supabase
      .from('agents')
      .select('*')
      .order('createdAt', { ascending: true });

    if (error) setError(error.message);
    setAgents(data ?? []);
    setLoading(false);
  };

  const handleChange = async (id: string) => {
    //handle status change
    const { data, error } = await supabase.from('agents').update({ status: !agents.find(item => item.id === id)?.status }).eq('id', id);
    if (error) setError(error.message);
    getAgents();
  };

  useEffect(() => {
    getAgents();
  }, []);

  const handleModalClose = () => {
    getAgents();
    setOpenAddAgentsModal(false);
  };

  const handleDeleteAgents = async (item: Agent) => {
    const { error } = await supabase.from('agents').delete().eq('id', item.id);
    if (error) console.log(error);
    getAgents();
  }

  return (
    <>
      {error &&
        <div className="w-full flex items-center my-3 p-4">
          <Alert
            color="danger"
            title={`Error: ${error}`}
            onClose={() => setError(null)}
          />
        </div>
      }
      <LoadingOverlay loading={loading} />
      <DataTable
        data={agents}
        columns={[
          {
            key: "id",
            label: "ID",
            width: 100,
          },
          {
            key: "name",
            label: "Name",
            width: 100,
          },
          {
            key: "systemPrompt",
            label: "System Prompt",
            width: 100,
          },
          {
            key: "createdBy",
            label: "Created By",
            width: 100,
          },
          {
            key: "createdAt",
            label: "Created At",
            width: 150,
            render: (item: Agent) => (
              <span>{formatDate(item.createdAt)}</span>
            ),
          },
          {
            key: "status",
            label: "Status",
            width: 100,
            render: (item: Agent) => (
              <Switch
                isSelected={item.status}
                onChange={() => handleChange(item.id)}
              />
            ),
          },
          {
            key: 'actions',
            label: 'Actions',
            width: 100,
            render: (item: Agent) => (
              <Button
                color="secondary"
                onPress={() => handleDeleteAgents(item)}
              >
                <Icon icon="tabler:trash" />
                Delete
              </Button>
            ),
          },
        ]}
        title="Agents"
        actions={
          <Button
            color="primary"
            onPress={() => setOpenAddAgentsModal(true)}
          >
            <Icon icon="tabler:plus" />
            Add Agent
          </Button>
        }
      />
      <AddAgentsModal isOpen={openAddAgentsModal} onClose={handleModalClose} />
    </>
  )
}
