import Beaker from "@/components/icons/Beaker";
import Hourglass from "@/components/icons/Hourglass";
import { Progress } from "@/components/ui/progress";

const WelcomeHeader = () => {
  return (
    <>
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-semibold text-gray-900">
            Welcome back, Raymond
          </h1>
          <div>
            <p className="text-xs text-gray-600">
              You&apos;re currently enrolled in:
            </p>
            <h2 className="text-lg font-semibold text-gray-900">
              Research Technologies & Innovation
            </h2>
          </div>

          <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600">
            <Hourglass />
            <span className="text-xs">
              You have 6 weeks remaining to complete this course
            </span>
          </div>
          {/* Progress Bar */}
          <div className="mt-6 space-y-2">
            <Progress value={50} className="h-3" />
            <p className="text-xs text-gray-600">
              You&apos;re doing great — just 6 modules to go!
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
