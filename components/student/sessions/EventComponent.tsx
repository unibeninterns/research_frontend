interface Event {
  tag: string;
  topic: string;
  date: string;
  time: string;
  facilitator: string;
}
export const UpcomingEventComponent = ({ event }: { event: Event }) => {
  // #TODO: use the time instead to change this
  const getBadgeStyles = (tag: string) => {
    switch (tag) {
      case "this week":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "upcoming":
        return "bg-[#FFF9E5] text-[#F6B600]";
      default:
        return "bg-[#FFF9E5] text-[#F6B600]";
    }
  };
  return (
    <div className="flex w-full items-center border-b-2">
      <div className="flex w-full flex-col py-2 md:p-4">
        <div className="flex items-start">
          <div
            className={`${getBadgeStyles(
              event.tag,
            )} rounded-[5px] px-2 py-1 text-[10px] font-medium text-nowrap uppercase`}
          >
            {event.tag}
          </div>
          <h3 className="ml-4 text-[14px] font-bold md:ml-10 md:text-[16px]">
            {event.topic}
          </h3>
        </div>
        <div className="mt-1 flex gap-4 text-[12px] md:text-[16px]">
          <div className="flex flex-1 flex-col">
            <p className="font-medium text-[#1E1E1EB2]">{event.date}</p>
            <p
              className={`font-medium ${
                event.time ? "font-bold" : "text-[#A3A3A3]"
              }`}
            >
              {event.time ? event.time : "To be Announced"}
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className={`font-medium text-[#1E1E1EB2]`}>Facilitator</p>
            <p
              className={`font-medium ${
                event.time ? "font-bold" : "text-[#A3A3A3]"
              }`}
            >
              {event.facilitator ? event.facilitator : "To be Announced"}
            </p>
          </div>
        </div>
      </div>
      <button className="rounded-[5px] bg-[#800080] px-[8px] py-[6px] text-[10px] font-semibold text-nowrap text-white md:px-[16px] md:py-[8px]">
        Join Session
      </button>
    </div>
  );
};

export const LiveEventComponent = ({ event }: { event: Event }) => {
  // #TODO: use the time instead to change this`
  const getBadgeStyles = (tag: string) => {
    switch (tag) {
      case "live now":
        return "bg-[#FBEFFF] text-[#800080]";
      default:
        return "bg-[#FFF9E5] text-[#F6B600]";
    }
  };
  return (
    <div className="flex w-full items-center border-b-2">
      <div className="flex w-full flex-col py-2 md:p-4">
        <div className="flex items-start">
          <div
            className={`${getBadgeStyles(
              event.tag,
            )} rounded-[5px] px-2 py-1 text-[10px] font-medium text-nowrap uppercase`}
          >
            {event.tag}
          </div>
          <h3 className="ml-4 text-[14px] font-bold md:ml-10 md:text-[16px]">
            {event.topic}
          </h3>
        </div>
        <div className="mt-1 flex text-[12px] md:text-[16px]">
          <div className="flex flex-1 flex-col">
            <p className="font-medium text-[#1E1E1EB2]">{event.date}</p>
            <p
              className={`font-medium ${
                event.time ? "font-bold" : "text-[#A3A3A3]"
              }`}
            >
              {event.time ? event.time : "To be Announced"}
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <p
              className={`font-medium ${
                event.time ? "font-bold" : "text-[#A3A3A3]"
              }`}
            >
              Facilitator
            </p>
            <p className="font-medium text-[#1E1E1EB2]">{event.date}</p>
          </div>
        </div>
      </div>
      <button className="rounded-[5px] bg-[#800080] px-[8px] py-[6px] text-[10px] font-semibold text-white md:px-[16px] md:py-[8px]">
        Add to Calendar
      </button>
    </div>
  );
};

export const PastEventComponent = ({ event }: { event: Event }) => {
  // #TODO: use the time instead to change this
  const getBadgeStyles = (time: string) => {
    switch (time) {
      case "completed":
        return "bg-[#EBEBEB] text-[#848484]";
      case "missed":
        return "bg-[#FFDCDD] text-[#FF383C]";
      default:
        return "bg-[#FFDCDD] text-[#FF383C]";
    }
  };
  return (
    <div className="flex w-full items-center border-b-2">
      <div className="flex w-full flex-col py-2 md:p-4">
        <div className="flex items-start">
          <div
            className={`${getBadgeStyles(
              event.tag,
            )} rounded-[5px] px-2 py-1 text-[10px] font-medium uppercase`}
          >
            {event.tag}
          </div>
          <h3 className="ml-4 text-[14px] font-bold md:ml-10 md:text-[16px]">
            {event.topic}
          </h3>
        </div>
        <div className="mt-1 flex text-[12px] md:text-[16px]">
          <div className="flex flex-1 flex-col">
            <p className="font-medium text-[#1E1E1EB2]">{event.date}</p>
            <p
              className={`font-medium ${
                event.time ? "font-bold" : "text-[#A3A3A3]"
              }`}
            >
              {event.time ? event.time : "To be Announced"}
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <p
              className={`font-medium ${
                event.time ? "font-bold" : "text-[#A3A3A3]"
              }`}
            >
              Facilitator
            </p>
            <p className="font-medium text-[#1E1E1EB2]">{event.facilitator}</p>
          </div>
        </div>
      </div>
      <button className="rounded-[5px] border border-[#800080] px-[8px] py-[6px] text-[10px] font-semibold text-[#800080] md:px-[16px] md:py-[8px]">
        Watch Replay
      </button>
    </div>
  );
};

// export default UpcomingEventComponent;
