"use client";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import ExpensesComponent from "@/components/admin/analytics-component/ExpensesComponent";
import RevenueComponent from "@/components/admin/analytics-component/RevenueComponent";
import StudentComponent from "@/components/admin/analytics-component/StudentComponent";
import Expenses from "@/components/icons/Expenses";
import Profit from "@/components/icons/Profit";
import Revenue from "@/components/icons/Revenue";
import SessionsTick from "@/components/icons/SessionsTick";
import StudentTick from "@/components/icons/StudentTick";
import Users from "@/components/icons/Users";
import { JSX, useState } from "react";

const tabKeys = ["Revenue", "Students", "Expenses"] as const;
type TabKey = (typeof tabKeys)[number];

const AnalyticsReports = () => {
  const cardInfo: Record<
    TabKey,
    { icon: JSX.Element; param: string; value: string }[]
  > = {
    Revenue: [
      {
        icon: <Revenue />,
        param: "Total Revenue",
        value: "₦1,240,000",
      },
      {
        icon: <SessionsTick />,
        param: "Total Payouts",
        value: "₦800,000",
      },
    ],
    Students: [
      {
        icon: <Users />,
        param: "Total Students Enrolled",
        value: "₦1,240,000",
      },
      {
        icon: <StudentTick />,
        param: "Active Students",
        value: "₦1,240,000",
      },
    ],
    Expenses: [
      {
        icon: <Revenue />,
        param: "Total Revenue",
        value: "₦1,240,000",
      },
      {
        icon: <Expenses />,
        param: "Total Expenses",
        value: "₦500,000",
      },
      {
        icon: <Profit />,
        param: "Profit",
        value: "₦740,000",
      },
    ],
  };
  const tabs = tabKeys;
  const [currentTab, setTab] = useState<TabKey>("Expenses");
  return (
    <div>
      <AdminInfoComponent cardInfo={cardInfo[currentTab]} />
      <div className="mx-5 flex w-full items-center justify-start gap-[36px] md:gap-[56px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setTab(tab);
              // setCompleted(false);
            }}
            className={`tertiary-button px-1 py-0.5 text-[14px] font-semibold ${
              currentTab === tab
                ? "z-2 scale-102 transform border-b border-b-[#800080] text-[#800080] transition duration-100 ease-in-out"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {currentTab === "Revenue" ? (
          <RevenueComponent />
        ) : currentTab === "Students" ? (
          <StudentComponent />
        ) : (
          <ExpensesComponent />
        )}
      </div>
    </div>
  );
};

export default AnalyticsReports;
