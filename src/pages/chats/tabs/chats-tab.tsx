
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { chats } from "@/data/chat_history";
import { Chat } from "@/types/assistant";
import ChatDetails from "./chat-details";

interface ChatsTabProps {
  onChatSelect: (chat: Chat) => void;
  selectedChat: Chat | null;
}

export default function ChatsTab({ onChatSelect, selectedChat }: ChatsTabProps) {
  return (
    <div>
      <DataTable
        data={chats}
        columns={[
          {
            key: "id",
            label: "ID",
            width: 100,
          },
          {
            key: "title",
            label: "Title",
            width: 100,
          },
          {
            key: "lastMessageTime",
            label: "Last Message Time",
            width: 100,
          },
          {
            key: "action",
            label: "Action",
            width: 100,
            render: (item: Chat) => (
              <button
                onClick={() => onChatSelect(item)}
                className="text-primary"
              >
                {selectedChat?.id === item.id ? 'Hide' : 'View'}
              </button>
            ),
          }
        ]}
        title="Chats"
      />
      {selectedChat && <ChatDetails messages={selectedChat.messages} />}
    </div>
  )
}
