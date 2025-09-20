"use client";
import AdminInfoComponent from "@/components/admin/AdminInfoComponent";
import Courses from "@/components/admin/quizzes/Courses";
import Modules from "@/components/admin/quizzes/Modules";
import QuizComponent from "@/components/admin/quizzes/AdminQuizComponent";
import QuizHeader from "@/components/admin/quizzes/QuizHeader";
// import Assessment from "@/components/icons/assessment";
import Assessment from "@/components/icons/Assessment";
import SessionsTick from "@/components/icons/SessionsTick";
import Steps from "@/components/icons/Steps";
import { CourseModuleContext } from "@/context/course-module";
import Course from "@/types/course";
import QuizModule from "@/types/module";
import { Pencil } from "lucide-react";
import { useState } from "react";

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
        <div>
          {module ? (
            <QuizComponent />
          ) : course ? (
            <Modules />
          ) : (
            <Courses courses={courses} />
          )}
        </div>
      </div>
    </CourseModuleContext.Provider>
  );
};

export default Quizzes;
