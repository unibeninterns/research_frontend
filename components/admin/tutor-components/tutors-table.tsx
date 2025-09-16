"use client";

import type React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Send } from "lucide-react";

interface Tutor {
  id: string;
  name: string;
  email: string;
  course: string;
  status: "Active" | "Completed" | "Pending";
}

const TutorsTable: React.FC = (): React.JSX.Element => {
  const tutors: Tutor[] = [
    {
      id: "1",
      name: "Chinelo Okafor",
      email: "chinelo.okafor@gmail.com",
      course: "Research Tech, Data Analytics",
      status: "Active",
    },
    {
      id: "2",
      name: "Chidi Okoro",
      email: "chidi.okoro@gmail.com",
      course: "UI/UX Bootcamp",
      status: "Pending",
    },
    {
      id: "3",
      name: "Chinelo Okafor",
      email: "chinelo.okafor@gmail.com",
      course: "Cybersecurity, Cloud Systems",
      status: "Active",
    },
    {
      id: "4",
      name: "Chinelo Okafor",
      email: "chinelo.okafor@gmail.com",
      course: "Research Tech, Data Analytics",
      status: "Completed",
    },
    {
      id: "5",
      name: "Chinelo Okafor",
      email: "chinelo.okafor@gmail.com",
      course: "Cybersecurity, Cloud Systems",
      status: "Active",
    },
  ];

  return (
    <div className="rounded-lg border bg-white pb-6">
      <div className="border-b p-2">
        <div className="flex flex-col gap-4 rounded-lg bg-white p-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-semibold text-gray-800">Tutors</h2>

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
              <button className="flex w-full items-center justify-center rounded-md bg-[#800080] px-4 py-1.5 text-white hover:bg-purple-800 sm:w-auto">
                <span className="mr-1">+</span> Add Tutor
              </button>
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
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {tutors.map((tutor) => (
              <tr key={tutor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {tutor.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{tutor.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{tutor.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={
                      tutor.status === "Completed" ? "default" : "secondary"
                    }
                    className={
                      tutor.status === "Completed"
                        ? "bg-[#DEFFD8] text-[#1DAE00]"
                        : tutor.status === "Pending"
                          ? "bg-[#FFF9E5] text-[#F6B600]"
                          : "bg-[#FBEFFF] text-[#800080]"
                    }
                  >
                    {tutor.status}
                  </Badge>
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

export default TutorsTable;
