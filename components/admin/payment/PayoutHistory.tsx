import Export2 from "@/components/icons/Export2";
import { Search } from "@/components/icons/Search";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PayoutDetail {
  date: string;
  recipient: string;
  amount: number;
  method: string;
  status: "Successful" | "Pending" | "Failed";
}

const PayoutsHistory = () => {
  const getBadge: (status: PayoutDetail["status"]) => string = (status) => {
    switch (status) {
      case "Successful":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "Failed":
        return "bg-[#FFDCDD] text-[#FF383C]";
      default:
        return "bg-[#FFF9E5] text-[#F6B600]";
    }
  };
  const payoutDetails: PayoutDetail[] = [
    {
      recipient: "Dr. Trisha Okonkwo",
      amount: 90000,
      date: "01/09/2025",
      method: "PayStack",
      status: "Successful",
    },
    {
      recipient: "Dr. Jerry",
      amount: 90000,
      date: "01/09/2025",
      method: "PayStack",
      status: "Pending",
    },
    {
      recipient: "Dr. Trisha Okonkwo",
      amount: 90000,
      date: "01/09/2025",
      method: "Flutterwave",
      status: "Failed",
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
              className="secondary-button flex items-center gap-2 truncate rounded-lg bg-white px-4 py-2 text-[10px] font-medium"
            >
              <Export2 />
              <p>Export Transaction</p>
            </button>
            <select
              defaultValue="research-technologies"
              className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
            >
              <option value="all-courses">All Courses</option>
              <option value="last-month">Last Month</option>
            </select>
            <select
              defaultValue="research-technologies"
              className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
            >
              <option value="all-statuses">All Statuses</option>
              <option value="last-month">Last Month</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-background">
              <tr>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Transaction ID
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Payout Date
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Recipient
                </th>
                <th className="hidden p-3 text-left text-[14px] font-medium text-[#7B7F87] lg:table-cell">
                  Amount
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Payment Method
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Status
                </th>
                <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {payoutDetails.map((detail, index) => (
                <tr key={index} className="transition-colors hover:bg-gray-50">
                  <td className="flex flex-col p-3 text-sm lg:table-cell">
                    {detail.date}
                  </td>
                  <td className="p-3 text-sm">{detail.recipient}</td>
                  <td className="p-3 text-sm">₦ {detail.amount}</td>
                  <td className="p-3 text-sm">{detail.date}</td>
                  <td className="p-3 text-sm">{detail.method}</td>
                  <td className="flex items-center p-3 text-[10px]">
                    <p
                      className={`${getBadge(detail.status)} rounded-[5px] px-2 py-1`}
                    >
                      {detail.status}
                    </p>
                  </td>
                  <td className="px-3 py-4 sm:px-4 lg:px-6">
                    <button
                      //   onClick={() => handleActionClick(student.id)}
                      className="rounded p-1 text-gray-400 transition-colors hover:text-gray-600 focus:ring-2 focus:ring-[#800080] focus:ring-offset-2 focus:outline-none"
                      aria-label={`Actions for ${detail.recipient}`}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row items-center justify-end gap-4 text-[13px]">
          <p className="text-center text-gray-700 sm:text-left">
            Showing 1 - 5 of 40 payments
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

export default PayoutsHistory;
