
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import Panel from './panel';
import { Icon } from '@iconify/react';
import { initialPanels } from '@/data/replit/initial-panels';
import { Panel as PanelType } from '@/types/replit/panel';

export default function ReplitLayout() {
  const [panels, setPanels] = useState<PanelType[]>(initialPanels);
  const [leftWidth, setLeftWidth] = useState(panels[0].width || 240);
  const [rightWidth, setRightWidth] = useState(panels[2].width || 320);
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);

  const handleLeftResize = (e: any, { size }: { size: { width: number } }) => {
    setLeftWidth(size.width);
    setPanels(prev =>
      prev.map(panel =>
        panel.id === 'left-panel' ? { ...panel, width: size.width } : panel
      )
    );
  };

  const handleRightResize = (e: any, { size }: { size: { width: number } }) => {
    setRightWidth(size.width);
    setPanels(prev =>
      prev.map(panel =>
        panel.id === 'right-panel' ? { ...panel, width: size.width } : panel
      )
    );
  };

  const handleTabClose = (panelId: string, tabId: string) => {
    setPanels(prev =>
      prev.map(panel =>
        panel.id === panelId
          ? {
              ...panel,
              tabs: panel.tabs.filter(tab => tab.id !== tabId),
              activeTabId: panel.tabs[0]?.id || ''
            }
          : panel
      )
    );
  };

  const handleNewTab = (panelId: string) => {
    const newTab = {
      id: `new-tab-${Date.now()}`,
      title: 'New Tab',
      isCloseable: true
    };
    setPanels(prev =>
      prev.map(panel =>
        panel.id === panelId
          ? {
              ...panel,
              tabs: [...panel.tabs, newTab],
              activeTabId: newTab.id
            }
          : panel
      )
    );
  };

  return (
    <div className="flex h-full overflow-hidden">
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
              onTabClose={(tabId) => handleTabClose('left-panel', tabId)}
              onTabClick={(tabId) => setPanels(prev =>
                prev.map(p => p.id === 'left-panel' ? { ...p, activeTabId: tabId } : p)
              )}
              onNewTab={() => handleNewTab('left-panel')}
            />
          </div>
        </Resizable>
      </div>
      
      <button 
        onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
        className="z-10 w-1 hover:w-2 hover:bg-default-100 absolute left-0 top-0 bottom-0 transition-all duration-300"
      />

      <div className="flex-1">
        <Panel
          {...panels[1]}
          onTabClose={(tabId) => handleTabClose('center-panel', tabId)}
          onTabClick={(tabId) => setPanels(prev =>
            prev.map(p => p.id === 'center-panel' ? { ...p, activeTabId: tabId } : p)
          )}
          onNewTab={() => handleNewTab('center-panel')}
        />
      </div>

      <button 
        onClick={() => setIsRightCollapsed(!isRightCollapsed)}
        className="z-10 p-1 hover:bg-default-100 rounded absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        <Icon icon={isRightCollapsed ? "mdi:chevron-left" : "mdi:chevron-right"} className="w-4 h-4" />
      </button>

      <div className={`transition-all duration-300 ${isRightCollapsed ? 'w-0' : ''}`}>
        <Resizable
          width={isRightCollapsed ? 0 : rightWidth}
          height={0}
          onResize={handleRightResize}
          handle={
            <div className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary z-10" />
          }
          resizeHandles={['w']}
          minConstraints={[0, 0]}
          maxConstraints={[500, 0]}
        >
          <div style={{ width: isRightCollapsed ? 0 : rightWidth }} className="h-full border-l border-divider relative min-w-0">
            <Panel
              {...panels[2]}
              onTabClose={(tabId) => handleTabClose('right-panel', tabId)}
              onTabClick={(tabId) => setPanels(prev =>
                prev.map(p => p.id === 'right-panel' ? { ...p, activeTabId: tabId } : p)
              )}
              onNewTab={() => handleNewTab('right-panel')}
            />
          </div>
        </Resizable>
      </div>
    </div>
  );
}
