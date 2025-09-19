"use client";

import type React from "react";
import {
  CirclePlus,
  Edit,
  UserPlus,
  Upload,
  LibraryBigIcon,
} from "lucide-react";

const CourseQuickActions = () => {
  const actions = [
    {
      id: "add-course",
      title: "Add Course",
      icon: <CirclePlus className="h-4 w-4" />,
    },
    {
      id: "edit-course",
      title: "Edit Course",
      icon: <Edit className="h-4 w-4" />,
    },
    {
      id: "upload-syllabus",
      title: "Upload Syllabus",
      icon: <Upload className="h-4 w-4" />,
    },
    {
      id: "assign-tutor",
      title: "Assign Tutor",
      icon: <UserPlus className="h-4 w-4" />,
    },
    {
      id: "upload-resource",
      title: "Upload Resource",
      icon: <Upload className="h-4 w-4" />,
    },
    {
      id: "course-overview-setup",
      title: "Course Overview Setup",
      icon: <LibraryBigIcon className="h-4 w-4" />,
    },
  ];

  const handleActionClick = (actionId: string): void => {
    console.log(`${actionId} clicked`);
  };

  return (
    <div className="flex w-[262px] flex-col gap-5 rounded-[5px] border-[0.5px] px-4 py-6">
      <h3 className="border-b pb-2 text-[16px] font-semibold">Quick Actions</h3>

      <div className="flex flex-col gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleActionClick(action.id)}
            className="flex items-center justify-start gap-2 rounded-[5px] border-[1px] border-[#FBEFFFE5] p-3"
          >
            <div className="text-[#800080]">{action.icon}</div>
            <span className="text-xs">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { CourseQuickActions };
