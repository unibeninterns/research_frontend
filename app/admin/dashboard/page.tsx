"use client";
import {
  UsersRound,
  LibraryBig,
  ChartNoAxesCombined,
  FileBadge,
  UserRoundPlus,
  CircleCheck,
} from "lucide-react";
import AdminBarChart from "@/components/admin/dashboard-components/AdminBarChart";
import AdminDoughnutChart from "@/components/admin/dashboard-components/AdminDoughnutChart";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import WeekHighlights from "@/components/admin/dashboard-components/WeekHighlights";
import CertificateRequests from "@/components/admin/dashboard-components/CertificateRequests";
import WeeklyModuleCompletion from "@/components/admin/dashboard-components/WeeklyModuleCompletion";
import Tasks from "@/components/admin/dashboard-components/Tasks";
import QuickActions from "@/components/admin/dashboard-components/QuickActions";
import AverageCourseProgress from "@/components/admin/dashboard-components/AverageCourseProgress";

const Dashboard = () => {
  const cardInfo = [
    {
      icon: <UsersRound />,
      param: "Total Enrolled Students",
      value: "1,284",
    },
    {
      icon: <LibraryBig />,
      param: "Active Courses",
      value: "1",
    },
    {
      icon: <ChartNoAxesCombined />,
      param: "Revenue This Month",
      value: "₦1,240,000",
    },
    {
      icon: <FileBadge />,
      param: "Certificate Requests",
      value: "5",
    },
    {
      icon: <UserRoundPlus />,
      param: "Today’s New Signups",
      value: "23",
    },
    {
      icon: <CircleCheck />,
      param: "Average Module Completion Rate",
      value: "67%",
    },
  ];
  return (
    <div className="mt-5 mb-10">
      <AdminInfoComponent cardInfo={cardInfo} />
      <div className="mt-5 flex flex-col items-start justify-between py-2 md:flex-row gap-6">
        <div className="rounded-[5px] border-[0.5px] border-[#D9D9D9] p-2">
          <AdminBarChart />
        </div>
        <div className="h-[380px] rounded-[5px] border-[0.5px] border-[#D9D9D9] p-2">
          <AdminDoughnutChart />
        </div>
        <div>
          <WeekHighlights />
        </div>
      </div>
      <div>
        <CertificateRequests />
      </div>
      <div className="mt-8 flex items-start justify-between gap-8">
        <WeeklyModuleCompletion />
        <Tasks />
      </div>
      <div className="mt-8 flex items-start justify-start gap-8">
        <QuickActions />
        <AverageCourseProgress />
      </div>
    </div>
  );
};

export default Dashboard;
