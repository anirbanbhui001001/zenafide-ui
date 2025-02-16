
import React, { useState } from "react";
import { Resizable } from "react-resizable";
import AssistantChatHistory from "./assistant-chat-history";
import AssistantMainArea from "./assistant-main-area";
import { Chat } from "@/types/assistant";

interface AssistantDetailsProps {
  chats: Chat[];
}

export default function AssistantDetails({ chats }: AssistantDetailsProps) {
  const [width, setWidth] = useState(256);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = (e: any, { size }: { size: { width: number } }) => {
    setWidth(size.width);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] relative">
      <Resizable
        width={width}
        height={0}
        onResize={handleResize}
        handle={
          <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary z-10" />
        }
        resizeHandles={['e']}
        minConstraints={[200, 0]}
        maxConstraints={[400, 0]}
      >
        <div style={{ width }} className={`${isMenuOpen ? 'absolute z-20 h-full bg-background' : ''}`}>
          <AssistantChatHistory 
            chats={chats} 
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </Resizable>
      <AssistantMainArea />
    </div>
  );
}
