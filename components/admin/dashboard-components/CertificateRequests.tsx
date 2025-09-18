import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const requests = [
  {
    name: "Ese Jerry",
    course: "Research Technologies and Innovation",
    requestDate: "05/09/2025",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    name: "Grace Bura",
    course: "Research Technologies and Innovation",
    requestDate: "02/09/2025",
    status: "Pending",
    statusColor: "bg-[#FFF9E5] text-[#F6B600]",
  },
  {
    name: "Amaka Okechukwu",
    course: "Research Technologies and Innovation",
    requestDate: "15/09/2025",
    status: "Rejected",
    statusColor: "bg-[#FFDCDD] text-[#FF383C]",
  },
  {
    name: "Ese Jerry",
    course: "Research Technologies and Innovation",
    requestDate: "05/09/2025",
    status: "Completed",
    statusColor: "bg-[#DEFFD8] text-[#1DAE00]",
  },
];

function CertificateRequests() {
  return (
    <div className="mt-8 flex flex-col gap-2 rounded-[10px] border-[0.5px] border-[#D9D9D9] bg-white p-1 md:gap-6 md:p-6">
      <div className="flex flex-row gap-2 text-[16px] sm:items-center sm:justify-between">
        <div className="font-semibold text-gray-900">Certificate Requests</div>
        <Button
          variant="link"
          className="self-start p-0 text-[#800080] sm:self-auto"
        >
          View All
        </Button>
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-[#FBEFFF80] p-[12px]">
              <th className="p-3 text-left text-[14px] font-medium">Name</th>
              <th className="p-3 text-left text-[14px] font-medium">Course</th>
              <th className="p-3 text-left text-[14px] font-medium">Date</th>
              <th className="p-3 text-left text-[14px] font-medium">Status</th>
              <th className="p-3 text-left text-[14px] font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="border-gray-150 border-b">
                <td className="p-3 text-[14px]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBEFFF80] text-xs font-bold text-[#800080]">
                      {request.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="text-sm">{request.name}</div>
                  </div>
                </td>
                <td className="p-3 text-sm">{request.course}</td>
                <td className="p-3 text-sm">{request.requestDate}</td>
                <td className="flex px-2 py-3 sm:px-4 sm:py-4">
                  <p
                    className={`rounded-[5px] px-2 py-1 text-[10px] ${request.statusColor}`}
                  >
                    {request.status}
                  </p>
                </td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 sm:h-8 sm:w-8"
                  >
                    <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CertificateRequests;
