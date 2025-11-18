"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="w-[350px]">
        <Input placeholder="Search here..." />
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatar.png" alt="User" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
