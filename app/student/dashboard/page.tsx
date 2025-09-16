"use client";
import WelcomeHeader from "@/components/student/dashboard/WelcomeHeader";
import WeekIndicator from "@/components/student/dashboard/WeekIndicator";
import NextSession from "@/components/student/dashboard/NextSession";
import ModulesComponent from "@/components/student/dashboard/ModulesComponent";
import ProgressAnalysis from "@/components/student/dashboard/ProgressAnalysis";
import RecentActivities from "@/components/student/dashboard/RecentActivities";
import LineGraph from "@/components/student/dashboard/LineGraph";
import CompletedProgress from "@/components/student/dashboard/CompleteProgress";
import Encouragement from "@/components/student/dashboard/Encouragement";

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex gap-20">
        <div className="w-full flex-1">
          <WelcomeHeader />
        </div>
        <div className="flex">
          <WeekIndicator />
        </div>
      </div>
      <div className="flex items-start gap-20">
        <div className="flex-1">
          <ModulesComponent />
        </div>
        <NextSession />
      </div>
      <div className="flex items-start gap-20">
        <div className="flex-1">
          <ProgressAnalysis />
        </div>
        <RecentActivities />
      </div>
      <div className="flex items-start gap-5">
        <div className="flex h-75 flex-1">
          <LineGraph />
        </div>
        <CompletedProgress />
        <Encouragement />
      </div>
    </div>
  );
}
