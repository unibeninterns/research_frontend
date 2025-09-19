import type React from "react";
import Video from "@/components/icons/video";

function UpcomingSessions() {
  const upcomingSessions = [
    {
      title: "Module 8: Academic Writing",
      tutor: "Dr. Trisha Okonkwo",
      date: "Saturday, Sept. 6th, 10:00AM",
    },
    {
      title: "Module 9: Strategic Visibility & Personal",
      tutor: "Dr. Trisha Okonkwo",
      date: "Saturday, Sept. 13th, 10:00AM",
    },
    {
      title: "Module 10: Proposal & Grant Writing",
      tutor: "Dr. Trisha Okonkwo",
      date: "Thursday, Sept. 18th, 10:00AM",
    },
  ];

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 py-6">
      <h3 className="mb-4 text-sm font-bold text-gray-900">
        Recent Student Activities
      </h3>

      <div className="flex flex-col gap-2 p-4">
        {upcomingSessions.map((session) => (
          <div
            key={session.title}
            className="flex flex-col items-start gap-1 hover:bg-[#FBEFFF80] hover:px-2 hover:py-2"
          >
            <Video size={16} />
            <div className="flex flex-col">
              <p className="text-xs font-semibold">{session.title}</p>
              <p className="text-[10px] font-[500]">{session.tutor}</p>
              <p className="text-[10px] font-[400]">{session.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSessions;
