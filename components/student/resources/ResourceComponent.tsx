"use client";
import { useState } from "react";
import { LockedModule, OpenModule } from "../classroom/ModulesComponent";

const ResourcesComponent = () => {
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
        <h2 className="text-14px w-full py-2 text-center font-bold">
          All Course Resources
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
export default ResourcesComponent;
