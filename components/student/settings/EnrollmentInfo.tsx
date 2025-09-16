import { Progress } from "@/components/ui/progress";
const EnrollmentInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-semibold">Enrollment Information</h3>
      </div>
      <div className="flex flex-col gap-3 rounded-[5px] border border-[#D9D9D9] p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-[500]">
            Research Technologies and Innovation
          </h4>
          <p className="flex items-center justify-center rounded-full bg-[#FFF9E5] px-2 py-1 text-[10px] text-[#F6B600]">
            In Progress
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Progress value={50} className="h-3 md:max-w-100" />
          <p className="text-xs font-[500]">50%</p>
        </div>
        <div className="flex items-center justify-start lg:w-4/5">
          <div className="flex flex-1 flex-col gap-1">
            <p className="flex-1 text-xs text-[#1E1E1EB2]">Start Date</p>
            <p className="flex-1 text-xs">November 20, 2025</p>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="flex-1 text-xs text-[#1E1E1EB2]">End Date</p>
            <p className="flex-1 text-xs">March 01, 2026</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-[5px] border border-[#D9D9D9] p-4">
        <h4 className="text-sm font-[500]">Data Analysis</h4>
        <p className="flex items-center justify-center rounded-full bg-[#FBEFFF] px-2 py-1 text-[10px] text-[#800080]">
          Enrolled
        </p>
      </div>
    </div>
  );
};

export default EnrollmentInfo;
