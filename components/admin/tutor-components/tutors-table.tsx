"use client"

import type React from "react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Send } from "lucide-react"


interface Tutor {
  id: string
  name: string
  email: string
  course: string
  status: "Active" | "Completed" | "Pending"
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
  ]

  return (
    <div className="bg-white rounded-lg pb-6 border">
      <div className="p-2 border-b">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-2 rounded-lg ">
    <h2 className="font-semibold text-gray-800">Tutors</h2>

    <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto">
      <div className="relative w-full sm:w-60 md:w-72">
        <input
          type="text"
          placeholder="Search"
          className="pl-3 pr-8 w-full py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>

      <select className="border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 focus:outline-none w-full sm:w-auto">
        <option>All Courses</option>
      </select>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button className="flex items-center justify-center bg-[#800080] text-white px-4 py-1.5 rounded-md hover:bg-purple-800 w-full sm:w-auto">
          <span className="mr-1">+</span> Add Tutor
        </button>
        <button className="flex items-center justify-center border border-[#800080] text-[#800080] px-4 py-1.5 rounded-md hover:bg-purple-50 w-full sm:w-auto">
          <Send className="hidden lg:flex w-4 h-4 mr-1" />
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tutors.map((tutor) => (
              <tr key={tutor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{tutor.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{tutor.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{tutor.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={tutor.status === "Completed" ? "default" : "secondary"}
                    className={tutor.status === "Completed" ? "bg-[#DEFFD8] text-[#1DAE00]" : tutor.status === "Pending" ? "bg-[#FFF9E5] text-[#F6B600]" : "bg-[#FBEFFF] text-[#800080]"}
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
  )
}

export default TutorsTable
