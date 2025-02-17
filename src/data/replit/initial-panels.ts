
import React from 'react';
import { Panel } from '@/types/replit/panel';
import FilesTab from '@/components/replit/tabs/files-tab';

export const initialPanels: Panel[] = [
  {
    id: 'left-panel',
    tabs: [
      { 
        id: 'files', 
        title: 'Files', 
        content: <FilesTab />, 
        isCloseable: false 
      }
    ],
    activeTabId: 'files',
    width: 240
  },
  {
    id: 'center-panel',
    tabs: [
      { id: 'assistant', title: 'Assistant', isCloseable: true },
      { id: 'new-tab-center', title: 'New Tab', isCloseable: true }
    ],
    activeTabId: 'assistant'
  },
  {
    id: 'right-panel',
    tabs: [
      { id: 'console', title: 'Console', isCloseable: true },
      { id: 'new-tab-right', title: 'New Tab', isCloseable: true }
    ],
    activeTabId: 'console',
    width: 320
  }
];
