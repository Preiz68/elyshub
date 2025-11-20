import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export function EmployeesTableHeader() {
  return (
    <TableHeader className="bg-gray-50 text-gray-700">
      <TableRow>
        <TableHead>
          <Checkbox className="border-gray-300 border size-4 rounded-xs" />
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>ID</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Report to</TableHead>
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
  );
}
