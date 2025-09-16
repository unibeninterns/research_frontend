"use client";

import type React from "react";
import { UserPlus, Users, Download, Send } from "lucide-react";

interface QuickAction {
  id: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
  onClick?: () => void;
}

export function StudentQuickActions(): React.JSX.Element {
  const handleActionClick = (actionId: string): void => {
    console.log(`[v0] Action clicked: ${actionId}`);
  };

  const actions: QuickAction[] = [
    {
      id: "add-student",
      title: "Add New Student",
      icon: <UserPlus className="h-5 w-5 lg:h-6 lg:w-6" />,
      description: "Register a new student",
      onClick: () => handleActionClick("add-student"),
    },
    {
      id: "bulk-enrollment",
      title: "Bulk Enrollment",
      icon: <Users className="h-5 w-5 lg:h-6 lg:w-6" />,
      description: "Enroll multiple students",
      onClick: () => handleActionClick("bulk-enrollment"),
    },
    {
      id: "export-data",
      title: "Export Data",
      icon: <Download className="h-5 w-5 lg:h-6 lg:w-6" />,
      description: "Download student data",
      onClick: () => handleActionClick("export-data"),
    },
    {
      id: "send-reminder",
      title: "Send Reminder",
      icon: <Send className="h-5 w-5 text-purple-800 lg:h-6 lg:w-6" />,
      description: "Send notifications",
      onClick: () => handleActionClick("send-reminder"),
    },
  ];

  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 lg:text-xl">
        Quick Actions
      </h3>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
        {actions.map((action: QuickAction) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 text-left transition-all duration-200 hover:border-purple-200 hover:bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none lg:p-4"
          >
            <div className={"flex-shrink-0 text-purple-900"}>{action.icon}</div>
            <div className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-gray-900 lg:text-base">
                {action.title}
              </span>
              {action.description && (
                <span className="block text-xs text-gray-500 lg:text-sm">
                  {action.description}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
