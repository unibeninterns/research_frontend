import type React from "react";

interface Activity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

export function RecentActivities(): React.JSX.Element {
  const activities: Activity[] = [
    {
      id: "1",
      title: "New User completed Module 5 - Research Methodology on",
      description: "September 9th.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      title: "Sarah Jane submitted work on Data Science on September 9th.",
      description: "",
      timestamp: "3 hours ago",
    },
    {
      id: "3",
      title: "Michael Brown requested a certificate for completion on",
      description: "September 9th.",
      timestamp: "4 hours ago",
    },
    {
      id: "4",
      title: "Emily Davis submitted a certificate for completion on",
      description: "September 9th.",
      timestamp: "5 hours ago",
    },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 py-6">
      <h3 className="mb-4 text-sm font-bold text-gray-900">
        Recent Student Activities
      </h3>

      <div className="flex flex-col gap-2">
        {activities.map((activity) => (
          <div key={activity.id} className="flex flex-col gap-1 hover:bg-[#FBEFFF80] hover:px-2 hover:py-2">
            <p className="text-xs text-gray-900">
              {activity.title} {activity.description}
            </p>
            <p className="text-[10px] text-gray-500">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
