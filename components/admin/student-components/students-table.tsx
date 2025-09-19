"use client";

import type React from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  enrollmentStatus:
    | "Enrolled"
    | "pending"
    | "Completed"
    | "Suspended"
    | "Registered";
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
    Enrolled: "bg-[#FBEFFF] text-primary",
    pending: "bg-[#FFF9E5] text-[#F6B600]",
    Completed: "bg-[#DEFFD8] text-[#1DAE00]",
    Suspended: "bg-[#FFDCDD] text-[#FF383C]",
    Registered: "bg-[#5E00B133] text-[#5E00B1]",
  };

  return (
    <p className={`rounded-full px-2 py-1 text-xs ${statusConfig[status]}`}>
      {status}
    </p>
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
      enrollmentStatus: "Registered",
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
    <div className="mt-5 flex flex-col rounded-[10px] border border-gray-200 bg-white p-4 md:gap-6 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="flex-1 text-base font-semibold">Students</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:gap-6">
          <div className="flex rounded-[50px] border-[0.5px] p-1 text-[14px] md:flex-1 md:px-4 md:py-2">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 text-sm outline-none"
            />
            <Search className="h-4 w-4" />
          </div>

          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="All Courses">All Courses</option>
            <option value="Research Technologies">Research Technologies</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <button
            onClick={handleAddStudent}
            className="flex items-center gap-2 rounded-lg border border-[#800080] bg-white px-4 py-2 text-[10px] font-medium text-[#800080] transition-colors hover:bg-[#800080] hover:text-white focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <Plus className="h-4 w-4" />
            <p>Add Student</p>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="bg-background">
            <tr>
              <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                Name
              </th>
              <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                Email
              </th>
              <th className="hidden p-3 text-left text-[14px] font-medium text-[#7B7F87] lg:table-cell">
                Course
              </th>
              <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                Status
              </th>
              <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
                Progress
              </th>
              <th className="p-3 text-left text-[14px] font-medium text-[#7B7F87]">
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
                <td className="flex flex-col p-3 text-sm lg:table-cell">
                  <div className="truncate text-gray-900">{student.name}</div>
                  <div className="truncate text-sm text-gray-500 lg:hidden">
                    {student.course}
                  </div>
                </td>
                <td className="p-3 text-sm">{student.email}</td>
                <td className="p-3 text-sm">{student.course}</td>
                <td className="flex items-center p-3 text-xs">
                  <StatusBadge status={student.enrollmentStatus} />
                </td>
                <td className="p-3 text-sm">{student.avgProgress}%</td>
                <td className="px-3 py-4 sm:px-4 lg:px-6">
                  <button
                    onClick={() => handleActionClick(student.id)}
                    className="rounded p-1 text-gray-400 transition-colors hover:text-gray-600 focus:ring-2 focus:ring-[#800080] focus:ring-offset-2 focus:outline-none"
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
      <div className="flex flex-row items-center justify-end gap-4 text-[13px]">
        <p className="text-center text-gray-700 sm:text-left">
          Showing{" "}
          <span className="font-medium">
            {(paginationInfo.currentPage - 1) * paginationInfo.studentsPerPage +
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
            className="text-[#848484] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <span className="px-2 text-gray-500">
            Page {paginationInfo.currentPage} of {paginationInfo.totalPages}
          </span>
          <button
            disabled={paginationInfo.currentPage === paginationInfo.totalPages}
            className="text-[#848484] hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentsTable;
