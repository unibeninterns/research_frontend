"use client"

import type React from "react"
import { Users, UserCheck, FileText, TrendingUp, Target } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  color: string
  trend?: {
    value: number
    isPositive: boolean
  }
}

function StatCard({ title, value, icon, color, trend }: StatCardProps): React.JSX.Element {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer lg:p-6">
      <div className="flex items-center gap-3">
        <div className={`rounded-full p-2 lg:p-3 ${color} flex-shrink-0`}>{icon}</div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-600 truncate lg:text-base">{title}</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-gray-900 lg:text-2xl">{value}</p>
            {trend && (
              <span className={`text-xs font-medium ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function StudentStats(): React.JSX.Element {
  const handleStatClick = (statType: string): void => {
    console.log(`[v0] Stat clicked: ${statType}`)
  }

  const stats: (StatCardProps & { type: string })[] = [
    {
      type: "total-students",
      title: "Total Students",
      value: "1,284",
      icon: <Users className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
      color: "bg-background",
      trend: { value: 12, isPositive: true },
    },
    {
      type: "active-students",
      title: "Active Students",
      value: "963",
      icon: <UserCheck className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
      color: "bg-background",
      trend: { value: 8, isPositive: true },
    },
    {
      type: "certificate-requests",
      title: "Certificate Requests",
      value: "5",
      icon: <FileText className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
      color: "bg-background",
    },
    {
      type: "course-completion",
      title: "Course Completion",
      value: "48%",
      icon: <TrendingUp className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
      color: "bg-background",
      trend: { value: 5, isPositive: true },
    },
    {
      type: "score",
      title: "Score",
      value: "100",
      icon: <Target className="h-5 w-5 text-purple-900 lg:h-6 lg:w-6" />,
      color: "bg-background",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4 lg:gap-6">
      {stats.map((stat) => (
        <div key={stat.type} onClick={() => handleStatClick(stat.type)}>
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  )
}
