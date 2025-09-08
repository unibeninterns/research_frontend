"use client"

import type React from "react"
import { CirclePlus, Edit, UserPlus, Upload } from "lucide-react"

interface QuickAction {
  id: string
  title: string
  icon: React.ReactNode
}

type CourseQuickActionsProps = Record<string, never>

const CourseQuickActions: React.FC<CourseQuickActionsProps> = (): React.JSX.Element => {
  const actions: QuickAction[] = [
    {
      id: "add-course",
      title: "Add Course",
      icon: <CirclePlus className="h-6 w-6 " />,
    },
    {
      id: "edit-course",
      title: "Edit Course",
      icon: <Edit className="h-6 w-6 " />,
    },
    {
      id: "assign-tutor",
      title: "Assign Tutor",
      icon: <UserPlus className="h-6 w-6 " />,
    },
    {
      id: "upload-module",
      title: "Upload Module",
      icon: <Upload className="h-6 w-6 " />,
    },
  ]

  const handleActionClick = (actionId: string): void => {
    console.log(`${actionId} clicked`)
  }

  return (
    <div className="flex flex-col rounded-[5px] px-4 py-6 border-[0.5px] gap-5 w-[262px] ">
      <h3 className="text-[16px] font-bold pb-0.5 border-b">Quick Actions</h3>

      <div className="flex flex-col gap-4">
        {actions.map((action: QuickAction) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            className="flex items-center justify-start gap-3 rounded-[5px] border-[1px] border-[#FBEFFFE5] p-4"
          >
              <div className="text-[#800080]">{action.icon}</div>
            <span className="text-sm">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export { CourseQuickActions }
