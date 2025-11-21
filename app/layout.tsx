"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname().split("/")[1] || "dashboard";
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="h-screen w-screen flex overflow-hidden bg-[#F8FAFC]">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden rounded-3xl">
          <Topbar currentPath={path} />

          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
