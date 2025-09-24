import Export2 from "@/components/icons/Export2";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface StudentDetail {
  name: string;
  course: string;
  progress: number;
  status: "Completed" | "In Progress" | "Not Started";
}

const getBadge: (status: StudentDetail["status"]) => string = (status) => {
  switch (status) {
    case "Completed":
      return "bg-[#DEFFD8] text-[#1DAE00]";
    case "Not Started":
      return "bg-[#EBEBEB] text-[#848484]";
    default:
      return "bg-[#FFF9E5] text-[#F6B600]";
  }
};

const StudentTable = () => {
  const tableInfo: StudentDetail[] = [
    {
      name: "Joy Osagie",
      course: "Research Technologies and Innovation",
      progress: 100,
      status: "Completed",
    },
    {
      name: "Faith Omonigho",
      course: "Data Analysis",
      progress: 75,
      status: "In Progress",
    },
    {
      name: "Joy Osagie",
      course: "UI/UX Design",
      progress: 0,
      status: "Not Started",
    },
    {
      name: "Joy Osagie",
      course: "Research Technologies and Innovation",
      progress: 100,
      status: "Completed",
    },
    {
      name: "Joy Osagie",
      course: "Research Technologies and Innovation",
      progress: 0,
      status: "Not Started",
    },
  ];
  return (
    <div>
      <div className="mt-5 flex flex-col rounded-[10px] border border-gray-200 bg-white p-4 md:gap-6 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="flex-1 text-base font-semibold">Students</h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:gap-6">
            <div className="flex rounded-[50px] border-[0.5px] p-1 text-[14px] md:flex-1 md:px-4 md:py-2">
              <input
                type="text"
                placeholder="Search courses..."
                //   value={searchTerm}
                //   onChange={handleSearchChange}
                className="flex-1 text-sm outline-none"
              />
              <Search className="h-4 w-4" />
            </div>

            <button
              //   onClick={handleAddStudent}
              className="secondary-button flex items-center gap-2 truncate rounded-lg border border-[#800080] bg-white px-4 py-2 text-[10px] font-medium"
            >
              <Export2 />
              <p>Export Transaction</p>
            </button>
            <select
              defaultValue="research-technologies"
              className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
            >
              <option value="all-statuses">All Statuses</option>
              <option value="last-month">Last Month</option>
            </select>
            <select
              defaultValue="research-technologies"
              className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
            >
              <option value="all-dates">All Dates</option>
              <option value="last-month">Last Month</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-background">
              <tr>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Student Name
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Course
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Progress
                </th>
                <th className="hidden p-3 text-left text-[14px] font-medium text-[#7B7F87] lg:table-cell">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {tableInfo.map((info, index) => (
                <tr key={index} className="transition-colors hover:bg-gray-50">
                  <td className="p-3 text-sm">{info.name}</td>
                  <td className="p-3 text-sm">{info.course}</td>
                  <td className="p-3 text-sm">{info.progress}</td>
                  <td className="flex items-center p-3 text-xs">
                    <p
                      className={`${getBadge(info.status)} rounded-[5px] px-2 py-1 text-[10px]`}
                    >
                      {info.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row items-center justify-end gap-4 text-[13px]">
          <p className="text-center text-gray-700 sm:text-left">
            Showing 1 - 5 of 12 payments
          </p>
          <div className="flex items-center justify-center gap-2">
            <button className="text-[#848484] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
              <ChevronLeft />
            </button>
            <button className="text-[#848484] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
