import { Button } from "@/components/ui/button";
import { CirclePlus, Download } from "lucide-react";

export function EmployeesHeader() {
  return (
    <div className="my-4 flex justify-between items-center">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl font-semibold">Employees</h1>
        <p className="text-sm text-muted-foreground">
          Showing data over the last 30 days
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline">
          <Download />
          <span>Export CSV</span>
        </Button>
        <Button variant="destructive">
          <CirclePlus />
          <span> Add Employee</span>
        </Button>
      </div>
    </div>
  );
}
