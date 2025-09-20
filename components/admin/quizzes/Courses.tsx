import { ChevronRight, Plus } from "lucide-react";
import { useContext } from "react";
import AdminSearchBar from "../dashboard-components/AdminSearchBar";
import { CourseModuleContext } from "@/context/course-module";
import Course from "@/types/course";

const Courses = ({ courses }: { courses: Course[] }) => {
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
        {[...courses, ...courses, ...courses].map((course) => (
          <CourseComponent key={course.course} course={course} />
        ))}
      </div>
    </div>
  );
};

const CourseComponent = ({ course }: { course: Course }) => {
  const { setCourse } = useContext(CourseModuleContext);
  const getBadge: (mode: Course["mode"]) => string = (mode) => {
    switch (mode) {
      case "Published":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "Archived":
        return "bg-[#EBEBEB] text-[#848484]";
      default:
        return "bg-[#FFF9E5] text-[#F6B600]";
    }
  };
  return (
    <div className="flex flex-col gap-5 rounded-[5px] border px-4 py-6">
      <div className="flex justify-between">
        <h3 className="text-base font-semibold">{course.course}</h3>
        <p
          className={`rounded-[5px] px-2 py-1 text-[10px] ${getBadge(course.mode)} `}
        >
          {course.mode}
        </p>
      </div>
      <div className="flex gap-16 text-xs">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex justify-between">
            <p>Modules</p>
            <p>{course.modules}</p>
          </div>
          <div className="flex justify-between">
            <p>Quizzes</p>
            <p>{course.quizzes}</p>
          </div>
          <div className="flex justify-between">
            <p>Avg. Score</p>
            <p>{course.avgScore}</p>
          </div>
          <div className="flex justify-between">
            <p>Completion</p>
            <p>{course.completion}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2">
          <p>Total Questions</p>
          <p className="text-xl font-semibold">{course.totalQuestions}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <button
          onClick={() => setCourse(course)}
          className="secondary-button rounded-[5px] px-4 py-2"
        >
          Manage
        </button>
        <button className="tertiary-button text-primary flex items-center rounded-[5px] px-4 py-2 text-xs">
          <p>View Details</p>
          <ChevronRight className="mt-0.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Courses;
