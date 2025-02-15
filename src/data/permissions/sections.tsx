
import { PermissionSection } from "@/types/permissions";

export const permissionSections: PermissionSection[] = [
  {
    title: "Admin",
    permissions: [
      "Can add log entry",
      "Can change log entry",
      "Can delete log entry",
      "Can view log entry",
    ],
  },
  { title: "Auditlog", permissions: [] },
  { title: "Auth", permissions: [] },
  { title: "Comparisons", permissions: [] },
  { title: "Contenttypes", permissions: [] },
  { title: "Discussions", permissions: [] },
  { title: "Documents", permissions: [] },
];
