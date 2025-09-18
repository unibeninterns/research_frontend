import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ModuleData {
  week: string;
  moduleTitle: string;
  completionRate: string;
}

export function WeeklyModuleCompletion() {
  const moduleData: ModuleData[] = [
    {
      week: "Week 1",
      moduleTitle: "Introduction to Research",
      completionRate: "78%",
    },
    {
      week: "Week 2",
      moduleTitle: "Research Design Fundamentals",
      completionRate: "56%",
    },
    {
      week: "Week 3",
      moduleTitle: "Literature Review & Knowledge Management",
      completionRate: "40%",
    },
    {
      week: "Week 4",
      moduleTitle: "AI & Digital Tools for Research",
      completionRate: "0%",
    },
    {
      week: "Week 5",
      moduleTitle: "Data Collection Methods",
      completionRate: "0%",
    },
    {
      week: "Week 6",
      moduleTitle: "Data Cleaning & Preprocessing",
      completionRate: "0%",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(moduleData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  {
    /* Desktop Table */
  }

  return (
    <div className="flex flex-col rounded-[10px] border border-gray-200 bg-white p-4 md:gap-6 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="flex-1 text-[16px] font-semibold">
          Weekly Module Completion
        </h2>
        <div className="flex flex-row gap-8">
          <select
            defaultValue="research-technologies"
            className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="research-technologies">Research Technologies</option>
            <option value="last-month">Last Month</option>
          </select>
          <select
            defaultValue="weekly"
            className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="weekly">Weekly</option>
            <option value="last-month">Last Month</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FBEFFF80] p-[12px]">
              <th className="p-3 text-left text-[14px] font-medium">Week</th>
              <th className="p-3 text-left text-[14px] font-medium">
                Module Title
              </th>
              <th className="p-3 text-left text-[14px] font-medium">
                Avg. Completion Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {moduleData.map((module: ModuleData, index: number) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3 text-sm">{module.week}</td>
                <td className="p-3 text-sm">{module.moduleTitle}</td>
                <td className="p-3 text-sm">{module.completionRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex flex-row items-center justify-end gap-4 text-[13px]">
        <p className="">
          Showing {startIndex + 1} - {Math.min(endIndex, moduleData.length)} of{" "}
          {moduleData.length} courses
        </p>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="text-[#848484] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="text-[#848484] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
