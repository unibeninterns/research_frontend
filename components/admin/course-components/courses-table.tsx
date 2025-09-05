"use client"

import type React from "react"
import { useState } from "react"
import { Search, Plus, MoreHorizontal, Users } from "lucide-react"

interface Course {
  id: string
  name: string
  duration: string
  assignedTutors: string[]
  tutorCount: number
  completionRate: number
}

type CoursesTableProps = {}

const CoursesTable: React.FC<CoursesTableProps> = (): React.JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage: number = 5

  const courses: Course[] = [
    {
      id: "1",
      name: "Research Technologies and Innovation",
      duration: "5 Weeks",
      assignedTutors: ["Dr. Adebayo", "Mr. Thompson"],
      tutorCount: 17,
      completionRate: 68,
    },
    {
      id: "2",
      name: "UI/UX Design Bootcamp",
      duration: "8 Weeks",
      assignedTutors: ["Dr. Adebayo", "Mr. Thompson"],
      tutorCount: 17,
      completionRate: 32,
    },
    {
      id: "3",
      name: "Data Analytics for Beginners",
      duration: "6 Weeks",
      assignedTutors: ["Dr. Adebayo", "Mr. Thompson"],
      tutorCount: 17,
      completionRate: 52,
    },
    {
      id: "4",
      name: "UI/UX Design Bootcamp",
      duration: "8 Weeks",
      assignedTutors: ["Dr. Adebayo", "Mr. Thompson"],
      tutorCount: 17,
      completionRate: 32,
    },
    {
      id: "5",
      name: "UI/UX Design Bootcamp",
      duration: "8 Weeks",
      assignedTutors: ["Dr. Adebayo", "Mr. Thompson"],
      tutorCount: 17,
      completionRate: 32,
    },
  ]

  const filteredCourses: Course[] = courses.filter((course: Course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages: number = Math.ceil(filteredCourses.length / itemsPerPage)
  const startIndex: number = (currentPage - 1) * itemsPerPage
  const endIndex: number = startIndex + itemsPerPage
  const currentCourses: Course[] = filteredCourses.slice(startIndex, endIndex)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleAddCourse = (): void => {
    console.log("Add course clicked")
  }

  const handleActionClick = (courseId: string, action: string): void => {
    console.log(`${action} clicked for course ${courseId}`)
  }

  const getCompletionColor = (rate: number): string => {
    if (rate >= 60) return "bg-green-500"
    if (rate >= 40) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-gray-900 md:text-xl">Courses</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 sm:w-64"
            />
          </div>

          <button
            onClick={handleAddCourse}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium border text-purple-800 transition-colors hover:text-white border-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          >
            <Plus className="h-4 w-4" />
            Add Course
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-lg border border-gray-200 md:block">
        <table className="w-full">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Assigned Tutors
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Completion Rate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentCourses.map((course: Course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{course.name}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{course.duration}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {course.assignedTutors.join(", ")} + {course.tutorCount - course.assignedTutors.length} more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 rounded-full bg-gray-200">
                      <div
                        className={`h-2 rounded-full ${getCompletionColor(course.completionRate)}`}
                        style={{ width: `${course.completionRate}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{course.completionRate}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleActionClick(course.id, "menu")}
                    className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {currentCourses.map((course: Course) => (
          <div key={course.id} className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="font-medium text-gray-900">{course.name}</h3>
              <button
                onClick={() => handleActionClick(course.id, "menu")}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div>Duration: {course.duration}</div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>
                  {course.assignedTutors.join(", ")} + {course.tutorCount - course.assignedTutors.length} more
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Completion:</span>
                <div className="h-2 w-20 rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full ${getCompletionColor(course.completionRate)}`}
                    style={{ width: `${course.completionRate}%` }}
                  />
                </div>
                <span className="font-medium text-gray-900">{course.completionRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredCourses.length)} of {filteredCourses.length} courses
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="rounded-lg border border-gray-200 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <span className="text-sm text-gray-600">
            {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-gray-200 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export { CoursesTable }
