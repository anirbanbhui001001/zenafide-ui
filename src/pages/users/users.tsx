
"use client";

import { useEffect, useState } from "react";
import { Button, Alert } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
// import { zenUsers } from "@/data/zen_users";
import { ZenUser } from "@/types/zen_user";
import SidePanel from "@/components/side-panel/side-panel";
import AddUserModal from "./add-user";
import LoadingOverlay from "@/components/loading";

import { supabase } from "@/utils/superbase";

export default function Users() {
  const [loading, setLoading] = useState<boolean>(false);
  const [zenUsers, setZenUsers] = useState<ZenUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<ZenUser | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [openAddUserModal, setOpenAddUserModal] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    let { data, error } = await supabase
      .from('users')
      .select('*')
      .order('createdAt', { ascending: true });

    if (error) console.log(error);
    setZenUsers(data ?? []);
    setLoading(false);
  };

  const handleSave = async (data: ZenUser) => {

    const { data: updatedUser, error } = await supabase.from('users').upsert(data);
    if (error) setError(error.message);
    getUsers();

    setSelectedUser(null);
    setOpen(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleModalClose = () => {
    getUsers();
    setOpenAddUserModal(false);
  };

  const handleDeleteUser = async (item: ZenUser) => {
    const { error } = await supabase.from('users').delete().eq('id', item.id);
    if (error) console.log(error);
    getUsers();
  }

  return (
    <>
      <LoadingOverlay loading={loading} />
      {error &&
        <div className="w-full flex items-center my-3 p-4">
          <Alert
            color="danger"
            title={`Error: ${error}`}
            onClose={() => setError(null)}
          />
        </div>
      }
      <DataTable
        data={zenUsers}
        columns={[
          {
            key: "id",
            label: "ID",
            width: 100,
          },
          {
            key: "firstName",
            label: "First Name",
            width: 100,
          },
          {
            key: "lastName",
            label: "Last Name",
            width: 100,
          },
          {
            key: "email",
            label: "Email",
            width: 100,
          },
          {
            key: 'action',
            label: 'Action',
            width: 100,
            render: (item: ZenUser) => (
              <Button
                color="secondary"
                onPress={() => {
                  setSelectedUser(item);
                  setOpen(true);
                }}
              >
                <Icon icon="tabler:pencil" />
                Edit
              </Button>
            ),
          },
          {
            key: 'delete',
            label: 'Delete',
            width: 100,
            render: (item: ZenUser) => (
              <Button
                color="secondary"
                onPress={() => handleDeleteUser(item)}
              >
                <Icon icon="tabler:trash" />
                Delete
              </Button>
            ),
          },
        ]}
        title="Users"
        actions={
          <Button
            color="secondary"
            onPress={() => setOpenAddUserModal(true)}
          >
            <Icon icon="tabler:plus" />
            Add User
          </Button>
        }
      />
      {selectedUser &&
        <SidePanel
          isOpen={open}
          onClose={() => setOpen(false)}
          user={selectedUser}
          onSave={handleSave}
        />}
      <AddUserModal isOpen={openAddUserModal} onClose={handleModalClose} />
    </>
  )
}
