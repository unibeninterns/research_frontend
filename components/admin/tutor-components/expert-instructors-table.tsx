"use client"

import type React from "react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Send } from "lucide-react"


interface ExpertInstructor {
  id: string
  email: string
  course: string
  status: "Accepted" | "Pending" | "Rejected" | "Expired"
  sentOn: string
  acceptedOn: string
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
  ]

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Accepted":
        return "bg-[#DEFFD8] text-[#1DAE00]"
      case "Pending":
        return "bg-[#FFF9E5] text-[#F6B600]"
      case "Rejected":
        return "bg-[#EBEBEB] text-[#848484]"
      default:
        return "bg-[#FFDCDD] text-[#FF383C]"
    }
  }

  return (
    <div className="bg-white rounded-lg border pb-6">
      <div className="p-6 border-b">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-2 rounded-lg ">
      <h2 className="text-lg font-semibold text-gray-900">Tutor Invitations</h2>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sent On</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accepted On</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {instructors.map((instructor) => (
              <tr key={instructor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className={getStatusColor(instructor.status)}>{instructor.status}</Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.sentOn}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-black">{instructor.acceptedOn}</div>
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

export default ExpertInstructorsTable
