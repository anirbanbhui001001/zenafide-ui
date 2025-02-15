
import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import PromptHeader from "./prompt-header";
import PromptEditorPanel from "./prompt-editor-panel";
import PromptResponsePanel from "./prompt-response-panel";

interface PromptDetailsProps {
  name: string;
  initialSystemPrompt: string;
  initialUserMessage: string;
}

export default function PromptDetails({
  name,
  initialSystemPrompt,
  initialUserMessage
}: PromptDetailsProps) {
  const [systemPrompt, setSystemPrompt] = useState(initialSystemPrompt);
  const [userMessage, setUserMessage] = useState(initialUserMessage);
  const [response, setResponse] = useState("");
  
  const handleRun = () => {
    // Implement run logic
  };
  
  const handleUpdate = () => {
    // Implement update logic
  };
  
  const handleSettingsOpen = () => {
    // Implement settings logic
  };

  return (
    <div className="flex flex-col h-full">
      <PromptHeader
        name={name}
        onRun={handleRun}
        onUpdate={handleUpdate}
        onSettingsOpen={handleSettingsOpen}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <ResizableBox
          width={500}
          height={Infinity}
          minConstraints={[300, Infinity]}
          maxConstraints={[800, Infinity]}
          axis="x"
          className="border-r"
        >
          <PromptEditorPanel
            systemPrompt={systemPrompt}
            userMessage={userMessage}
            onSystemPromptChange={setSystemPrompt}
            onUserMessageChange={setUserMessage}
            onAddMessagePair={() => {}}
          />
        </ResizableBox>
        
        <div className="flex-1">
          <PromptResponsePanel response={response} />
        </div>
      </div>
    </div>
  );
}
