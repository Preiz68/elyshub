"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import Topbar from "@/components/Topbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname().split("/")[1] || "dashboard";
  return (
    <html lang="en">
      <body className="h-screen w-screen flex overflow-hidden bg-[#F8FAFC]">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar currentPath={path} />

          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
