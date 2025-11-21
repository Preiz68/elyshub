"use client";

import { cn } from "@/lib/utils";
import AppointmentCard from "./AppointmentCard";
import { Appointment } from "@/store/useStore";

export default function CalenderDayColumn({
  day,
  appointments,
  isLastTwo,
}: {
  day: Date;
  appointments: Appointment[];
  isLastTwo: boolean;
}) {
  // Events for this day
  const todaysEvents = appointments.filter(
    (a) => new Date(a.start).toDateString() === day.toDateString()
  );

  // Responsive hour height
  const HOUR_HEIGHT = {
    mobile: 56, // 3.5rem
    desktop: 64, // 4rem
  };

  const getDurationHeight = (start: Date, end: Date) => {
    const diffMs = end.getTime() - start.getTime();
    const diffMin = diffMs / 60000;
    return (diffMin / 60) * HOUR_HEIGHT.desktop;
  };

  return (
    <div
      className="
        relative
        h-[calc(12*3.5rem)]   /* mobile/tablet */
        lg:h-[calc(12*4rem)]  /* desktop */
        w-full
      "
    >
      {/* Hour Grid: 12 hours (7AM→7PM) */}
      <div className="absolute inset-0 w-full">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              `
              h-14 lg:h-16
              border-b border-r border-gray-300
            `,
              isLastTwo && "bg-gray-100"
            )}
          />
        ))}
      </div>

      {/* Events */}
      {todaysEvents.map((appt) => {
        const start = new Date(appt.start);
        const end = new Date(appt.end);

        const startHour = start.getHours() + start.getMinutes() / 60;
        const topOffset = (startHour - 7) * HOUR_HEIGHT.desktop;

        return (
          <AppointmentCard
            key={appt.id}
            appt={appt}
            styleOverride={{
              top: topOffset,
              height: getDurationHeight(start, end),
            }}
          />
        );
      })}
    </div>
  );
}
