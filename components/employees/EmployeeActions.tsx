import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, ListFilter, ChevronDown } from "lucide-react";

export function EmployeesActions() {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Left side */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search here..." className="pl-10" />
        </div>

        <Button variant="outline" className="flex items-center gap-2">
          <ListFilter className="w-5 h-5" />
          Filter
        </Button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Select dates
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
}
