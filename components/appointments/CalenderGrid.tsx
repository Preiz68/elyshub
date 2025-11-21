"use client";

import { weekRangeFrom } from "@/lib/appointments/utils";
import { useCalendarStore } from "@/store/useStore";
import CalendarDayColumn from "./CalenderDayColumn";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function CalendarGrid() {
  const { currentDate, appointments } = useCalendarStore();
  const days = weekRangeFrom(currentDate);

  return (
    <div className="w-full">
      {/* Outer wrapper - responsive scroll behavior */}
      <div
        className="
          overflow-x-auto           /* mobile & tablet scroll */
          lg:overflow-x-hidden      /* desktop no scroll */
          w-full
        "
      >
        <div className="flex">
          {/* TIME COLUMN */}
          <div className="shrink-0 w-16 sm:w-20 lg:w-24 border-r bg-white">
            <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center border-b bg-gray-100">
              <select className="text-xs sm:text-sm bg-transparent rounded px-2 py-1">
                <option>PST</option>
                <option>UTC</option>
              </select>
            </div>

            <div className="flex flex-col pt-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 sm:h-14 lg:h-16 text-[10px] sm:text-xs text-slate-500 flex items-end justify-end pr-2"
                >
                  {`${i + 7}:00`}
                </div>
              ))}
            </div>
          </div>

          {/* DAY COLUMNS WRAPPER */}
          <div
            className="
              grid
              grid-flow-col
              auto-cols-[12rem]
              sm:auto-cols-[16rem]
              lg:w-full
              lg:grid-cols-7
              min-w-max
              lg:min-w-0
            "
          >
            {days.map((d, index) => {
              const isLastTwo = index >= days.length - 2;
              const isToday = currentDate.toDateString() === d.toDateString();

              return (
                <div
                  key={d.toISOString()}
                  className="border-r min-w-0 lg:min-w-0"
                >
                  {/* HEADER */}
                  <div
                    className={cn(
                      "h-12 sm:h-14 lg:h-16 px-2 flex items-center justify-center gap-2 border-b bg-gray-100",
                      isToday && "text-orange-400 border-orange-400"
                    )}
                  >
                    <span
                      className={cn(
                        "font-semibold text-sm",
                        isToday ? "text-orange-400" : "text-gray-800"
                      )}
                    >
                      {format(d, "d")}
                    </span>

                    <span
                      className={cn(
                        "text-xs",
                        isToday ? "text-orange-400" : "text-gray-500"
                      )}
                    >
                      {format(d, "EEE")}
                    </span>
                  </div>

                  {/* DAY COLUMN CONTENT */}
                  <CalendarDayColumn
                    day={d}
                    appointments={appointments}
                    isLastTwo={isLastTwo}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
