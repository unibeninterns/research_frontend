"use client";
import type React from "react";
import { CoursesTable } from "@/components/admin/course-components/CoursesTable";
import { WeeklyModuleCompletion } from "@/components/admin/course-components/WeeklyModuleCompletion";
import { CourseQuickActions } from "@/components/admin/course-components/CourseQuickActions";
import { ChartNoAxesCombined, Clock, LibraryBig } from "lucide-react";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";

export default function CoursesPage() {
  const cardInfo = [
    {
      param: "Total Courses",
      value: 10,
      icon: <LibraryBig />,
    },
    {
      param: "Average Course Duration",
      value: "12 Weeks",
      icon: <Clock />,
    },
    {
      param: "Revenue from Courses",
      value: "₦1,240,000",
      icon: <ChartNoAxesCombined />,
    },
  ];

  return (
    <div className="mt-5">
      <div className="mx-auto w-full space-y-6">
        <AdminInfoComponent cardInfo={cardInfo} />
      </div>
      <div>
        <CoursesTable />
      </div>
      <div className="mt-5 flex gap-3">
        <div className="flex-1">
          <WeeklyModuleCompletion />
        </div>
        <div>
          <CourseQuickActions />
        </div>
      </div>
    </div>
  );
}
