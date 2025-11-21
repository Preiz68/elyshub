import { EmployeesActions } from "@/components/employees/EmployeeActions";
import { EmployeesTable } from "@/components/employees/EmployeesTable";
import { EmployeesHeader } from "@/components/employees/Header";

export default function EmployeesPage() {
  return (
    <div className="w-full space-y-4">
      <EmployeesHeader />
      <div className="border rounded-lg bg-white overflow-auto lg:overflow-hidden w-full">
        <EmployeesActions />
        <EmployeesTable />
      </div>
    </div>
  );
}
