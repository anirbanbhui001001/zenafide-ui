export interface AssistantMessage {
  id: string;
  content: string;
  timestamp: string;
  isUser: boolean;
  files?: string[];
  proposedChanges?: FileChange[];
}

export interface FileChange {
  filePath: string;
  description: string;
  additions: number;
  deletions: number;
  canApply: boolean;
  content?: string;
}

export interface Chat {
  id: string;
  title: string;
  lastMessageTime: string;
  messages: AssistantMessage[];
}
