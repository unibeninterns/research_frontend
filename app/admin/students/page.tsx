"use client";
import type React from "react";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import StudentsTable from "@/components/admin/student-components/students-table";
import { RecentActivities } from "@/components/admin/student-components/recent-activities";
import { StudentQuickActions } from "@/components/admin/student-components/student-quick-actions";
import { useState } from "react";
import { Users, UserCheck, FileText, TrendingUp, Target } from "lucide-react";

export default function StudentsPage() {
  const [search] = useState("");
  const [course] = useState("");
  const cardInfo = [
    {
      param: "Total Students",
      value: "1,284",
      icon: <Users className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
    },
    {
      param: "Active Students",
      value: "963",
      icon: <UserCheck className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
    },
    {
      param: "Certificate Requests",
      value: "5",
      icon: <FileText className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
    },
    {
      param: "Course Completion",
      value: "48%",
      icon: <TrendingUp className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
    },
    {
      param: "Score",
      value: "100",
      icon: <Target className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
    },
  ];
  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6 lg:p-8">
      <AdminInfoComponent cardInfo={cardInfo} />
      <div className="mt-5 flex flex-col items-start justify-between py-2 md:flex-row">
        <StudentsTable searchTerm={search} selectedCourse={course} />
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
        <RecentActivities />
        <StudentQuickActions />
      </div>
    </div>
  );
}
