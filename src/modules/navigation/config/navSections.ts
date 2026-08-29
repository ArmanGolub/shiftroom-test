import {
  BarChart3,
  Building2,
  Calendar,
  CalendarClock,
  FileText,
  LockKeyholeOpen,
  type LucideIcon,
  Users,
  Wallet,
} from "lucide-react";

export const UNKNOWN_PATH = "/unknown";

export type NavItem = {
  id: string;
  label: string;
  path: string;
};

export type NavSection = {
  id: string;
  label: string;
  icon: LucideIcon;
  path?: string;
  children?: NavItem[];
};

export const navSections: NavSection[] = [
  { id: "employees", label: "Employees", icon: Users, path: UNKNOWN_PATH },
  { id: "companies", label: "Companies", icon: Building2, path: UNKNOWN_PATH },
  {
    id: "leaves",
    label: "Leaves and Attendance",
    icon: CalendarClock,
    children: [
      {
        id: "leave-balances",
        label: "Leave Balances",
        path: "/leave-balances",
      },
      { id: "leave-requests", label: "Leave requests", path: UNKNOWN_PATH },
      { id: "public-holidays", label: "Public Holidays", path: UNKNOWN_PATH },
    ],
  },
  { id: "access", label: "Access", icon: LockKeyholeOpen, path: UNKNOWN_PATH },
  { id: "reports", label: "Reports", icon: BarChart3, path: UNKNOWN_PATH },
  { id: "payroll", label: "Payroll", icon: Wallet, path: UNKNOWN_PATH },
  { id: "documents", label: "Documents", icon: FileText, path: UNKNOWN_PATH },
  { id: "schedule", label: "Schedule", icon: Calendar, path: UNKNOWN_PATH },
];

export const sectionTarget = (section: NavSection) =>
  section.children?.[0]?.path ?? section.path ?? UNKNOWN_PATH;

export const matchLocation = (pathname: string) => {
  if (pathname === UNKNOWN_PATH) return null;

  for (const section of navSections) {
    const child = section.children?.find((item) => item.path === pathname);
    if (child) return { railId: section.id, subId: child.id };
    if (section.path && section.path === pathname) {
      return { railId: section.id, subId: null };
    }
  }

  return null;
};
