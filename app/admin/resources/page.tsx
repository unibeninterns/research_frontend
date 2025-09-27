"use client";
import CourseComponent from "@/components/admin/resources/CourseComponent";
import ResourcesHeader, {
  EditCourseComponent,
} from "@/components/admin/resources/ResourcesHeader";
import { CourseContext } from "@/context/resourcesContext";
import { useState } from "react";

const Resources = () => {
  const modules = [
    {
      topic: "Module 1: Introduction to Research in the 21st Century",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 2: Research Design Fundamentals",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 3: Literature Review & Knowledge Management",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 4: AI & Digital Tools for Research",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 5: Data Collection Methods",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 6: Data Cleaning & Preprocessing",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 7: Data Analysis & Visualization",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: false,
    },
    {
      topic: "Module 8: Academic Writing & Referencing",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: true,
    },
    {
      topic: "Module 9: Strategic Visibility & Personal Rebranding",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: true,
    },
    {
      topic: "Module 10: Proposal & Grant Writing",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: true,
    },
    {
      topic: "Module 11: Capstone Project Week",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: true,
    },
    {
      topic: "Module 12: Final Exam & Portfolio Presentation",
      subModules: [
        {
          detail: "Overview of core concepts from module 6.",
          len: 4,
          topic: "Lecture Slides",
          date: "Aug 10 2025",
          type: "ppt",
        },
        {
          detail: "Trends shaping digital research globally.",
          len: 23,
          topic: "The Future of Digital Research",
          date: "Aug 10 2025",
          type: "link",
        },
        {
          detail: "Introductory guide to research workflows and digital tools.",
          len: 23,
          topic: "Understanding Research Innovation",
          date: "Aug 10 2025",
          type: "pdf",
        },
      ],
      locked: true,
    },
  ];
  const courses = [
    "Research Innovation",
    "Data Analysis",
    "Ui/UX Design",
    // "Cybersecurity",
    // "Artificial Intelligence",
    // "CorelDraw",
    // "InDesign",
    // "Canva",
    // "Webflow",
    // "Affinity",
  ];
  const [course, setCourse] = useState<string | null>(null);
  return (
    <CourseContext.Provider value={{ course, setCourse, modules, courses }}>
      <div className="mt-6">
        {course && <ResourcesHeader />}
        {course ? <EditCourseComponent /> : <CourseComponent />}
      </div>
    </CourseContext.Provider>
  );
};

export default Resources;
