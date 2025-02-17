
import { ReactNode } from 'react';

export interface Tab {
  id: string;
  title: string;
  content?: ReactNode;
  isCloseable: boolean;
}

export interface Panel {
  id: string;
  tabs: Tab[];
  activeTabId: string;
  width?: number;
}
