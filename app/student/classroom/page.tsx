"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../../../public/student/classroom/9ffc5617ef490086ab82dbbdd34fab6a43d3977e.jpg";
import ClassroomInteractiveComponent from "@/components/student/classroom/ClassroomInteractiveComponent";
import ModulesComponent from "@/components/student/classroom/ModulesComponent";
import { ChevronLeft } from "lucide-react";

export default function Classroom() {
  const [showModules, setShowModules] = useState(false);
  const hideMobileModules = () => setShowModules(false);
  const [currentTab, setCurrentTab] = useState("Overview");
  const setTab = (tab: string) => setCurrentTab(tab);
  return (
    <div className="flex h-full w-full justify-items-center gap-2 bg-white md:p-2">
      <div className="flex w-full grow-1 flex-col items-center gap-2">
        <div
          className={`h-[40vh] w-full ${currentTab === "Quiz" ? "hidden" : ""}`}
        >
          <Image
            src={image1}
            alt="Module video"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-full w-full px-1 md:px-5">
          <ClassroomInteractiveComponent
            currentTab={currentTab}
            setTab={setTab}
          />
        </div>
      </div>
      <div
        className={`hidden w-150 flex-col sm:z-20 md:z-0 md:flex ${
          currentTab === "Quiz" ? "md:hidden" : ""
        }`}
      >
        <ModulesComponent />
      </div>
      <div
        className={`absolute right-0 z-20 flex flex-col md:hidden ${
          showModules ? "w-full" : ""
        } ${currentTab === "Quiz" ? "hidden" : ""}`}
      >
        {showModules ? (
          <ModulesComponent hideMobileModules={hideMobileModules} />
        ) : (
          <button
            className="flex place-items-center rounded-full bg-white p-2"
            onClick={() => setShowModules(true)}
          >
            <ChevronLeft height={24} width={24} strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
}
