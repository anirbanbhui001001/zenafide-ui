
import React from "react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { chats } from "@/data/chat_history";
import { Chat } from "@/types/assistant";

interface ChatsTabProps {
  onChatSelect: (chat: Chat) => void;
}

export default function ChatsTab({ onChatSelect }: ChatsTabProps) {
  const columns = [
    { key: "id", label: "ID", width: "5%" },
    {
      key: "title",
      label: "Title",
      render: (chat: Chat) => (
        <div className="flex items-center gap-2">
          <Icon icon="mdi:chat-outline" className="text-gray-500 flex-shrink-0" width={20} />
          <span className="truncate">{chat.title}</span>
        </div>
      ),
    },
    { 
      key: "messageCount",
      label: "Messages",
      width: "15%",
      render: (chat: Chat) => chat.messages.length
    },
    {
      key: "actions",
      label: "Actions",
      width: "5%",
      align: "end" as const,
      render: (chat: Chat) => (
        <div className="flex justify-end gap-2">
          <Icon
            icon="mdi:eye-outline"
            width={20}
            className="cursor-pointer"
            onClick={() => onChatSelect(chat)}
          />
        </div>
      ),
    },
  ];

  return <DataTable data={chats} columns={columns} title="All Chats" />;
}
