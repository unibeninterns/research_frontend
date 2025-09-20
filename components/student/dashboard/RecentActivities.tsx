import CheckCircle from "@/components/icons/CheckCircle";
import BookCheck from "@/components/icons/BookCheck";
import Downloaded from "@/components/icons/Downloaded";
import { ChevronDown } from "lucide-react";

const RecentActivities = () => {
  const recentActivities = [
    {
      icon: <CheckCircle size={16} />,
      title: "Completed Module 6",
      text: "Data Cleaning & Preprocessing",
    },
    {
      icon: <BookCheck />,
      title: "Attempted Quiz 6",
      text: "Score: 80%",
    },
    {
      icon: <Downloaded />,
      title: "Downloaded",
      text: "Data Analysis pdf",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-start gap-4 rounded-[5px] border px-4 py-6">
      <h2 className="text-base font-bold">Recent Activities</h2>
      <div className="flex flex-col gap-3">
        {recentActivities.map((a) => (
          <div key={a.title} className="flex items-start justify-start gap-2">
            <div className="mt-1">{a.icon}</div>
            <div>
              <p className="text-xs font-semibold">{a.title}</p>
              <p className="text-[10px] font-light">{a.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="tertiary-button flex self-center text-[10px] text-[#800080]">
        View all activities <ChevronDown className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
};

export default RecentActivities;
