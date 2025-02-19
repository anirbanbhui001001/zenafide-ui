
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import ChatsTab from './tabs/chats-tab';
import { Chat } from "@/types/assistant";

export default function ChatsPage() {
  const [activeTab, setActiveTab] = useState("chats");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);
    setActiveTab("viewer");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Chats</h1>
      <Tabs 
        selectedKey={activeTab} 
        onSelectionChange={(key) => setActiveTab(key as string)}
        aria-label="Chat management options"
      >
        <Tab key="chats" title="Chats">
          <ChatsTab onChatSelect={handleChatSelect} />
        </Tab>
      </Tabs>
    </div>
  );
}
