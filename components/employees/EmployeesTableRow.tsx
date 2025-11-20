import { TableCell, TableRow } from "@/components/ui/table";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import { Employee } from "@/lib/employeeData";
import { Checkbox } from "@radix-ui/react-checkbox";

export function EmployeesTableRow({ employee }: { employee: Employee }) {
  return (
    <TableRow>
      <TableCell>
        <Checkbox className="border-gray-300 border size-4 rounded-xs" />
      </TableCell>

      <TableCell className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={employee.avatar} />
        </Avatar>
        {employee.name}
      </TableCell>

      <TableCell>{employee.id}</TableCell>
      <TableCell>{employee.email}</TableCell>

      <TableCell>
        <Badge className="bg-[#FFECE5] text-[#AD3307]">Label</Badge>
      </TableCell>

      <TableCell>{employee.reportTo}</TableCell>

      <TableCell className="size-6">
        <MoreVertical className="p-2 rounded-xs border-gray-200 border" />
      </TableCell>
    </TableRow>
  );
}
