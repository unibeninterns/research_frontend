"use client";

import type React from "react";
import { Bell, Upload, CheckCircle, CirclePlus } from "lucide-react";

interface QuickAction {
  id: number;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

function QuickActions() {
  const quickActions: QuickAction[] = [
    {
      id: 1,
      title: "Add New Student",
      icon: <CirclePlus className="h-4 w-4" />,
      onClick: () => console.log("Add New Student clicked"),
    },
    {
      id: 2,
      title: "Bulk Enrollment",
      icon: <Bell className="h-4 w-4" />,
      onClick: () => console.log("Send Announcement clicked"),
    },
    {
      id: 3,
      title: "Export Data",
      icon: <Upload className="h-4 w-4" />,
      onClick: () => console.log("Upload Content clicked"),
    },
    {
      id: 4,
      title: "Send Reminder",
      icon: <CheckCircle className="h-4 w-4" />,
      onClick: () => console.log("Approve Certificate clicked"),
    },
  ];

  return (
    <div className="flex flex-col gap-5 rounded-[5px] border-[0.5px] px-4 py-6">
      <div>
        <h3 className="border-b pb-2 text-[16px] font-semibold">
          Quick Actions
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="flex items-center justify-center gap-3 rounded-[5px] border border-[#FBEFFFE5] bg-white p-4"
          >
            <div className="text-[#800080]">{action.icon}</div>
            <span className="text-center text-xs">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
