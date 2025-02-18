import { SidebarItem } from "@/components/sidebar/sidebar";

export const sidebarItems: SidebarItem[] = [
  {
    key: "menu",
    title: "Menu",
    items: [
      {
        key: "home",
        href: "/home",
        icon: "solar:home-2-linear",
        title: "Home",
      },
      {
        key: "projects",
        href: "/projects",
        icon: "solar:widget-2-outline",
        title: "Projects",
      },
      {
        key: "regulations",
        href: "/regulations",
        icon: "solar:file-text-outline",
        title: "Regulations",
      },
      {
        key: "documents",
        href: "/documents",
        icon: "solar:file-text-outline",
        title: "Documents",
      },
    ],
  },
  {
    key: "admin",
    title: "Admin",
    items: [
      {
        key: "agents",
        href: "/agents",
        icon: "la:robot",
        title: "Agents",
      },
      {
        key: "conversation-history",
        href: "/conversation-history",
        icon: "material-symbols:work-history-outline",
        title: "Conversation History",
      },
      {
        key: "insights-history",
        href: "/insights-history",
        icon: "material-symbols:search-insights",
        title: "Insights History",
      },
      {
        key: "users",
        href: "/users",
        icon: "ci:users-group",
        title: "Users",
      },
      {
        key: "ai-providers",
        href: "/ai-providers",
        icon: "material-symbols:api",
        title: "AI Providers",
      },
      {
        key: "evaluations",
        href: "/evaluations",
        icon: "material-symbols:balance",
        title: "Evaluations",
      },
    ],
  },
];
