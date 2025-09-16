"use client";

import type React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface AssistantTutor {
  id: string;
  name: string;
  email: string;
  course: string;
  archivedOn: string;
}

const AssistantTutorsTable: React.FC = (): React.JSX.Element => {
  const assistants: AssistantTutor[] = [
    {
      id: "1",
      name: "Blessing Uche",
      email: "blessing.uche@gmail.com",
      course: "Data Analytics",
      archivedOn: "05/09/2025",
    },
    {
      id: "2",
      name: "Mercy Chukwu",
      email: "mercy.chukwu@gmail.com",
      course: "UI/UX Bootcamp",
      archivedOn: "05/09/2025",
    },
    {
      id: "3",
      name: "Blessing Uche",
      email: "blessing.uche@gmail.com",
      course: "Data Analytics",
      archivedOn: "05/09/2025",
    },
  ];

  // const getStatusColor = (status: string): string => {
  //   switch (status) {
  //     case "CONFIRMED":
  //       return "bg-green-100 text-green-800"
  //     case "PENDING":
  //       return "bg-yellow-100 text-yellow-800"
  //     case "REJECTED":
  //       return "bg-red-100 text-red-800"
  //     default:
  //       return "bg-gray-100 text-gray-800"
  //   }
  // }

  return (
    <div className="rounded-lg border bg-white pb-6">
      <div className="border-b p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Archived Tutors
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
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Archived On
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {assistants.map((assistant) => (
              <tr key={assistant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{assistant.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{assistant.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{assistant.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">
                    {assistant.archivedOn}
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

export default AssistantTutorsTable;
