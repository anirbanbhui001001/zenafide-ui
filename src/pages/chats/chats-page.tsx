
import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import ChatsTab from './tabs/chats-tab';
import { Chat } from "@/types/assistant";

export default function ChatsPage() {
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
    return (
        <div>
            <Tabs fullWidth>
                <Tab key="chats" title="Chats">
                    <ChatsTab selectedChat={selectedChat} onChatSelect={(chat: Chat) => {
                        setSelectedChat(chat);
                    }} />
                </Tab>
            </Tabs>
        </div >
    )
}
