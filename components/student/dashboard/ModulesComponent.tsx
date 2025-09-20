import CircleDashed from "@/components/icons/CircleDashed";
import Padlock2 from "@/components/icons/Padlock2";
import TickCircleNormal from "@/components/icons/TickCircleNormal";
import { ArrowRight } from "lucide-react";

interface ModuleInfo {
  number: number;
  title: string;
  status: string;
  info: string;
}
const Module = ({ module }: { module: ModuleInfo }) => {
  const getBadge = (status: string) => {
    if (status.toLowerCase() === "completed") {
      return (
        <div className="flex items-center justify-center gap-2 rounded-[5px] bg-[#DEFFD8] px-2 py-1.5 text-xs text-[#1DAE00]">
          <TickCircleNormal />
          <p>{status}</p>
        </div>
      );
    }
    if (status.toLowerCase() === "in progress") {
      return (
        <div className="flex items-center justify-center gap-2 rounded-[5px] bg-[#FFF9E5] px-2 py-1.5 text-xs text-[#F6B600]">
          <CircleDashed />
          <p>{status}</p>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center gap-2 rounded-[5px] bg-[#EBEBEB] px-2 py-1.5 text-xs text-[#848484]">
        <Padlock2 />
        <p>{status}</p>
      </div>
    );
  };
  const getButton = (status: string) => {
    if (status.toLowerCase() === "completed") {
      return (
        <button className="secondary-button flex items-center justify-between gap-1 rounded-[5px] px-4 py-2 lg:text-xs">
          <p>View Summary</p>
          <ArrowRight height={15} />
        </button>
      );
    }
    if (status.toLowerCase() === "in progress") {
      return (
        <button className="primary-button flex items-center justify-between rounded-[5px] px-4 py-2 font-semibold lg:text-xs">
          <p>Unlock</p>
        </button>
      );
    }
    return (
      <button className="flex items-center justify-between rounded-[5px] bg-[#EBEBEB] px-4 py-2 font-semibold text-[#848484] lg:text-xs">
        <p>Resume Module</p>
      </button>
    );
  };
  return (
    <div className="flex flex-col items-start gap-5 rounded-[5px] border-[0.5px] border-[#D9D9D9] p-4">
      <div className="flex flex-col items-start gap-2">
        <p className="text-[12px] text-[#1E1E1E99]">Module {module.number}</p>
        <h3 className="text-sm font-[600]">{module.title}</h3>
        {getBadge(module.status)}
        <p className="text-xs font-[600] text-[#1E1E1E99]">{module.info}</p>
      </div>
      {getButton(module.status)}
    </div>
  );
};

const ModulesComponent = () => {
  const modules: ModuleInfo[] = [
    {
      number: 6,
      title: "Data Cleaning & Processing",
      status: "Completed",
      info: "3 of 3 Lessons Completed",
    },
    {
      number: 7,
      title: "Data Analysis & Visualization",
      status: "In Progress",
      info: "1 of 3 Lessons Completed",
    },
    {
      number: 8,
      title: "Academic Writing & Referencing",
      status: "Locked",
      info: "Unlock after completing Module 7",
    },
  ];
  return (
    <div className="flex items-start gap-5">
      {modules.map((module) => (
        <Module key={module.title} module={module} />
      ))}
    </div>
  );
};
export default ModulesComponent;
