"use client";
/* eslint-disable @next/next/no-img-element */
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

interface LecturerProps {
  name: string;
  description: string;
  image: string;
  fullDescription: string;
}

const Lecturer = ({
  name,
  description,
  image,
  fullDescription,
}: LecturerProps) => {
  const [showInfo, setShowInfo] = useState<"hidden" | "block">("hidden");
  const hide = () => setShowInfo("hidden");
  const show = () => setShowInfo("block");
  return (
    <>
      <div
        onClick={show}
        className="m-2 flex h-[95%] w-[270px] transform flex-col overflow-hidden rounded-[10px] bg-[rgba(251,239,255,0.5)] p-3 shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] transition duration-500 ease-in-out hover:scale-105 hover:border-1 hover:border-[#800080]"
      >
        <img
          src={`/lecturers/${image}`}
          alt={name}
          className="h-[200px] w-full rounded-[10px] object-cover"
        />
        <div>
          <p className="mt-2 text-lg font-semibold lg:text-xl">{name}</p>
          <p className="mt-1 text-sm lg:text-[16px]">{description}</p>
        </div>
      </div>
      <div
        className={`fixed inset-0 top-0 left-0 z-[9999] h-screen w-screen bg-[rgba(0,0,0,0.0.8)] ${showInfo} flex items-center justify-center p-2`}
      >
        <div className="flex max-h-[800px] flex-col items-center justify-center rounded-[15px] border-2 border-[rgba(186,184,184,1)] bg-[rgba(255,255,255,1)] lg:w-[864px] lg:py-4">
          <div className="flex w-full flex-row justify-center md:gap-3">
            <div className="z-20 m-1 lg:m-2">
              <img
                src={`/lecturers/${image}`}
                alt={name}
                className="rounded-[10px] object-cover"
              />
            </div>
            <div className="flex flex-col p-2 md:p-4">
              <div className="flex justify-between">
                <div className="">
                  <p className="text-[16px] font-semibold lg:text-2xl">
                    {name}
                  </p>
                  <p className="text-sm font-light lg:text-[18px]">
                    {description}
                  </p>
                </div>
                <button
                  onClick={hide}
                  className="flex items-center justify-start"
                >
                  <X strokeWidth={2} />
                </button>
              </div>
              <div className="mt-4">
                <p className="text-[14px] lg:text-[20px]">{fullDescription}</p>
              </div>
            </div>
          </div>
          <a
            href=""
            className="tertiary-button mb-2 flex w-[280px] items-center justify-around text-sm text-[#800080] md:text-lg lg:mt-6"
          >
            <p>View Profile on LinkedIn </p>
            <ArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

const LecturerSection = () => {
  const lecturers = [
    {
      image: "969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png",
      name: "Dr. Trisha Okonkwo",
      description: "Senior Researcher, Digital Innovation Lab",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "09ab92f44c49a6107e70b39fce2dce6bae10f0bc.png",
      name: "Prof. Daniel Moore",
      description: "Data Scientist & Program Director, OpenGov Africa",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "7cba8ae7b7782b3bda40676797692db32276fc13.png",
      name: "Dr. Tunde Salami",
      description: "Research Methodology Instructor, EduBridge Institute",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "27242fe6e89ddc9cf434c0bd26a42f24c774a9f3.png",
      name: "Prof. Ifeoma Eze",
      description: "Lead Researcher, Centre for Advanced Learning Technologies",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png",
      name: "Dr. Trisha Okonkwo",
      description: "Senior Researcher, Digital Innovation Lab",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "09ab92f44c49a6107e70b39fce2dce6bae10f0bc.png",
      name: "Prof. Daniel Moore",
      description: "Data Scientist & Program Director, OpenGov Africa",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "7cba8ae7b7782b3bda40676797692db32276fc13.png",
      name: "Dr. Tunde Salami",
      description: "Research Methodology Instructor, EduBridge Institute",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
    {
      image: "27242fe6e89ddc9cf434c0bd26a42f24c774a9f3.png",
      name: "Prof. Ifeoma Eze",
      description: "Lead Researcher, Centre for Advanced Learning Technologies",
      fullDescription:
        "Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="mt-5 h-auto w-full p-2">
        <div className="relative mt-3 flex flex-row items-center justify-center gap-2 p-1">
          <button
            onClick={scrollLeft}
            className="z-10 transform cursor-pointer rounded-full border-1 border-[rgba(160,32,240,0.25)] bg-white p-1 shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] transition duration-150 ease-in hover:scale-110"
          >
            <ChevronLeft strokeWidth={3} color="#800080" />
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex h-full w-full grow-1 flex-row flex-nowrap justify-around overflow-x-auto scroll-smooth p-2 md:px-8"
          >
            {lecturers.map(({ name, image, description, fullDescription }) => (
              <div key={name} className="md:w-1/2">
                <Lecturer
                  name={name}
                  image={image}
                  description={description}
                  fullDescription={fullDescription}
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="z-10 transform cursor-pointer rounded-full border-1 border-[rgba(160,32,240,0.25)] bg-white p-1 shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] transition duration-150 ease-in hover:scale-110"
          >
            <ChevronRight strokeWidth={3} color="#800080" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LecturerSection;
