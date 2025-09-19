"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import "./calendar.css";
import AdminSearchBar from "../../dashboard-components/AdminSearchBar";
import CalendarPlus from "@/components/icons/calendarPlus";

interface Event {
  title: string;
  extendedProps?: {
    speaker: string;
    time?: string;
    type: "Completed" | "Cancelled" | "Upcoming";
  };
  start: string;
  end?: string;
}

const Calendar = () => {
  const events: Event[] = [
    {
      title: "Module 7: Data Analysis",
      extendedProps: {
        speaker: "Dr. Trisha",
        time: "10:00 AM",
        type: "Completed",
      },
      start: "2025-08-31",
    },
    {
      title: "Module 8: Academic Writing",
      extendedProps: {
        speaker: "Dr. Trisha",
        time: "10:00 AM",
        type: "Upcoming",
      },
      start: "2025-09-06",
    },
    {
      title: "Module 9: Strategic Visibility",
      extendedProps: {
        speaker: "Dr. Trisha",
        time: "10:00 AM",
        type: "Upcoming",
      },
      start: "2025-09-13",
    },
    {
      title: "Module 10: Proposal & Grant Writing",
      extendedProps: {
        speaker: "Dr. Trisha",
        type: "Cancelled",
      },
      start: "2025-09-15",
    },
    {
      title: "Module 10: Proposal & Grant Writing",
      extendedProps: {
        speaker: "Dr. Trisha",
        time: "10:00 AM",
        type: "Upcoming",
      },
      start: "2025-09-18",
    },
    {
      title: "Module 11: Capstone Project",
      extendedProps: {
        speaker: "Dr. Trisha",
        type: "Cancelled",
      },
      start: "2025-09-27",
    },
  ];

  const calendarRef = useRef<FullCalendar>(null);
  const handlePrevClick = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().prev();
    }
  };

  const handleNextClick = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().next();
    }
  };

  const headerToolbar = {
    left: "customPrev",
    center: "title",
    right: "customNext",
  };

  const customButtons = {
    customPrev: {
      text: "",
      icon: "chevron-left",
      click: handlePrevClick,
    },
    customNext: {
      text: "",
      icon: "chevron-right",
      click: handleNextClick,
    },
  };
  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="flex-1 text-[16px] font-semibold text-gray-900">
          Schedule
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
            defaultValue="this-week"
            className="truncate rounded-md border border-gray-200 bg-white px-3 py-2 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="this-week">This Week</option>
            <option value="last-month">Last Month</option>
          </select>
          <button
            // onClick={handleAddStudent}
            className="secondary-button flex items-center gap-2 rounded-[5px] px-4 py-2 text-[10px] text-nowrap"
          >
            <CalendarPlus size={10} />
            <p>Schedule New Session</p>
          </button>
        </div>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
        customButtons={customButtons}
        events={events}
        eventContent={EventComponent}
      />
    </div>
  );
};

export default Calendar;

const EventComponent = ({ event }: { event: Event }) => {
  const { title, extendedProps } = event;
  const type = extendedProps?.type;
  const speaker = extendedProps?.speaker;
  const time = extendedProps?.time;

  return (
    <div
      className={`flex flex-col gap-2 px-2 py-1 text-[10px] font-[500] text-wrap text-black ${type === "Completed" ? "bg-[#DEFFD8]" : type === "Upcoming" ? "bg-[#FBEFFF]" : "bg-[#FFDCDD]"}`}
    >
      <p>{title}</p>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p>{speaker}</p>
          {type === "Cancelled" && (
            <p className="font-[600] text-[#FF383C]">{type}</p>
          )}
        </div>
        {type !== "Cancelled" && (
          <div
            className={`flex items-center justify-between font-[600] ${type === "Completed" ? "text-[#1DAE00]" : "text-[#800080]"}`}
          >
            <p>{type}</p>
            <span>.</span>
            <p>{time}</p>
          </div>
        )}
      </div>
    </div>
  );
};
