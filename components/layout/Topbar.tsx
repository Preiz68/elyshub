"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navItems } from "@/lib/nav-items";
import { Search, Menu } from "lucide-react";
import { useSidebar } from "@/store/useStore";

import Notification from "@/public/topbar/notification.svg";
import Chat from "@/public/topbar/message.svg";
import ArrowDown from "@/public/topbar/ArrowDown.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Topbar({ currentPath }: { currentPath: string }) {
  const toggleSidebar = useSidebar((s) => s.toggle);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 sm:px-6">
      {/* LEFT */}
      <div className="flex items-center gap-3 min-w-0">
        {/* MOBILE SIDEBAR BUTTON */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* ACTIVE ICON */}
        <div className="shrink-0 hidden lg:block">
          {navItems.map((navItem) => {
            const isActive =
              (navItem.href === "/" && currentPath === "dashboard") ||
              navItem.href === `/${currentPath}`;
            const Icon = navItem.icon;

            return isActive ? (
              <Icon key={navItem.label} className="w-5 h-5" />
            ) : null;
          })}
        </div>

        {/* TITLE */}
        <p className="text-gray-900 font-semibold truncate max-w-[120px] sm:max-w-none">
          {currentPath === "sales"
            ? "Solar Sales"
            : currentPath.charAt(0).toUpperCase() + currentPath.slice(1)}
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        {/* SEARCH */}
        <div className="relative w-36 xs:w-40 sm:w-48 md:w-56 lg:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input placeholder="Search here..." className="pl-10 pr-3 py-2" />
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Notification className="hidden lg:block w-6 h-6 text-gray-500" />
          <Chat className="hidden lg:block w-6 h-6 text-gray-500" />

          <Avatar className="w-8 h-8">
            <AvatarImage src="/images/profile.png" />
            <AvatarFallback>AE</AvatarFallback>
          </Avatar>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none lg:hidden">
              <ArrowDown className="w-5 h-5 text-gray-600" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44 space-y-1">
              <DropdownMenuItem className="flex items-center gap-2">
                <Notification className="w-5 h-5" />
                Notifications
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-2">
                <Chat className="w-5 h-5" />
                Messages
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
