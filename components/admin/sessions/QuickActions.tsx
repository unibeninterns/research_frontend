"use client";

import type React from "react";
import CalendarPlus from "@/components/icons/calendarPlus";
import Export from "@/components/icons/export";
import SessionsX from "@/components/icons/sessionsX";

function QuickActions() {
  const quickActions = [
    {
      title: "Schedule New Session",
      icon: <CalendarPlus size={20} />,
    },
    {
      title: "Export Session List",
      icon: <Export size={20} />,
    },
    {
      title: "Cancel Session",
      icon: <SessionsX size={20} />,
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
            key={action.title}
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
