"use client";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  LockKeyhole,
  TvMinimalPlay,
} from "lucide-react";
import { useState } from "react";

const ModuleComponent = ({
  hideMobileModules,
}: {
  hideMobileModules?: () => void;
}) => {
  const [focus, setFocus] = useState("");
  const handleFocus = (topic: string) => setFocus(focus === topic ? "" : topic);
  const modules = [
    {
      topic: "Module 1: Introduction to Research in the 21st Century",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 2: Research Design Fundamentals",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 3: Literature Review & Knowledge Management",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 4: AI & Digital Tools for Research",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 5: Data Collection Methods",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 6: Data Cleaning & Preprocessing",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 7: Data Analysis & Visualization",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: false,
    },
    {
      topic: "Module 8: Academic Writing & Referencing",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: "Module 9: Strategic Visibility & Personal Rebranding",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: "Module 10: Proposal & Grant Writing",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: "Module 11: Capstone Project Week",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: true,
    },
    {
      topic: "Module 12: Final Exam & Portfolio Presentation",
      subModules: [
        { topic: "Introduction to Data Analysis", len: 4, checked: true },
        {
          topic: "Preparing Your Dataset for Analysis",
          len: 23,
          checked: true,
        },
        { topic: "Exploratory Data Analysis (DEA)", len: 23, checked: true },
      ],
      locked: true,
    },
  ];
  return (
    <div className="h-full w-full bg-white">
      <div className="items center flex w-full justify-between border px-2">
        <button
          className="flex place-items-center rounded-full bg-white p-2 md:hidden"
          onClick={hideMobileModules}
        >
          <ChevronRight height={24} width={24} strokeWidth={3} />
        </button>
        <h2 className="text-14px w-full py-2 text-center font-bold">
          Course Content
        </h2>
      </div>
      <div className="w-full overflow-y-scroll">
        {modules.map((module) => (
          <div key={module.topic} className="border-t last:border-b">
            {module.locked ? (
              <LockedModule topic={module.topic} />
            ) : (
              <OpenModule
                module={module}
                isFocused={focus === module.topic}
                handleFocus={handleFocus}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const OpenModule = ({
  module,
  isFocused,
  handleFocus,
}: {
  module: {
    topic: string;
    subModules: {
      topic: string;
      len: number;
      checked: boolean;
    }[];
    locked: boolean;
  };
  isFocused: boolean;
  handleFocus: (topic: string) => void;
}) => {
  return (
    <div className="flex w-full flex-col px-[12px] py-[8px]">
      <div>
        <div className="flex justify-between">
          <h3 className="text-[12px] font-bold">{module.topic}</h3>
          <button onClick={() => handleFocus(module.topic)}>
            {isFocused ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        <p className="text-[10px]">{`${
          module.subModules.filter((subModule) => subModule.checked).length
        }/${module.subModules.length} | ${module.subModules.reduce(
          (acc, curr) => acc + curr.len,
          0,
        )} min`}</p>
      </div>
      <div className="flex flex-col">
        {isFocused &&
          module.subModules.map((subModule) => (
            <div
              key={subModule.topic}
              className="flex items-start gap-3 px-[12px] py-[8px] hover:bg-[rgba(251,239,255,0.4)]"
            >
              <input
                type="checkbox"
                name={subModule.topic}
                checked={subModule.checked}
                className="mt-[4px]"
              />
              <div className="space-around flex flex-col">
                <p className="text-[12px]">{subModule.topic}</p>
                <div className="flex items-center">
                  <TvMinimalPlay height={10} />
                  <p className="text-[10px]">{subModule.len} min</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const LockedModule = ({ topic }: { topic: string }) => {
  return (
    <div className="flex w-full items-center px-[12px] py-[8px]">
      <LockKeyhole color="#A3A3A3" height={14} strokeWidth={3} />
      <p className="text-xs text-[#A3A3A3]">{topic}</p>
    </div>
  );
};

export default ModuleComponent;
