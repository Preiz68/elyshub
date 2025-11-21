// Use a minimal inline SVG for the plus-in-circle icon to avoid
// a prerender/build-time import issue with the external icon package.
function IconCirclePlus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}
import { Button } from "@/components/ui/button";
import CalenderHeader from "@/components/appointments/CalenderHeader";
import CalenderGrid from "@/components/appointments/CalenderGrid";

export default function Appointments() {
  return (
    <div className="md:p-4 p-1">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mb-4">
          <h1 className="text-2xl font-semibold">Appointments</h1>
          <Button variant="destructive">
            <IconCirclePlus />
            <span>New Appointment</span>
          </Button>
        </div>

        <div className="bg-white overflow-hidden border rounded-lg shadow-sm">
          <CalenderHeader />
          <CalenderGrid />
        </div>
      </div>
    </div>
  );
}
