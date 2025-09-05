"use client"

import type React from "react"
import { BookOpen, Clock, DollarSign } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  textColor: string
}

interface CourseStatsData {
  totalCourses: number
  averageDuration: string
  completionRate: string
  revenue: string
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, textColor }): React.JSX.Element => {
  const handleClick = (): void => {
    console.log(`Clicked on ${title} stat`)
  }

  return (
    <div
      className="cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md md:p-6"
      onClick={handleClick}
    >
      <div className="flex items-center w-auto justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 md:text-base">{title}</p>
          <p className="text-xl font-bold text-gray-900 md:text-xl lg:text-2xl">{value}</p>
        </div>
        <div className={`rounded-full p-2 bg-background md:p-3`}>
          <div className={textColor}>{icon}</div>
        </div>
      </div>
    </div>
  )
}

const CourseStats: React.FC = (): React.JSX.Element => {
  const statsData: CourseStatsData = {
    totalCourses: 10,
    averageDuration: "12 Weeks",
    completionRate: "48%",
    revenue: "₦1,240,000",
  }

  const stats: StatCardProps[] = [
    {
      title: "Total Courses",
      value: statsData.totalCourses,
      icon: <BookOpen className="h-5 text-purple-900 w-5 md:h-6 md:w-6" />,
      textColor: "text-purple-600",
    },
    {
      title: "Average Course Duration",
      value: statsData.averageDuration,
      icon: <Clock className="h-5 text-purple-900 w-5 md:h-6 md:w-6" />,
      textColor: "text-pink-600",
    },
    {
      title: "Revenue from Courses",
      value: statsData.revenue,
      icon: <DollarSign className="h-5 text-purple-900 w-5 md:h-6 md:w-6" />,
      textColor: "text-pink-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {stats.map((stat: StatCardProps, index: number) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  )
}

export { CourseStats }
