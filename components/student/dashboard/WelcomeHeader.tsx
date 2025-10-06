import Beaker from "@/components/icons/Beaker";
import Hourglass from "@/components/icons/Hourglass";
import { Progress } from "@/components/ui/progress";
import { DashboardContext } from "@/context/student/DashboardContext";
// import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const WelcomeHeader = () => {
  // const { user } = useContext(UserContext); 
  const { dashboardData } = useContext(DashboardContext);
  return (
    <>
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold text-gray-900">
            {`Welcome back, ${dashboardData?.user?.fullname || "Raymond"}`}
          </h1>
          <div>
            <p className="text-xs text-gray-600">
              You&apos;re currently enrolled in:
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              {dashboardData?.user.currentCourse.title ||
                `Research Technologies & Innovation`}
            </h2>
          </div>

          <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
            <Hourglass />
            <span className="text-xs">
              You have {dashboardData?.user.currentCourse.weeksRemaining || "6"}{" "}
              weeks remaining to complete this course
            </span>
          </div>
          {/* Progress Bar */}
          <div className="mt-6 space-y-2">
            <Progress value={50} className="h-3" />
            <p className="text-xs text-gray-600">
              You&apos;re doing great — just{" "}
              {dashboardData?.progress
                ? dashboardData.progress.totalModules -
                  dashboardData.progress.modulesCompleted
                : 6}{" "}
              modules to go!
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Beaker />
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;
