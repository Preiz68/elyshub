"use client";

import { useCalendarStore } from "@/store/useStore";
import { format } from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Search,
  List,
  ListFilter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const views = ["day", "week", "month", "year"] as const;

export default function CalendarHeader() {
  const { currentDate, nextWeek, prevWeek, setView, view } = useCalendarStore();
  const date = new Date(currentDate);

  return (
    <header
      className="
        flex flex-col md:flex-row
        items-center md:justify-between
        gap-4 md:gap-0
        px-4 md:px-6 py-3 border-b bg-white
      "
    >
      {/* LEFT SECTION ------------------------------------------------ */}
      <div className="flex items-center gap-2">
        {/* Sidebar / List toggle */}
        <div className="hidden md:flex border rounded-md overflow-hidden">
          <button className="h-9 w-9 border-r flex items-center justify-center bg-gray-200">
            <Calendar size={16} />
          </button>
          <button className="h-9 w-9 flex items-center justify-center bg-white">
            <List size={16} />
          </button>
        </div>

        {/* Divider - Hide on small screens */}
        <div className="hidden md:block h-8 w-px bg-slate-300 mx-2"></div>

        {/* Today Button */}
        <button
          onClick={() => setView("week")}
          className="
            px-3 md:px-4 h-9 text-sm border rounded-md 
            hover:bg-slate-100 transition
          "
        >
          Today
        </button>

        {/* Prev / Next Buttons */}
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={prevWeek}
            className="h-9 w-9 flex border-r items-center justify-center hover:bg-slate-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextWeek}
            className="h-9 w-9 flex items-center justify-center hover:bg-slate-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* CENTER TITLE ------------------------------------------------ */}
      <div className="flex items-center text-lg font-semibold justify-center md:justify-start">
        {format(date, "MMMM")},{" "}
        <span className="text-slate-500 ml-1">{format(date, "yyyy")}</span>
      </div>

      {/* RIGHT SECTION ------------------------------------------------ */}
      <div
        className="
          flex items-center gap-2 md:gap-3 
          justify-center md:justify-end
        "
      >
        {/* View Switcher - Hide on very small screens */}
        <div
          className="
            hidden xl:flex border rounded-md overflow-hidden h-9
          "
        >
          {views.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                "px-3 text-sm capitalize hover:bg-slate-100 transition",
                view === v && "bg-slate-200 font-medium"
              )}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Filter */}
        <div className="xl:flex gap-2 hidden">
          <button
            className="
            h-9 w-9 border rounded-md 
            flex items-center justify-center 
            hover:bg-slate-100
          "
          >
            <ListFilter size={16} />
          </button>

          {/* Search */}
          <button
            className="
            h-9 w-9 border rounded-md 
            flex items-center justify-center 
            hover:bg-slate-100
          "
          >
            <Search size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
