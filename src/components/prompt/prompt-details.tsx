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
        <Resizable
          width={width}
          height={0}
          onResize={handleResize}
          handle={
            <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary z-10" />
          }
          resizeHandles={["e"]}
          minConstraints={[300, 0]}
          maxConstraints={[window.innerWidth - 300, 0]}
        >
          <div
            style={{ width }}
            className="py-4 pr-4 border-r border-divider relative min-w-[300px]"
          >
            <PromptEditorPanel />
          </div>
        </Resizable>
        <div
          style={{ width: `calc(100% - ${width}px)` }}
          className="bg-default-50"
        >
          <PromptResponsePanel width={100} />
        </div>
      </div>
    </div>
  );
}
