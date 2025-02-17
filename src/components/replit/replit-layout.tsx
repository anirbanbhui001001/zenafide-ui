
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import Panel from './panel';
import { initialPanels } from '@/data/replit/initial-panels';
import { Panel as PanelType } from '@/types/replit/panel';

export default function ReplitLayout() {
  const [panels, setPanels] = useState<PanelType[]>(initialPanels);

  const handleResize = (panelId: string, width: number) => {
    setPanels(prev =>
      prev.map(panel =>
        panel.id === panelId ? { ...panel, width } : panel
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
    <div className="flex h-full">
      <Resizable
        width={panels[0].width || 240}
        height={Infinity}
        onResize={(_, { size }) => handleResize('left-panel', size.width)}
        handle={<div className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary" />}
      >
        <div style={{ width: panels[0].width }} className="h-full border-r border-divider">
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

      <Resizable
        width={panels[2].width || 320}
        height={Infinity}
        onResize={(_, { size }) => handleResize('right-panel', size.width)}
        handle={<div className="absolute left-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary" />}
      >
        <div style={{ width: panels[2].width }} className="h-full border-l border-divider">
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
  );
}
