import { Button } from "@/components/ui/button";
import { CirclePlus, Download } from "lucide-react";

export function EmployeesHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left Side */}
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl font-semibold">Employees</h1>
        <p className="text-sm text-muted-foreground">
          Showing data over the last 30 days
        </p>
      </div>

      {/* Right Side (Buttons) */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>

        <Button variant="destructive" className="w-full sm:w-auto">
          <CirclePlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
    </div>
  );
}
