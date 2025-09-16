"use client";
import { useState } from "react";
import {
  UpcomingEventComponent,
  LiveEventComponent,
  PastEventComponent,
} from "@/components/student/sessions/EventComponent";

export default function Sessions() {
  const tabs = ["Upcoming", "Live", "Past"];

  const [currentTab, setCurrentTab] = useState("Upcoming");
  return (
    <div className="w-full p-2 md:p-6">
      <div className="mb-2 md:mb-6">
        <h1 className="text-[28px] font-bold text-gray-900 md:text-[32px]">
          Live Sessions
        </h1>
        <p className="text-[16px] md:text-[20px]">
          Join our weekly sessions to interact with tutors and deepen your
          learning.
        </p>
      </div>
      <div className="relative w-full shadow-xs">
        <div className="flex w-full items-center justify-start gap-[36px] md:gap-[72px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`text-[14px] font-semibold md:text-[16px] ${
                currentTab === tab
                  ? "z-2 scale-102 transform border-b border-b-[#800080] text-[#800080] transition duration-100 ease-in-out"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className="absolute bottom-0 w-full" />
      </div>
      <div className="mt-2 w-full">
        {currentTab === "Upcoming" ? (
          <UpcomingComponent />
        ) : currentTab === "Live" ? (
          <LiveComponent />
        ) : currentTab === "Past" ? (
          <PastComponent />
        ) : null}
      </div>
    </div>
  );
}

const UpcomingComponent = () => {
  const events = [
    {
      tag: "this week",
      topic: "Week 8: Academic Writing & Referencing",
      date: "Saturday, September 7, 2025",
      time: "4:00 PM – 5:00 PM (WAT)",
      facilitator: "Dr. Mfon Udoka",
    },
    {
      tag: "upcoming",
      topic: "Week 9: Strategic Visibility & Personal Rebranding",
      date: "Saturday, September 14, 2025",
      time: "",
      facilitator: "",
    },
    {
      tag: "upcoming",
      topic: "Week 10: Proposal & Grant Writing",
      date: "Saturday, September 21, 2025",
      time: "",
      facilitator: "",
    },
    {
      tag: "upcoming",
      topic: "Week 11: Capstone Project Weeks",
      date: "Saturday, September 28, 2025",
      time: "",
      facilitator: "",
    },
  ];
  return (
    <div className="flex w-full flex-col items-start gap-3 overflow-ellipsis md:w-[80%]">
      {events.map((event) => (
        <UpcomingEventComponent key={event.topic} event={event} />
      ))}
    </div>
  );
};

const LiveComponent = () => {
  const events = [
    {
      tag: "live now",
      topic: "Week 7: Data Analysis & Visualization",
      date: "Saturday, August 30, 2025",
      time: "4:00 PM – 5:00 PM (WAT)",
      facilitator: "Dr. Trisha Okonkwo",
    },
  ];
  return (
    <div className="flex w-full flex-col items-start gap-3 overflow-ellipsis md:w-[80%]">
      {events.map((event) => (
        <LiveEventComponent key={event.topic} event={event} />
      ))}
    </div>
  );
};

const PastComponent = () => {
  const events = [
    {
      tag: "completed",
      topic: "Week 1: Introduction to Research in the 21st Century",
      date: "Saturday, August 9, 2025",
      time: "4:00 PM – 5:00 PM (WAT)",
      facilitator: "Dr. Mfon Udoka",
    },
    {
      tag: "completed",
      topic: "Week 2: Research Design Fundamentals",
      date: "Saturday, August 16, 2025",
      time: "4:00 PM – 5:00 PM (WAT)",
      facilitator: "Prof. Adewale Martins",
    },
    {
      tag: "missed",
      topic: "Week 6: Data Cleaning & Preprocessing",
      date: "Saturday, August 23, 2025",
      time: "4:00 PM – 5:00 PM (WAT)",
      facilitator: "Dr. Musa Ibrahim",
    },
  ];
  return (
    <div className="flex w-full flex-col items-start gap-3 overflow-ellipsis md:w-[80%]">
      {events.map((event) => (
        <PastEventComponent key={event.topic} event={event} />
      ))}
    </div>
  );
};
