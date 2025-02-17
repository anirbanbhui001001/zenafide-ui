
import { Notification, NotificationTabs } from "@/types/notification";

export const notifications: Record<NotificationTabs, Notification[]> = {
  all: [
    {
      id: "1",
      isRead: false,
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      description: "requested to join your organization.",
      name: "Tony Reichert",
      time: "2 hours ago",
      type: "request",
    },
    {
      id: "2",
      isRead: false,
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      description: "modified the Brand logo file.",
      name: "Ben Berman",
      time: "7 hours ago",
      type: "file",
    },
    {
      id: "3",
      isRead: false,
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      description: "liked your post.",
      name: "Jane Doe",
      time: "Yesterday",
    },
  ],
  unread: [
    {
      id: "1",
      isRead: false,
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      description: "requested to join your Acme organization.",
      name: "Tony Reichert",
      time: "2 hours ago",
      type: "request",
    },
    {
      id: "2",
      isRead: false,
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      description: "modified the Brand logo file.",
      name: "Ben Berman",
      time: "7 hours ago",
      type: "file",
    },
  ],
  archive: [],
};
