import { ArrowLeft, ChevronDown, ChevronUp, Plus } from "lucide-react";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import Note from "./NotesComponents";
import Quiz, { QuizCompletedComponent } from "./Quiz";
import PDF from "@/components/icons/pdf";
import PPT from "@/components/icons/ppt";
import Link from "@/components/icons/link";

// interface ToggleCompletedFunctions {
//   showCompleted: () => void;
//   hideCompleted: () => void;
// }

export const QuizCompletedContext = createContext({
  showCompleted: () => {},
  hideCompleted: () => {},
  completed: false,
});
const ClassroomInteractiveComponent = ({
  currentTab,
  setTab,
}: {
  currentTab: string;
  setTab: (tab: string) => void;
}) => {
  const tabs = ["Overview", "Notes", "Resources", "Quiz"];
  const [completed, setCompleted] = useState(false);
  const hideCompleted = () => setCompleted(false);
  const showCompleted = () => setCompleted(true);

  return (
    <QuizCompletedContext.Provider
      value={{ hideCompleted, showCompleted, completed }}
    >
      <div className="flex h-full w-full flex-col items-center">
        {currentTab === "Quiz" && (
          <button className="my-3 ml-5 flex gap-5 self-start">
            <ArrowLeft />
            <p>Back to Module</p>
          </button>
        )}
        <div className="relative w-full shadow-xs">
          <div className="mx-5 flex w-full items-center justify-start gap-[36px] md:gap-[56px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setTab(tab);
                  setCompleted(false);
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
        <div className="h-full w-full py-5">
          {currentTab === "Overview" ? (
            <OverviewComponent />
          ) : currentTab === "Notes" ? (
            <NotesComponent />
          ) : currentTab === "Resources" ? (
            <ResourcesComponent />
          ) : currentTab === "Quiz" ? (
            <QuizComponent />
          ) : null}
        </div>
      </div>
    </QuizCompletedContext.Provider>
  );
};

const OverviewComponent = () => {
  const [showMore, setShowMore] = useState(false);
  const info = {
    show: `This module provides a comprehensive introduction to the technological tools and digital infrastructures that support modern research practices. It explores how innovation and technology intersect to improve research productivity, collaboration, and dissemination. From cloud-based tools and AI-assisted research to digital archiving and knowledge management systems, learners will gain insights into the evolving landscape of academic research.
    The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.`,
    topics: [
      "Evolution of research technologies",
      "Tools for literature review and data analysis",
      "Digital research collaboraiton platforms",
      "Innovations in scientific publishing",
      "Ethics and Integrity in tech-assisted research",
    ],
    outcomes: [
      "Identify and evaluate key digital tools used in academic research",
      "Understand the role of technology in shaping research methodologies",
      "Apply innovative tools in coducting and presenting scholarly work",
      "Discuss ethical considerations in the use of digital research technologies",
    ],
  };
  return (
    <div className="flex w-full flex-col items-center px-2">
      <div className="w-full text-[16px]">{info.show}</div>
      {showMore ? (
        <div className="mx-4 mt-3 flex w-full flex-col">
          <div className="w-full">
            <h5 className="mb-2 text-[16px] font-bold">Key Topics Covered</h5>
            <>
              {info.topics.map((topic) => (
                <li key={topic} className="text-[16px]">
                  {topic}
                </li>
              ))}
            </>
          </div>
          <div className="my-3 w-full">
            <h5 className="mb-2 text-[16px] font-bold">
              Key Learning Outcomes
            </h5>
            <>
              {info.outcomes.map((topic) => (
                <li key={topic} className="text-[16px]">
                  {topic}
                </li>
              ))}
            </>
          </div>
          <hr />
          <LecturerCard />
          <hr />
          <div className="mt-5 flex w-full flex-col items-center">
            <p className="mb-3 text-xs">
              Get DRID certificate by completing entire course
            </p>
            <button className="rounded-[5px] border border-[rgba(128,0,128,0.3)] px-8 py-4 text-[10px] text-[rgba(128,0,128,0.3)]">
              DRID Certificate
            </button>
          </div>
        </div>
      ) : null}
      <div className="tertiary-button my-5 flex gap-5 self-start text-[#800080]">
        <p className="text-[16px]">Show more</p>
        <button onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? (
            <ChevronUp color="#800080" />
          ) : (
            <ChevronDown color="#800080" />
          )}
        </button>
      </div>
    </div>
  );
};

const LecturerCard = () => {
  const lecturer = {
    name: "Dr. Trisha Okonkwo",
    description: "Senior Researcher, Digital Innovation Lab",
    fullDescription:
      "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    image: "969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png",
  };
  return (
    <div className="m-2 flex w-full flex-row justify-center gap-3 md:my-5">
      <div className="z-20 h-[110px] w-[110px]">
        <Image
          src={`/lecturers/${lecturer.image}`}
          alt={lecturer.name}
          className="rounded-[10px] object-cover"
          height={110}
          width={110}
        />
      </div>
      <div className="flex w-[600px] flex-col">
        <div className="flex justify-between">
          <div className="">
            <h3 className="text-[18px] font-semibold md:text-2xl">
              {lecturer.name}
            </h3>
            <p className="text-[16px] font-light">{lecturer.description}</p>
          </div>
          {/* <button
                  onClick={hide}
                  className='flex items-center justify-center'
                >
                  <X strokeWidth={2} />
                </button> */}
        </div>
        <div className="mt-4">
          <p className="text-[16px]">{lecturer.fullDescription}</p>
        </div>
      </div>
    </div>
  );
};

const NotesComponent = () => {
  const notes = [
    {
      module: "7: Data Analysis & Visualization",
      subModule: "1. Introduction to Data Analysis",
      note: "The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts.",
    },
    {
      module: "5: Data Collection Methods",
      subModule: "1. Introduction to Data Collection",
      note: "The goal is to familiarize students with emerging digital trends, demonstrate how to effectively leverage them in scholarly work, and encourage critical thinking around the ethical use of these technologies in research contexts. Evolution of research technologies Tools for literature review and data analysis Digital research collaboration platforms Innovations in scientific publishing Ethics and integrity in tech-assisted research",
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col">
        <div className="flex items-start gap-[12px] border px-[12px]">
          <textarea
            placeholder="Create a new note"
            className="w-full py-[12px] text-[16px] outline-0"
          />
          <button className="mt-[12px] rounded-full bg-black p-[1px]">
            <Plus color="#FFFFFF" strokeWidth={2.5} />
          </button>
        </div>
        <div className="mt-3 flex gap-10">
          <button className="flex items-center gap-3 rounded-[5px] border border-[#800080] px-[16px] py-[8px] text-[12px] text-[#800080]">
            <span>Current Lecture</span>
            <ChevronDown />
          </button>
          <button className="flex items-center gap-3 rounded-[5px] border border-[#800080] px-[16px] py-[8px] text-[12px] text-[#800080]">
            <span>Sort by Module</span>
            <ChevronDown />
          </button>
        </div>
      </div>
      <div className="mt-5 flex h-full flex-col gap-5">
        {notes.length > 0 ? (
          notes.map((note) => <Note key={note.note} note={note} />)
        ) : (
          <div className="my-10 place-self-center">
            <p>{`Click the "Create a new note" box or the "+" button to make your first note.`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ResourcesComponent = () => {
  const [active, setActive] = useState<number | null>(null);
  const getIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <PDF />;
      case "ppt":
        return <PPT />;
      case "link":
        return <Link />;
      default:
        return <PDF />;
    }
  };
  const resources = [
    {
      title: "Lecture Slides",
      subtitle: "Overview of core concepts from module 6",
      type: "ppt",
    },
    {
      title: "The Future of Digital Research",
      subtitle: "Trends shaping digital research globally.",
      type: "link",
    },
    {
      title: "Understanding Research Innovation",
      subtitle: "Introductory guide to research workflows and digital tools.",
      type: "pdf",
    },
  ];
  return (
    <div className="flex flex-col gap-3 p-2">
      {resources.map((resource, index) => (
        <div
          onClick={() => setActive(index)}
          key={resource.title}
          className={`${active === index ? "border-primary border" : ""} rounded-[10px] px-6 py-2 shadow-xs`}
        >
          <h3 className="text-base font-semibold">{resource.title}</h3>
          <div className="flex gap-3">
            {getIcon(resource.type)}
            <p className="text-sm">{resource.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const QuizComponent = () => {
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { completed, showCompleted } = useContext(QuizCompletedContext);

  if (completed) {
    return (
      <div className="mt-20">
        <QuizCompletedComponent />
      </div>
    );
  }

  return (
    <div>
      <Quiz question={quizzes[currentQuestionIndex]} />
      <hr className="border-[#800080]" />
      <div className="mt-3 flex justify-between">
        <p className="text-[16px] font-[500]">{`Question ${
          currentQuestionIndex + 1
        } of ${quizzes.length}`}</p>
        <div className="mr-5 flex justify-end gap-10 text-[12px] font-bold">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
              className="secondary-button rounded-[5px] px-5 py-2 text-base font-[400]"
            >
              Previous
            </button>
          )}
          {currentQuestionIndex + 1 === quizzes.length ? (
            <button
              onClick={showCompleted}
              className="primary-button rounded-[5px] px-5 py-2 text-base font-[600] text-[#800080]"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              className="primary-button rounded-[5px] px-5 py-2 text-base font-[600] text-[#800080]"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassroomInteractiveComponent;
