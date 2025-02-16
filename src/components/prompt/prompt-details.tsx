
import React from "react";
import PromptHeader from "./prompt-header";
import PromptEditorPanel from "./prompt-editor-panel";
import PromptResponsePanel from "./prompt-response-panel";
import { Resizable } from "react-resizable";

export default function PromptDetails() {
  const [width, setWidth] = React.useState(window.innerWidth / 2);

  const handleResize = (e: any, { size }: { size: { width: number } }) => {
    setWidth(size.width);
  };

  return (
    <div className="h-full flex flex-col">
      <PromptHeader />
      <div className="flex-1 flex overflow-hidden">
        <Resizable
          width={width}
          height={0}
          onResize={handleResize}
          draggableOpts={{ enableUserSelectHack: false }}
          handle={<div className="w-1 h-full cursor-col-resize bg-default-200 hover:bg-primary" />}
          axis="x"
        >
          <div style={{ width }}>
            <PromptEditorPanel />
          </div>
        </Resizable>
        <PromptResponsePanel width={window.innerWidth - width - 1} />
      </div>
    </div>
  );
}
