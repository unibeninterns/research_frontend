import { CourseModuleContext } from "@/app/admin/quizzes/page";
import VerticalLine from "@/components/icons/verticalLine";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";

const QuizHeader = () => {
  const { course, setCourse, module, setModule } =
    useContext(CourseModuleContext);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-2 text-sm font-[500]">
        <p>Quizzes</p>
        <ChevronRight />
        <button
          onClick={() => {
            if (!module) setCourse(null);
          }}
          className={`${module ? "" : "text-primary tertiary-button cursor-pointer"}`}
        >
          <p>{course?.course}</p>
        </button>
        {module && (
          <>
            <ChevronRight />
            <button
              onClick={() => setModule(null)}
              className="text-primary tertiary-button cursor-pointer"
            >
              <p>{`module ${module.module}`}</p>
            </button>
          </>
        )}
      </div>
      {module ? (
        <h3 className="text-xl font-semibold">{`Module ${module?.module}: ${module?.topic}`}</h3>
      ) : (
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold">{course?.course}</h3>
          <div className="flex items-center gap-4 text-xs text-[#848484]">
            <div className="flex gap-3">
              <p>Modules</p>
              <p>{course?.modules}</p>
            </div>
            <VerticalLine />
            <div className="flex gap-3">
              <p>Quizzes</p>
              <p>{course?.quizzes}</p>
            </div>
            <VerticalLine />
            <div className="flex gap-3">
              <p>Total Questions</p>
              <p>{course?.totalQuestions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizHeader;
