"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Appointment } from "@/store/useStore";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-500 text-blue-800",
  green: "bg-green-50 border-green-500 text-green-800",
  orange: "bg-orange-50 border-orange-500 text-orange-800",
  red: "bg-red-50 border-red-500 text-red-800",
};

const attendeesPics = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
];

export default function AppointmentCard({
  appt,
  styleOverride,
}: {
  appt: Appointment;
  styleOverride?: React.CSSProperties;
}) {
  return (
    <div
      style={styleOverride}
      className={cn(
        "absolute inset-x-0 flex flex-col justify-between gap-1 rounded-sm border-l-4 text-[11px] leading-tight shadow-sm overflow-hidden cursor-pointer",
        colorMap[appt.color]
      )}
    >
      <div className="font-medium text-[10px]">{appt.title}</div>
      <div className="flex items-center font-semibold text-[8px] gap-1">
        <Clock size={8} />
        {format(appt.start, "h:mm")} – {format(appt.end, "h:mm a")}
      </div>

      <div>
        {appt.location && (
          <div className="flex items-start gap-1 text-[10px]">
            <Calendar size={14} />
            <p>{appt.location}</p>
          </div>
        )}

        {/* Attendees row */}
        {appt.attendees && (
          <div className="bg-white rounded-full relative w-fit pr-0.5 h-4 flex items-center justify-start">
            {attendeesPics.map((pic) => (
              <Image
                width={20}
                height={20}
                className="size-3 rounded-full"
                key={pic}
                src={pic}
                alt={pic}
              />
            ))}
            <span
              className={`rounded-full size-3 flex justify-center items-center p-2 ${
                colorMap[appt.color]
              }`}
            >
              +2
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
