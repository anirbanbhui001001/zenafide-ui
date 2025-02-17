
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import Panel from './panel';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import AssistantMainArea from './assistant-main-area';
import AssistantChatHistory from './tabs/assistant-chat-history-tab';
import { chats } from '@/data/chats';

export default function AssistantLayout() {
  const [leftWidth, setLeftWidth] = useState(240);
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [panels, setPanels] = useState([
    {
      id: 'left-panel',
      tabs: [
        { id: 'chats', title: 'Chats', content: React.createElement(AssistantChatHistory, { chats }), isCloseable: false },
        { id: 'archived', title: 'Archived', isCloseable: false }
      ],
      activeTabId: 'chats',
      width: leftWidth
    }
  ]);

  const handleLeftResize = (e: any, { size }: { size: { width: number } }) => {
    setLeftWidth(size.width);
    setPanels(prev =>
      prev.map(panel =>
        panel.id === 'left-panel' ? { ...panel, width: size.width } : panel
      )
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-2 gap-2 border-b border-divider">
        <Button isIconOnly variant="light" size="sm">
          <Icon icon="mdi:menu" className="text-xl" />
        </Button>
        <Button color="primary" size="sm" startContent={<Icon icon="mdi:plus" />}>
          New Chat
        </Button>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        <div className={`transition-all duration-300 ${isLeftCollapsed ? 'w-0' : ''}`}>
          <Resizable
            width={isLeftCollapsed ? 0 : leftWidth}
            height={0}
            onResize={handleLeftResize}
            handle={
              <div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary z-10" />
            }
            resizeHandles={['e']}
            minConstraints={[0, 0]}
            maxConstraints={[500, 0]}
          >
            <div style={{ width: isLeftCollapsed ? 0 : leftWidth }} className="h-full border-r border-divider relative min-w-0">
              <Panel
                {...panels[0]}
                onTabClose={() => {}}
                onTabClick={(tabId) => setPanels(prev =>
                  prev.map(p => p.id === 'left-panel' ? { ...p, activeTabId: tabId } : p)
                )}
                onNewTab={() => {}}
              />
            </div>
          </Resizable>
        </div>

        <button 
          onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
          className="z-10 w-1 hover:w-2 hover:bg-default-100 absolute left-0 top-0 bottom-0 transition-all duration-300"
        />

        <div className="flex-1">
          <AssistantMainArea />
        </div>
      </div>
    </div>
  );
}
