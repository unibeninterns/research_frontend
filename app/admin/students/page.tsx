import type React from "react"
import { StudentStats } from "@/components/admin/student-components/student-stats"
import { StudentsTable } from "@/components/admin/student-components/students-table"
import { RecentActivities } from "@/components/admin/student-components/recent-activities"
import { StudentQuickActions } from "@/components/admin/student-components/student-quick-actions"

interface StudentsPageProps {
  searchParams?: {
    search?: string
    course?: string
    page?: string
  }
}

export default function StudentsPage({ searchParams }: StudentsPageProps = {}): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="mx-auto w-full space-y-4 sm:space-y-6 lg:space-y-8">
        <StudentStats />
        <StudentsTable searchTerm={searchParams?.search} selectedCourse={searchParams?.course} />

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <RecentActivities />
          <StudentQuickActions />
        </div>
      </div>
    </div>
  )
}
