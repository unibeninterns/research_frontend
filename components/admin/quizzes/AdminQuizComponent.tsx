"use client";
import Archive from "@/components/icons/archive";
import Duplicate from "@/components/icons/duplicate";
import Export2 from "@/components/icons/export2";
import Eye from "@/components/icons/eye";
import Publish from "@/components/icons/publish";
import Restore from "@/components/icons/restore";
import SaveDraft from "@/components/icons/saveDraft";
import TrashCan from "@/components/icons/trashCan";
import TrashCan2 from "@/components/icons/trashCan2";
import { Question } from "@/components/student/classroom/Quiz";
import { CourseModuleContext } from "@/context/course-module";
import QuizModule from "@/types/module";
import { ChevronDown, ChevronUp, Pencil } from "lucide-react";
import { useContext, useState } from "react";

const QuizComponent = () => {
  const getBadge: (mode: QuizModule["mode"] | undefined) => string = (mode) => {
    switch (mode) {
      case "Active":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "Archived":
        return "bg-[#EBEBEB] text-[#848484]";
      default:
        return "bg-[#FFF9E5] text-[#F6B600]";
    }
  };

  const [showSettings, setShowSettings] = useState(true);

  const { module } = useContext(CourseModuleContext);

  const [currentTab, setCurrentTab] = useState("Lesson 1");

  const tabs = ["Lesson 1", "Lesson 2", "Lesson 3"];
  const quizzes = [
    {
      question:
        "Q1: What is the main benefit of using digital tools in research?",
      options: [
        { option: "Faster funding", checked: true },
        { option: "Improved collaboration", checked: false },
        { option: "Better typing", checked: false },
        { option: "Less paperwork", checked: false },
      ],
    },
    {
      question:
        "Q2: What is the main benefit of using digital tools in research?",
      options: [
        { option: "Faster funding", checked: true },
        { option: "Improved collaboration", checked: false },
        { option: "Better typing", checked: false },
        { option: "Less paperwork", checked: false },
      ],
    },
    {
      question:
        "Q3: What is the main benefit of using digital tools in research?",
      options: [
        { option: "Faster funding", checked: true },
        { option: "Improved collaboration", checked: false },
        { option: "Better typing", checked: false },
        { option: "Less paperwork", checked: false },
      ],
    },
    {
      question:
        "Q4: What is the main benefit of using digital tools in research?",
      options: [
        { option: "Faster funding", checked: true },
        { option: "Improved collaboration", checked: false },
        { option: "Better typing", checked: false },
        { option: "Less paperwork", checked: false },
      ],
    },
    {
      question:
        "Q5: What is the main benefit of using digital tools in research?",
      options: [
        { option: "Faster funding", checked: true },
        { option: "Improved collaboration", checked: false },
        { option: "Better typing", checked: false },
        { option: "Less paperwork", checked: false },
      ],
    },
  ];

  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{module?.topic}</h3>
        <p
          className={`rounded-[5px] px-4 py-2 text-[10px] font-[500] ${getBadge(module?.mode)}`}
        >
          {module?.mode}
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-5 rounded-[5px] border-[0.5px] px-4 py-6">
        <div className="flex items-center justify-between gap-16 text-sm">
          <h4 className="flex-1 font-[500]">Settings</h4>
          <button onClick={() => setShowSettings((prev) => !prev)}>
            {showSettings ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {showSettings && (
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="quiz-title" className="text-[10px]">
                Quiz Title
              </label>
              <input
                type="text"
                id="quiz-title"
                value={module?.topic}
                className="focus:border-primary rounded-[5px] border border-[#D9D9D9] p-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="module" className="text-[10px]">
                Module
              </label>
              <input
                type="text"
                id="module"
                value={`Module ${module?.module}`}
                className="focus:border-primary rounded-[5px] border border-[#D9D9D9] p-4 outline-none"
              />
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-1 flex-col gap-1 text-sm">
                <label htmlFor="time-limit" className="text-[10px]">
                  Time Limit
                </label>
                <input
                  type="text"
                  id="time-limit"
                  value={module?.timeLimit ? module?.timeLimit : "No limit"}
                  className="focus:border-primary rounded-[5px] border border-[#D9D9D9] p-4 outline-none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 text-sm">
                <label htmlFor="attempts-allowed" className="text-[10px]">
                  Attempts Allowed
                </label>
                <input
                  type="number"
                  id="attempts-allowed"
                  value={module?.attemptsAllowed}
                  className="focus:border-primary rounded-[5px] border border-[#D9D9D9] p-4 outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-1 flex-col gap-1 text-sm">
                <label htmlFor="grading" className="text-[10px]">
                  Grading
                </label>
                <input
                  type="text"
                  id="grading"
                  value={module?.gradingType}
                  className="focus:border-primary rounded-[5px] border border-[#D9D9D9] p-4 outline-none"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 text-sm">
                <label htmlFor="options" className="text-[10px]">
                  Options
                </label>
                <input
                  type="text"
                  id="options"
                  value={`MCQ`}
                  className="focus:border-primary rounded-[5px] border border-[#D9D9D9] p-4 outline-none"
                />
              </div>
            </div>
          </form>
        )}
      </div>
      <div className="relative mt-5 w-full shadow-xs">
        <div className="mx-5 flex w-full items-center justify-start gap-[36px] md:gap-[56px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setCurrentTab(tab);
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
        <hr className="absolute bottom-0 w-full" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="mt-8 flex flex-col gap-8">
          {quizzes.map((question) => (
            <Quiz key={question.question} question={question} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <hr />
          {module?.mode === "Active" ? (
            <ActiveButtons />
          ) : module?.mode === "Draft" ? (
            <DraftButtons />
          ) : (
            <ArchiveButtons />
          )}
        </div>
      </div>
    </div>
  );
};

const Quiz = ({ question }: { question: Question }) => {
  const { module } = useContext(CourseModuleContext);
  return (
    <div className="flex items-start gap-8 rounded-[5px] border px-4 py-6">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="text-[18px] font-semibold">{question.question}</h1>
        <div className="flex flex-col gap-2">
          {question.options.map((o, index) => (
            <div key={o.option} className="flex items-center">
              <input
                type="radio"
                id={o.option}
                name="options"
                value={o.option}
                checked={index === question.options.length - 1}
                readOnly
                className="mr-5 h-4 w-4 cursor-pointer appearance-none rounded-full border border-black p-0 checked:border-[#800080] checked:bg-[#800080]"
              />
              <label htmlFor={o.option} className="text-[16px]">
                {o.option}
              </label>
            </div>
          ))}
        </div>
      </div>
      {module?.mode === "Draft" && (
        <div className="flex items-center gap-8 text-[10px]">
          <button className="primary-button flex gap-2 rounded-[5px] px-4 py-2">
            <Pencil className="mt-[3px] h-2 w-2 stroke-4" />
            <p>Edit Quiz</p>
          </button>
          <button className="secondary-button flex items-center gap-2 rounded-[5px] px-4 py-2">
            <Duplicate />
            <p>Duplicate</p>
          </button>
          <button className="flex place-items-center">
            <TrashCan />
          </button>
        </div>
      )}
    </div>
  );
};

const ActiveButtons = () => {
  return (
    <div className="flex items-center justify-between">
      <Archive />
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8 text-[10px] font-[500]">
          <button className="primary-button flex gap-2 rounded-[5px] px-4 py-2">
            <Eye className="mt-0.5" size={12} />
            <p>Preview</p>
          </button>
          <button className="secondary-button flex items-center gap-2 rounded-[5px] px-4 py-2">
            <Export2 />
            <p>Export Results</p>
          </button>
          <button className="secondary-button flex items-center gap-2 rounded-[5px] px-4 py-2">
            <Duplicate />
            <p>Duplicate</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const DraftButtons = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6 text-[10px]">
        <TrashCan />
        <button className="secondary-button flex gap-2 rounded-[5px] px-4 py-2">
          <Eye className="mt-0.5" size={12} />
          <p>Preview</p>
        </button>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8 text-[10px] font-[500]">
          <button className="primary-button flex gap-2 rounded-[5px] px-4 py-2">
            <Publish />
            <p>Publish</p>
          </button>
          <button className="flex items-center gap-2 rounded-[5px] border border-[#848484] px-4 py-2 text-[#848484]">
            <SaveDraft />
            <p>Save Draft</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const ArchiveButtons = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6 text-[10px]">
        <button className="secondary-button flex gap-2 rounded-[5px] px-4 py-2">
          <Export2 />
          <p>Export Results</p>
        </button>
        <button className="secondary-button flex gap-2 rounded-[5px] px-4 py-2">
          <Eye className="mt-0.5" size={12} />
          <p>Preview</p>
        </button>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8 text-[10px] font-[500]">
          <button className="primary-button flex gap-2 rounded-[5px] px-4 py-2">
            <Restore />
            <p>Restore</p>
          </button>
          <button className="flex items-center gap-2 rounded-[5px] border border-[#FF383C] px-4 py-2 text-[#FF383C]">
            <TrashCan2 />
            <p>Save Draft</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
