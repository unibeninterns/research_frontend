"use client";

import type React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TutorHeader: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">Tutors</h1>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full pl-10 sm:w-64"
          />
        </div>
        <Button className="bg-purple-600 text-white hover:bg-purple-700">
          Add Tutor
        </Button>
      </div>
    </div>
  );
};

export default TutorHeader;
