"use client";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import Courses from "@/components/admin/quizzes/Courses";
import Modules from "@/components/admin/quizzes/Modules";
import QuizHeader from "@/components/admin/quizzes/quizHeader";
import Assessment from "@/components/icons/assessment";
import SessionsTick from "@/components/icons/sessionsTick";
import Steps from "@/components/icons/steps";
import { Pencil } from "lucide-react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  // useEffect,
  useState,
} from "react";

export interface Course {
  course: string;
  modules: number;
  quizzes: number;
  avgScore: string;
  completion: string;
  totalQuestions: number;
  mode: "Published" | "Archived" | "Draft";
}

export interface QuizModule {
  module: number;
  topic: string;
  quizQuestions: number;
  timeLimit: number | null;
  attemptsAllowed: number;
  gradingType: "Auto" | "Manual";
  mode: "Active" | "Draft";
}

export const CourseModuleContext = createContext<{
  course: Course | null;
  setCourse: Dispatch<SetStateAction<Course | null>>;
  module: QuizModule | null;
  setModule: Dispatch<SetStateAction<QuizModule | null>>;
}>({
  course: null,
  setCourse: () => {},
  module: null,
  setModule: () => {},
});
const Quizzes = () => {
  const cardInfo = [
    {
      icon: <Assessment />,
      param: "Total Quizzes",
      value: "84",
    },
    {
      icon: <SessionsTick />,
      param: "Active Quizzes",
      value: "48",
    },
    {
      icon: <Pencil />,
      param: "Draft Quizzes",
      value: "36",
    },
    {
      icon: <Steps />,
      param: "Average Completions",
      value: "2",
    },
  ];

  const courses: Course[] = [
    {
      course: "Research Technologies and Innovation",
      modules: 12,
      quizzes: 12,
      avgScore: "78%",
      completion: "2%",
      totalQuestions: 50,
      mode: "Published",
    },
    {
      course: "Data Analytics",
      modules: 12,
      quizzes: 12,
      avgScore: "78%",
      completion: "0%",
      totalQuestions: 40,
      mode: "Draft",
    },
    {
      course: "UI UX Bootcamp",
      modules: 12,
      quizzes: 12,
      avgScore: "78%",
      completion: "100%",
      totalQuestions: 50,
      mode: "Archived",
    },
    {
      course: "Cybersecurity Essentials",
      modules: 12,
      quizzes: 12,
      avgScore: "78%",
      completion: "10%",
      totalQuestions: 50,
      mode: "Published",
    },
  ];

  const [course, setCourse] = useState<Course | null>(null);
  const [module, setModule] = useState<QuizModule | null>(null);

  // useEffect(() => {
  //   setCourse(null);
  //   setModule(null);
  // }, []);

  return (
    <CourseModuleContext.Provider
      value={{ course, setCourse, module, setModule }}
    >
      <div className="mt-5 pb-10">
        {course ? <QuizHeader /> : <AdminInfoComponent cardInfo={cardInfo} />}
        <div>{course ? <Modules /> : <Courses courses={courses} />}</div>
      </div>
    </CourseModuleContext.Provider>
  );
};

export default Quizzes;
