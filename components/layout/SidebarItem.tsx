"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Props {
  label: string;
  href: string;
  icon: string;
}

export function SidebarItem({ label, href, icon }: Props) {
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
      <Image src={icon} alt={`${label} icon`} width={20} height={20} />
      <span>{label}</span>
    </Link>
  );
}
