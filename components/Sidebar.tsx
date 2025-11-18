"use client";

import { cn } from "@/lib/utils";
import { Home, Users, CalendarDays, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Employees", icon: Users, href: "/employees" },
  { label: "Appointments", icon: CalendarDays, href: "/appointments" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-[#0E1B2A] text-white flex flex-col">
      <div className="p-6 font-semibold text-lg tracking-wide">Elyshub Dev</div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm",
              "hover:bg-white/10 transition-colors"
            )}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
