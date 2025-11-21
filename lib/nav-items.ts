import Employees from "@/public/employee-icon.svg";
import Dashboard from "@/public/home-icon.svg";
import SolarSales from "@/public/solar-icon.svg";
import Appointments from "@/public/appointment.svg";
import Store from "@/public/store-icon.svg";
import FileText from "@/public/document.svg";
import Settings from "@/public/settings.svg";
import React from "react";

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: Dashboard,
  },
  {
    label: "Employees",
    href: "/employees",
    icon: Employees,
  },
  {
    label: "Solar Sales",
    href: "/sales",
    icon: SolarSales,
  },
  {
    label: "Appointments",
    href: "/appointments",
    icon: Appointments,
  },
  {
    label: "Store",
    href: "/store",
    icon: Store,
  },
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
