"use client";
import Link from "@/components/icons/Link";
import PDF from "@/components/icons/Pdf";
import PPT from "@/components/icons/Ppt";
import { CourseContext } from "@/context/resourcesContext";
import { ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react";
import { useContext, useState } from "react";

const CourseComponent = () => {
  const { courses, modules, setCourse } = useContext(CourseContext);
  return (
    <div className="mt-2 flex flex-col gap-6">
      <h3 className="text-center text-3xl font-bold">All Course Resources</h3>
      <div className="flex flex-col gap-8">
        {courses?.map((course) => (
          <div
            key={course}
            className="flex flex-col gap-4 rounded-lg border px-4 py-5"
          >
            <div className="item-center flex justify-between">
              <h4 className="text-xl font-semibold">{course}</h4>
              <button
                onClick={() => setCourse(course)}
                className="primary-button rounded-lg px-4 py-2 text-[10px]"
              >
                Upload Resource
              </button>
            </div>
            <hr />
            <div className="h-50 gap-4 overflow-y-scroll">
              {modules?.map((module) => (
                <div
                  key={module.topic}
                  className="flex flex-col gap-2 border-b"
                >
                  <ModuleCard module={module} /> <hr />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ModuleCard = ({
  module,
}: {
  module: {
    topic: string;
    subModules: {
      topic: string;
      len: number;
      date: string;
      type: string;
      detail: string;
    }[];
    locked: boolean;
  };
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "ppt":
        return <PPT />;
      case "pdf":
        return <PDF />;
      default:
        return <Link />;
    }
  };
  const [focusedModule, setFocusedModule] = useState(
    module.subModules[0].topic,
  );

  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="item-center flex justify-between px-3 py-2">
        <h3 className="text-lg font-semibold">{module.topic}</h3>
        <button
          onClick={() =>
            setFocusedModule(focusedModule === module.topic ? "" : module.topic)
          }
        >
          {focusedModule === module.topic ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {focusedModule === module.topic && (
        <>
          <select
            defaultValue="review"
            className="self-end rounded-md border border-gray-200 bg-white px-3 py-2 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="review">Review</option>
            <option value="last-month">Last Month</option>
          </select>
          <div className="flex h-50 flex-col gap-3 overflow-y-scroll">
            {module.subModules.map((sub) => (
              <div
                key={sub.topic}
                className="hover:border-primary flex items-start justify-between rounded-lg border-[0.5px] px-3 py-2 shadow-xs"
              >
                <div className="flex flex-1 flex-col gap-1">
                  <h4 className="text-base font-semibold">{sub.topic}</h4>
                  <div className="flex items-center gap-3">
                    {getIcon(sub.type)}
                    <p className="flex-1 text-sm">{sub.detail}</p>
                  </div>
                  <p className="text-xs text-[#848484]">{`${sub.type.toUpperCase()} . Uploaded ${sub.date}`}</p>
                </div>
                <div className="cursor-pointer rounded-full p-1 hover:bg-[#84848420]">
                  <MoreHorizontal />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default CourseComponent;
