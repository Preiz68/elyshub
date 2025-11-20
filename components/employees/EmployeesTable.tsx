import { Table, TableBody } from "@/components/ui/table";

import { EmployeesTableHeader } from "./EmployeesTableHeader";
import { EmployeesTableRow } from "./EmployeesTableRow";
import { Pagination } from "./Pagination";
import { employeesList } from "@/lib/employeeData";

export function EmployeesTable() {
  const data = employeesList;

  return (
    <>
      <Table>
        <EmployeesTableHeader />
        <TableBody className="p-4">
          {data.map((employee) => (
            <EmployeesTableRow key={employee.email} employee={employee} />
          ))}
        </TableBody>
      </Table>

      <Pagination />
    </>
  );
}
