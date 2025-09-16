"use client";

import type React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Send } from "lucide-react";

interface ExpertInstructor {
  id: string;
  email: string;
  course: string;
  status: "Accepted" | "Pending" | "Rejected" | "Expired";
  sentOn: string;
  acceptedOn: string;
}

const ExpertInstructorsTable: React.FC = (): React.JSX.Element => {
  const instructors: ExpertInstructor[] = [
    {
      id: "1",
      email: "chinelo.okafor@gmail.com",
      course: "Research Tech Data Analytics",
      sentOn: "05/09/2025",
      acceptedOn: "09/09/2025",
      status: "Accepted",
    },
    {
      id: "2",
      email: "james.adeyemi@gmail.com",
      course: "UI/UX Bootcamp",
      sentOn: "05/09/2025",
      acceptedOn: "-",
      status: "Expired",
    },
    {
      id: "3",
      email: "chinelo.okafor@gmail.com",
      course: "Research Tech Data Analytics",
      sentOn: "05/09/2025",
      acceptedOn: "-",
      status: "Pending",
    },
    {
      id: "4",
      email: "chinelo.okafor@gmail.com",
      course: "Research Tech Data Analytics",
      sentOn: "05/09/2025",
      acceptedOn: "-",
      status: "Rejected",
    },
    {
      id: "",
      email: "chinelo.okafor@gmail.com",
      course: "Research Tech Data Analytics",
      sentOn: "05/09/2025",
      acceptedOn: "09/09/2025",
      status: "Accepted",
    },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Accepted":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "Pending":
        return "bg-[#FFF9E5] text-[#F6B600]";
      case "Rejected":
        return "bg-[#EBEBEB] text-[#848484]";
      default:
        return "bg-[#FFDCDD] text-[#FF383C]";
    }
  };

  return (
    <div className="rounded-lg border bg-white pb-6">
      <div className="border-b p-6">
        <div className="flex flex-col gap-4 rounded-lg bg-white p-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Tutor Invitations
          </h2>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-60 md:w-72">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full border border-gray-300 py-1.5 pr-8 pl-3 focus:ring-1 focus:ring-purple-500 focus:outline-none"
              />
              <Search className="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>

            <select className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-gray-700 focus:outline-none sm:w-auto">
              <option>All Courses</option>
            </select>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-md border border-[#800080] px-4 py-1.5 text-[#800080] hover:bg-purple-50 sm:w-auto">
                <Send className="mr-1 hidden h-4 w-4 lg:flex" />
                Invite Tutor
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Sent On
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Accepted On
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {instructors.map((instructor) => (
              <tr key={instructor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getStatusColor(instructor.status)}>
                    {instructor.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.sentOn}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">
                    {instructor.acceptedOn}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpertInstructorsTable;
