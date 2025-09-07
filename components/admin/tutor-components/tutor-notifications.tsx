"use client"

import type React from "react"

interface Notification {
  id: string
  message: string
  time: string
}

const TutorNotifications: React.FC = (): React.JSX.Element => {
  const notifications: Notification[] = [
    {
      id: "1",
      message: "New tutor application received - John Doe",
      time: "2 min ago",
    },
    {
      id: "2",
      message: "Expert instructor confirmed for Data Analytics course",
      time: "15 min ago",
    },
    {
      id: "3",
      message: "Assistant tutor assignment completed - Research Tech",
      time: "1 hour ago",
    },
  ]

  return (
    <div className="bg-white rounded-lg border">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TutorNotifications
