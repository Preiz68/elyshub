import CalendarHeader from "@/components/appointments/CalenderHeader";
import CalendarGrid from "@/components/appointments/CalenderGrid";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Appointments() {
  return (
    <div className="md:p-4 p-1">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-4">
          <h1 className="text-2xl font-semibold">Appointments</h1>
          <Button variant="destructive">
            <CirclePlus />
            <span>New Appointment</span>
          </Button>
        </div>

        <div className="bg-white overflow-hidden border rounded-lg shadow-sm">
          <CalendarHeader />
          <CalendarGrid />
        </div>
      </div>
    </div>
  );
}
