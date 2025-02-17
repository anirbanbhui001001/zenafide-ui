
export type Notification = {
  id: string;
  isRead?: boolean;
  avatar: string;
  description: string;
  name: string;
  time: string;
  type?: "default" | "request" | "file";
};

export enum NotificationTabs {
  All = "all",
  Unread = "unread",
  Archive = "archive",
}
