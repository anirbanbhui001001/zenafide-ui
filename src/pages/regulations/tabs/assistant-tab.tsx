
import React from "react";
import AssistantDetails from "@/components/assistant/assistant-details";
import { chats } from "@/data/chats";

export default function AssistantTab() {
  return <AssistantDetails chats={chats} />;
}
