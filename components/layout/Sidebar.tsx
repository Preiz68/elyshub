"use client";

import Image from "next/image";
import { navItems } from "@/lib/nav-items";
import { SidebarItem } from "./SidebarItem";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/store/useSidebar";
import { useEffect, useState } from "react";

export function Sidebar() {
  const { open, close } = useSidebar();

  const [isTallEnough, setIsTallEnough] = useState(false);

  // Detect screen height

  useEffect(() => {
    const checkHeight = () => {
      setIsTallEnough(window.innerHeight >= 850);
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);

    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <>
      {/* BACKDROP on mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={close}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR ITSELF */}
      <AnimatePresence>
        <motion.aside
          key="sidebar"
          initial={{ x: "-100%" }}
          animate={{ x: open ? "0%" : "-100%" }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="
            fixed top-0 left-0
            h-screen
            bg-[#101928]
            text-white
            flex flex-col
            justify-between
            border-r border-white/10
            w-64
            z-50
            lg:static
            lg:translate-x-0
            lg:w-72
          "
        >
          {/* ─────────── TOP SECTION ─────────── */}
          <div className="flex-1">
            <div className="px-6 py-6">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                priority
                className="hidden sm:block"
              />
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={40}
                className="sm:hidden"
              />
            </div>

            {/* NAVIGATION */}
            <nav className="px-3 space-y-1">
              {navItems.map((item) => (
                <SidebarItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </nav>
          </div>

          {/* ─────────── BOTTOM CARD ─────────── */}
          <div className="space-y-6 px-2 sm:px-0">
            {isTallEnough && (
              <div className="mx-4 h-auto py-6 relative bg-linear-to-bl from-[#0640B5]/40 via-[#0640B5]/20 to-gray-900/90 rounded-2xl shadow-xl">
                <div className="absolute right-2 top-2">
                  <Image
                    src="/bottom-logo.svg"
                    alt="bottom-logo"
                    width={60}
                    height={60}
                  />
                </div>

                <div className="absolute left-0 top-2">
                  <Image
                    src="/corner-pic.svg"
                    alt="side-screenshot"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="pt-16 px-4">
                  <p className="text-sm sm:text-md font-semibold mb-1">
                    Welcome
                  </p>
                  <p className="text-xs sm:text-sm text-[#D0D5DD] leading-5">
                    Get to know your Rayna Solar Dashboard with our short
                    walkthrough course.
                  </p>
                </div>

                <div className="flex items-center gap-4 px-4 mt-4">
                  <button className="text-xs sm:text-sm text-[#FF7D33] font-medium hover:underline">
                    Start Tutorial
                  </button>
                  <button className="text-xs sm:text-sm text-gray-400 hover:text-gray-200">
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* ─────────── PROFILE ─────────── */}
            <div className="mx-4 pt-6 pb-7 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="relative">
                    <Image
                      src="/images/profile.png"
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full" />
                  </div>
                  <div className="sm:flex flex-col">
                    <span className="text-sm font-medium">Alison Eyo</span>
                    <span className="text-xs text-gray-400 hidden sm:block">
                      alison.44@rayna.ui
                    </span>
                  </div>
                </div>
                <Image src="/logout.svg" alt="logout" width={18} height={18} />
              </div>
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  );
}
