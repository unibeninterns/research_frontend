"use client";
import Ellipsis from "@/components/icons/Ellipsis";
import Export2 from "@/components/icons/Export2";
import { CourseModuleContext } from "@/context/quizzesContext";
import QuizModule from "@/interfaces/student/module";
import { ChevronDown, ChevronUp, Pencil, Plus } from "lucide-react";
import { useContext, useState } from "react";
import AdminSearchBar from "../dashboard-components/AdminSearchBar";

interface CourseQuiz {
  course: string;
  modules: QuizModule[];
}

const Modules = () => {
  const courseQuiz: CourseQuiz = {
    course: "Research Technologies and Innovation",
    modules: [
      {
        module: 1,
        topic: "Introduction to Research in the 21st Century",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Active",
        attemptsAllowed: 1,
      },
      {
        module: 2,
        topic: "Research Design Fundamentals",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Active",
        attemptsAllowed: 1,
      },
      {
        module: 3,
        topic: "Literature Review & Knowledge Management",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Draft",
        attemptsAllowed: 1,
      },
      {
        module: 4,
        topic: "AI & Digital Tools for Research",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Archived",
        attemptsAllowed: 1,
      },
      {
        module: 5,
        topic: "Data Collection Methods",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Active",
        attemptsAllowed: 1,
      },
      {
        module: 6,
        topic: "Data Cleaning & Preprocessing",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Active",
        attemptsAllowed: 1,
      },
      {
        module: 7,
        topic: "Data Analysis & Visualisation",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Draft",
        attemptsAllowed: 1,
      },
      {
        module: 8,
        topic: "Academic Writing & Referencing",
        quizQuestions: 5,
        timeLimit: null,
        gradingType: "Auto",
        mode: "Draft",
        attemptsAllowed: 1,
      },
    ],
  };
  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="flex-1 text-[16px] font-semibold text-gray-900">
          Quizzes
        </h3>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 rounded-[50px] border-[0.5px] px-2 py-1 text-[14px] md:px-4 md:py-2 md:text-base">
            <AdminSearchBar />
          </div>
          <select
            defaultValue="all-courses"
            className="truncate rounded-md border border-gray-200 bg-white px-3 py-2 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="all-courses">All Courses</option>
            <option value="last-month">Last Month</option>
          </select>
          <select
            defaultValue="all-statuses"
            className="truncate rounded-md border border-gray-200 bg-white px-3 py-2 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="this-week">All Statuses</option>
            <option value="last-month">Last Month</option>
          </select>
          <button
            // onClick={handleAddStudent}
            className="secondary-button flex items-center gap-2 rounded-[5px] px-4 py-2 text-[10px] text-nowrap"
          >
            <Plus />
            <p>New Quiz</p>
          </button>
        </div>
      </div>
      <div className="grid-col grid grid-cols-2 gap-x-8 gap-y-6">
        {courseQuiz.modules.map((module) => (
          <Module key={module.topic} module={module} />
        ))}
      </div>
    </div>
  );
};
const Module = ({ module }: { module: QuizModule }) => {
  const getBadge: (mode: QuizModule["mode"]) => string = (mode) => {
    switch (mode) {
      case "Active":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "Archived":
        return "bg-[#EBEBEB] text-[#848484]";
      default:
        return "bg-[#FFF9E5] text-[#F6B600]";
    }
  };

  const { setModule } = useContext(CourseModuleContext);

  const [showMoreInfo, setShowMoreInfo] = useState(true);
  return (
    <div className="flex flex-col gap-5 rounded-[5px] border px-4 py-6">
      <div className="flex justify-between">
        <h3 className="text-base font-semibold">{`Module ${module.module}: ${module.topic}`}</h3>
        <button onClick={() => setShowMoreInfo((prev) => !prev)}>
          {showMoreInfo ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <div className="flex flex-1 items-start gap-8 text-xs">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex justify-between">
            <p>Quiz Questions</p>
            <p>{module.quizQuestions}</p>
          </div>
          <div className="flex justify-between">
            <p>Time Limit</p>
            <p>{module.timeLimit ? module.timeLimit : "NIL"}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex justify-between">
            <p>Attempts Allowed</p>
            <p>{module.attemptsAllowed}</p>
          </div>
          <div className="flex justify-between">
            <p>Grading Type</p>
            <p>{module.gradingType}</p>
          </div>
        </div>
        <p
          className={`rounded-[5px] px-2 py-1 text-[10px] ${getBadge(module.mode)} `}
        >
          {module.mode}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-8 text-xs">
          <button
            onClick={() => setModule(module)}
            className="primary-button flex gap-2 rounded-[5px] px-4 py-2"
          >
            <Pencil className="mt-[3px] h-3 w-3 stroke-2" />
            <p>Edit Quiz</p>
          </button>
          <button className="secondary-button flex items-center gap-2 rounded-[5px] px-4 py-2 text-xs">
            <Export2 />
            <p>Export Results</p>
          </button>
        </div>
        <Ellipsis />
      </div>
    </div>
  );
};
export default Modules;
