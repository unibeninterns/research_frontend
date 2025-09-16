"use client";

import type React from "react";
import { Search, Plus, MoreHorizontal } from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollmentStatus: "Enrolled" | "pending" | "Completed" | "Suspended";
  avgProgress: number;
}

interface StatusBadgeProps {
  status: Student["enrollmentStatus"];
}

interface StudentsTableProps {
  searchTerm?: string;
  selectedCourse?: string;
  onSearchChange?: (term: string) => void;
  onCourseChange?: (course: string) => void;
  onAddStudent?: () => void;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalStudents: number;
  studentsPerPage: number;
}

function StatusBadge({ status }: StatusBadgeProps): React.JSX.Element {
  const statusConfig = {
    Enrolled: "bg-purple-100 text-purple-800",
    pending: "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
    Suspended: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusConfig[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function StudentsTable({
  searchTerm = "",
  selectedCourse = "All Courses",
  onSearchChange,
  onCourseChange,
  onAddStudent,
}: StudentsTableProps = {}): React.JSX.Element {
  const students: Student[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Research Technologies and Innovation",
      enrollmentStatus: "Enrolled",
      avgProgress: 68,
    },
    {
      id: "2",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "UI/UX Design Bootcamp",
      enrollmentStatus: "pending",
      avgProgress: 68,
    },
    {
      id: "3",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Enrolled",
      avgProgress: 68,
    },
    {
      id: "4",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Suspended",
      avgProgress: 68,
    },
    {
      id: "5",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Enrolled",
      avgProgress: 68,
    },
    {
      id: "6",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Enrolled",
      avgProgress: 68,
    },
    {
      id: "7",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Completed",
      avgProgress: 68,
    },
    {
      id: "8",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Enrolled",
      avgProgress: 68,
    },
    {
      id: "9",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Completed",
      avgProgress: 68,
    },
    {
      id: "10",
      name: "John Doe",
      email: "john.doe@email.com",
      course: "Data Analytics for Beginners",
      enrollmentStatus: "Completed",
      avgProgress: 68,
    },
  ];

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onSearchChange?.(event.target.value);
  };

  const handleCourseChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    onCourseChange?.(event.target.value);
  };

  const handleAddStudent = (): void => {
    onAddStudent?.();
  };

  const handleActionClick = (studentId: string): void => {
    console.log(`Action clicked for student: ${studentId}`);
  };

  const paginationInfo: PaginationInfo = {
    currentPage: 1,
    totalPages: 129,
    totalStudents: 1284,
    studentsPerPage: 10,
  };

  return (
    <div className="rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
            Students
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:gap-6">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none sm:w-64"
              />
            </div>

            <select
              value={selectedCourse}
              onChange={handleCourseChange}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none sm:w-auto"
            >
              <option value="All Courses">All Courses</option>
              <option value="Research Technologies">
                Research Technologies
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Data Analytics">Data Analytics</option>
            </select>

            <button
              onClick={handleAddStudent}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-purple-800 bg-white px-4 py-2 text-sm font-medium text-purple-800 transition-colors hover:bg-purple-700 hover:text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none sm:w-auto"
            >
              <Plus className="h-4 w-4" />
              <span className="sm:inline">Add Student</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="bg-background">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:px-4 lg:px-6">
                Name
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:px-4 lg:px-6">
                Email
              </th>
              <th className="hidden px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:px-4 lg:table-cell lg:px-6">
                Course
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:px-4 lg:px-6">
                Status
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:px-4 lg:px-6">
                Progress
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium tracking-wide text-gray-500 uppercase sm:px-4 lg:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {students.map((student: Student) => (
              <tr
                key={student.id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="px-3 py-4 sm:px-4 lg:px-6">
                  <div className="flex items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-medium text-gray-900">
                        {student.name}
                      </div>
                      <div className="truncate text-sm text-gray-500 lg:hidden">
                        {student.course}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-4 lg:px-6">
                  <div className="max-w-[150px] truncate sm:max-w-none">
                    {student.email}
                  </div>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-900 sm:px-4 lg:table-cell lg:px-6">
                  <div className="max-w-[200px] truncate">{student.course}</div>
                </td>
                <td className="px-3 py-4 sm:px-4 lg:px-6">
                  <StatusBadge status={student.enrollmentStatus} />
                </td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-4 lg:px-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{student.avgProgress}%</span>
                    <div className="hidden h-2 w-16 rounded-full bg-gray-200 sm:block">
                      <div
                        className="h-2 rounded-full bg-purple-600 transition-all duration-300"
                        style={{ width: `${student.avgProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 sm:px-4 lg:px-6">
                  <button
                    onClick={() => handleActionClick(student.id)}
                    className="rounded p-1 text-gray-400 transition-colors hover:text-gray-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
                    aria-label={`Actions for ${student.name}`}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 px-3 py-3 sm:px-4 lg:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-700 sm:text-left">
            Showing{" "}
            <span className="font-medium">
              {(paginationInfo.currentPage - 1) *
                paginationInfo.studentsPerPage +
                1}
              -
              {Math.min(
                paginationInfo.currentPage * paginationInfo.studentsPerPage,
                paginationInfo.totalStudents,
              )}
            </span>{" "}
            of{" "}
            <span className="font-medium">
              {paginationInfo.totalStudents.toLocaleString()}
            </span>{" "}
            students
          </p>
          <div className="flex items-center justify-center gap-2">
            <button
              disabled={paginationInfo.currentPage === 1}
              className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-2 text-sm text-gray-500">
              Page {paginationInfo.currentPage} of {paginationInfo.totalPages}
            </span>
            <button
              disabled={
                paginationInfo.currentPage === paginationInfo.totalPages
              }
              className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsTable;
