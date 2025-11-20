"use client";

import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";

const Pages: string[] = ["1", "2", "3", "...", "10", "11", "12"];

export function Pagination() {
  const [currentPage, setCurrentPage] = useState("3");

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 text-sm text-gray-500 font-semibold gap-2 sm:gap-0">
      {/* Page info */}
      <div>Page {currentPage} of 30</div>

      {/* Page numbers */}
      <div className="flex gap-1">
        {Pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`${
              page === currentPage
                ? "text-orange-500 bg-orange-50"
                : "text-gray-400 hover:bg-gray-100"
            } w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-2">
        <Button
          onClick={() =>
            setCurrentPage((prev) => `${Math.max(Number(prev) - 1, 1)}`)
          }
          className="flex items-center gap-2 text-gray-700 font-semibold"
          variant="outline"
          size="sm"
        >
          <MoveLeft size={16} />
          Previous
        </Button>

        <Button
          onClick={() =>
            setCurrentPage((prev) => `${Math.min(Number(prev) + 1, 30)}`)
          }
          className="flex items-center gap-2 text-gray-700 font-semibold"
          variant="outline"
          size="sm"
        >
          Next
          <MoveRight size={16} />
        </Button>
      </div>
    </div>
  );
}
