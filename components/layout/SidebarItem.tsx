"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FC, SVGProps } from "react";
import { useSidebar } from "@/store/useStore";
import Image from "next/image";

interface Props {
  label: string;
  href: string;
  icon: string;
}

export const SidebarItem: FC<Props> = ({ label, href, icon }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-sm text-sm transition-colors",
        active
          ? "bg-white/10 text-white"
          : "text-gray-300 hover:bg-white/5 hover:text-white"
      )}
    >
      <Image src={icon} alt={label} className="w-5 h-5 shrink-0" />
      <span>{label}</span>
    </Link>
  );
};
