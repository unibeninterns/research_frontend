import Export2 from "@/components/icons/Export2";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const ExpensesTable = () => {
  const tableInfo = [
    {
      date: "01/09/25",
      type: "hosting",
      description: "AWS monthly hosting",
      amount: "Completed",
    },
    {
      date: "01/09/25",
      type: "hosting",
      description: "AWS monthly hosting",
      amount: "Completed",
    },
    {
      date: "01/09/25",
      type: "hosting",
      description: "AWS monthly hosting",
      amount: "Completed",
    },
    {
      date: "01/09/25",
      type: "hosting",
      description: "AWS monthly hosting",
      amount: "Completed",
    },
    {
      date: "01/09/25",
      type: "hosting",
      description: "AWS monthly hosting",
      amount: "Completed",
    },
    {
      date: "01/09/25",
      type: "hosting",
      description: "AWS monthly hosting",
      amount: "Completed",
    },
  ];
  return (
    <div>
      <div className="mt-5 flex flex-col rounded-[10px] border border-gray-200 bg-white p-4 md:gap-6 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="flex-1 text-base font-semibold">Expenses Breakdown</h2>

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
                  Date
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Expense Type
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Description
                </th>
                <th className="hidden p-3 text-left text-[14px] font-medium text-[#7B7F87] lg:table-cell">
                  {"Amount (₦)"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {tableInfo.map((info, index) => (
                <tr key={index} className="transition-colors hover:bg-gray-50">
                  <td className="p-3 text-sm">{info.date}</td>
                  <td className="p-3 text-sm">{info.type}</td>
                  <td className="p-3 text-sm">{info.description}</td>
                  <td className="p-3 text-sm">{info.amount}</td></tr>
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
export default ExpensesTable;
