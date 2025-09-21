import type React from "react";

interface Activity {
  title: string;
  id: string;
  date: string;
}

export function RecentActivities(): React.JSX.Element {
  const activities: Activity[] = [
    {
      title: "Refund issued to John Doe – ₦5,000",
      date: "September 2, 2025, 3:00 PM",
      id: "TXN12345",
    },
    {
      title: "New payment received from Jane Smith – ₦20,000",
      date: "September 2, 2025, 3:00 PM",
      id: "TXN12345",
    },
    {
      title: "Payment failed for Mark Anthony – ₦100,000",
      date: "September 2, 2025, 3:00 PM",
      id: "TXN12345",
    },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 py-6">
      <h3 className="mb-4 text-sm font-bold text-gray-900">
        Recent Student Activities
      </h3>

      <div className="flex flex-col gap-1">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="group flex flex-col gap-2 hover:bg-[#FBEFFF80] hover:px-2 hover:py-3"
          >
            <div className="flex flex-col gap-[2px]">
              <p className="text-xs font-semibold">{activity.title}</p>
              <p className="hidden text-[10px] font-[500] group-hover:block">
                {activity.id}
              </p>
            </div>
            <p className="hidden text-[10px] text-gray-500 group-hover:block">
              {activity.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
