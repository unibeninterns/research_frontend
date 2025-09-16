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
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Recent Student Activities
      </h3>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-900">
                {activity.title} {activity.description}
              </p>
              <p className="mt-1 text-xs text-gray-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
