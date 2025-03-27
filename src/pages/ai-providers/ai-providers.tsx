"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import APIKeyModal from "./api-key-modal";
import AIProvidersModal from "./add-ai-provider";
import LoadingOverlay from "@/components/loading";

import { Provider } from "@/types/settings/provider";
// import { providers } from "@/data/settings/providers";
import { supabase } from "@/utils/superbase";
import formatDate from "@/utils/date-format";

export default function AIProviders() {
  const [loading, setLoading] = useState<boolean>(false);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [openAddAIProviderModal, setOpenAddAIProviderModal] = useState(false);

  const [selectedProviders, setSelectedProviders] = useState<Provider[] | null>(null);
  const [open, setOpen] = useState(false);

  const getProviders = async () => {
    setLoading(true);
    let { data, error } = await supabase.from('providers').select('*').order('createdAt', { ascending: true });

    if (error) console.log(error);
    setProviders(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getProviders();
  }, []);

  const handleAddAIProviderClose = () => {
    setOpenAddAIProviderModal(false);
    getProviders();
  }

  const handleDeleteProvider = async (item: Provider) => {
    const { error } = await supabase.from('providers').delete().eq('id', item.id);
    if (error) console.log(error);
    getProviders();
  }

  return (
    <>
      <LoadingOverlay loading={loading} />
      <DataTable
        data={providers}
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
            key: "status",
            label: "Status",
            width: 100,
          },
          {
            key: "createdAt",
            label: "Created",
            width: 100,
            render: (item: Provider) => (
              <span>{formatDate(item.createdAt)}</span>
            ),
          },
          {
            key: "action",
            label: "Action",
            width: 100,
            render: (item: Provider) => (
              <Button
                color="secondary"
                onPress={() => {
                  setSelectedProviders([item]);
                  setOpen(true);
                }}
              >
                <Icon icon="tabler:pencil" />
                Configure
              </Button>
            ),
          },
          {
            key: 'delete',
            label: 'Delete',
            width: 100,
            render: (item: Provider) => (
              <Button
                color="secondary"
                onPress={() => handleDeleteProvider(item)}
              >
                <Icon icon="tabler:trash" />
                Delete
              </Button>
            ),
          },
        ]}
        title="AI Providers"
        actions={
          <Button
            color="secondary"
            onPress={() => setOpenAddAIProviderModal(true)}
          >
            <Icon icon="tabler:plus" />
            Add AI Provider
          </Button>
        }
      />
      <APIKeyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        provider={selectedProviders?.[0]}
      />
      <AIProvidersModal isOpen={openAddAIProviderModal} onClose={handleAddAIProviderClose} />
    </>
  )
}
