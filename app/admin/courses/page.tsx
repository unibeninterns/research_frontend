"use client"

import type React from "react"
import { CourseStats } from "@/components/admin/course-components/course-stats"
import { CoursesTable } from "@/components/admin/course-components/courses-table"
import { WeeklyModuleCompletion } from "@/components/admin/course-components/weekly-module-completion"
import { CourseQuickActions } from "@/components/admin/course-components/course-quick-actions"

export default function CoursesPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 p-4 ">
      <div className="mx-auto w-full space-y-6">
        <CourseStats />
        <CoursesTable />

        <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
            <WeeklyModuleCompletion />
          </div>
          <div className="lg:col-span-2">
            <CourseQuickActions />
          </div>
        </div>
      </div>
    </div>
  )
}
