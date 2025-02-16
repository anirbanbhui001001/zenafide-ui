
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
    <div className="h-full flex flex-col max-w-full">
      <PromptHeader />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex">
          <Resizable
            width={width}
            height={0}
            onResize={handleResize}
            minConstraints={[300, 0]}
            maxConstraints={[window.innerWidth - 300, 0]}
            draggableOpts={{ enableUserSelectHack: false }}
            handle={<div className="absolute right-0 w-1 h-full cursor-col-resize bg-default-200 hover:bg-primary" />}
            axis="x"
          >
            <div style={{ width }} className="min-w-[300px] relative">
              <PromptEditorPanel />
            </div>
          </Resizable>
        </div>
        <div className="flex-1 min-w-[300px]">
          <PromptResponsePanel width="100%" />
        </div>
      </div>
    </div>
  );
}
