
import { Panel } from '@/types/replit/panel';

export const initialPanels: Panel[] = [
  {
    id: 'left-panel',
    tabs: [],
    activeTabId: '',
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
