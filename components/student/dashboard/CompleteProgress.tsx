import { ChevronDown } from "lucide-react";
import DoughnutChart from "./DoughnutChart";

const CompletedProgress = () => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-[5px] border-[0.5px] p-4">
      <h2 className="text-base font-bold text-nowrap">Certificate Progress</h2>
      <DoughnutChart />
      <button className="tertiary-button text-primary flex text-xs text-nowrap hover:bg-purple-50">
        <p>View requirements</p> <ChevronDown className="ml-1 h-4 w-4" />
      </button>
    </div>
  );
};

export default CompletedProgress;
