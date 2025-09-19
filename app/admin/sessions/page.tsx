import SessionsCalendar from "@/components/icons/sessionsCalendar";
import Clock from "@/components/icons/clock";
import SessionsTick from "@/components/icons/sessionsTick";
import SessionsX from "@/components/icons/sessionsX";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import Calendar from "@/components/admin/sessions/calendar/Calendar";
import QuickActions from "@/components/admin/sessions/QuickActions";
import UpcomingSessions from "@/components/admin/sessions/UpcomingSessions";
const Sessions = () => {
  const cardInfo = [
    {
      icon: <SessionsCalendar />,
      param: "Total Sessions",
      value: "12",
    },
    {
      icon: <Clock />,
      param: "Upcoming",
      value: "8",
    },
    {
      icon: <SessionsTick />,
      param: "Completed",
      value: "2",
    },
    {
      icon: <SessionsX />,
      param: "Cancelled",
      value: "2",
    },
  ];
  return (
    <div>
      <AdminInfoComponent cardInfo={cardInfo} />
      <Calendar />
      <div className="mt-6 grid grid-cols-2 gap-6">
        <UpcomingSessions />
        <QuickActions />
      </div>
    </div>
  );
};

export default Sessions;
