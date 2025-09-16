import { Calendar, Megaphone, Award, Activity } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "Next Live Session",
    description: "Week 6: Academic Writing & Ref...",
    time: "Saturday, Sept 7, 9:00am",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: Megaphone,
    title: "Admin Announcement",
    description: "New tutor assigned",
    time: "",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: Award,
    title: "Upcoming Certificate Approval",
    description: "3 requests due for review",
    time: "",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Activity,
    title: "Recent Student Activity",
    description: "Ada completed Week 4 module",
    time: "",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Activity,
    title: "Recent Student Activity",
    description: "Ada completed in Week 6 module",
    time: "",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

function WeekHighlights() {
  return (
    <div className="flex flex-col rounded-[5px] border-[0.5px] border-[#D9D9D9] bg-white px-[24px] py-[16px]">
      <div>
        <h2 className="mb-[20px] text-[16px] font-semibold">{`This Week's Highlights`}</h2>
      </div>
      <div className="flex flex-col gap-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`rounded p-1.5 ${highlight.bgColor} mt-0.5`}>
              <highlight.icon className={`h-3 w-3 ${highlight.color}`} />
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-medium text-gray-900">
                {highlight.title}
              </p>
              <p className="truncate text-[10px] text-gray-600">
                {highlight.description}
              </p>
              {highlight.time && (
                <p className="mt-1 text-[10px] text-gray-500">
                  {highlight.time}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekHighlights;
