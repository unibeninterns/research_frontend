import Course from "@/interfaces/student/course";
import QuizModule from "@/interfaces/student/module";
import { Dispatch, SetStateAction, createContext } from "react";

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
