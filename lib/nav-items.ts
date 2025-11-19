import employees from "@/public/employee-icon.svg";
import Dashboard from "@/public/home-icon.svg";
import solarSales from "@/public/solar-icon.svg";
import Calender from "@/public/appointment.svg";
import Store from "@/public/store-icon.svg";
import FileText from "@/public/document.svg";
import Settings from "@/public/settings.svg";

export const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: Dashboard,
  },
  {
    label: "Employees",
    href: "/employees",
    icon: employees,
  },
  {
    label: "Solar Sales",
    href: "/sales",
    icon: solarSales,
  },
  {
    label: "Appointments",
    href: "/appointments",
    icon: Calender,
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
