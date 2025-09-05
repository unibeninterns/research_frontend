"use client"

import type React from "react"
import { Plus, Edit, UserPlus, Upload } from "lucide-react"

interface QuickAction {
  id: string
  title: string
  icon: React.ReactNode
  textColor: string
}

type CourseQuickActionsProps = {}

const CourseQuickActions: React.FC<CourseQuickActionsProps> = (): React.JSX.Element => {
  const actions: QuickAction[] = [
    {
      id: "add-course",
      title: "Add Course",
      icon: <Plus className="h-5 w-5 md:h-6 md:w-6" />,
      textColor: "text-purple-900",
    },
    {
      id: "edit-course",
      title: "Edit Course",
      icon: <Edit className="h-5 w-5 md:h-6 md:w-6" />,
      textColor: "text-purple-900",
    },
    {
      id: "assign-tutor",
      title: "Assign Tutor",
      icon: <UserPlus className="h-5 w-5 md:h-6 md:w-6" />,
      textColor: "text-purple-900",
    },
    {
      id: "upload-module",
      title: "Upload Module",
      icon: <Upload className="h-5 w-5 md:h-6 md:w-6" />,
      textColor: "text-purple-900",
    },
  ]

  const handleActionClick = (actionId: string): void => {
    console.log(`${actionId} clicked`)
  }

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm md:p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">Quick Actions</h3>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {actions.map((action: QuickAction) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 text-center transition-all hover:border-purple-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 md:gap-3 md:p-6"
          >
            <div className={`rounded-lg p-2  md:p-3`}>
              <div className={action.textColor}>{action.icon}</div>
            </div>
            <span className="text-sm font-medium text-gray-700 md:text-base">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export { CourseQuickActions }
