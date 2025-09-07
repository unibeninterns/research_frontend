"use client"

import type React from "react"
import { UserPlus, Send, Upload, BookOpen } from "lucide-react"

interface QuickAction {
  id: string
  title: string
  icon: React.ReactNode
}

const TutorQuickActions: React.FC = (): React.JSX.Element => {
  const actions: QuickAction[] = [
    {
      id: "1",
      title: "Add Tutor",
      icon: <UserPlus className="h-5 w-5" />,
    },
    {
      id: "2",
      title: "Invite Tutor",
      icon: <Send className="h-5 w-5" />,
    },
    {
      id: "3",
      title: "Export Tutor List",
      icon: <Upload className="h-5 w-5" />,
    },
    {
      id: "4",
      title: "Assign Tutor to Course",
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  return (
    <div className="border px-4 py-6 flex flex-col gap-5 rounded-[5px]">
      <div>
        <h3 className="text-[16px] font-bold">Quick Actions</h3>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          {actions.map((action) => (
            <button
              key={action.id}
              className="flex items-center justify-center p-4 bg-white border border-[#FBEFFFE5] rounded-[5px] gap-3"
            >
              <div className="text-[#800080]">{action.icon}</div>
              <span className="text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TutorQuickActions
