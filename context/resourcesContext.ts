import { AdminResourceModule } from "@/types/module";
import { Dispatch, SetStateAction, createContext } from "react";

export const CourseContext = createContext<{
  course: string | null;
  setCourse: Dispatch<SetStateAction<string | null>>;
  courses: string[] | null;
  modules: AdminResourceModule[] | null;
}>({
  course: null,
  setCourse: () => {},
  modules: null,
  courses: null,
});
