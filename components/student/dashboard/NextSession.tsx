import CalendarBlack from "@/components/icons/CalendarBlack";
import PhoneBook from "@/components/icons/PhoneBook";

const NextSession = () => {
  return (
    <div className="flex flex-col items-start gap-2 rounded-[5px] p-4 shadow-sm">
      <p className="text-[10px] text-[#1E1E1E99] uppercase">
        NEXT LIVE SESSION
      </p>
      <div>
        <h3 className="text-sm font-semibold">Data Analysis & Visualization</h3>
        <p className="text-xs font-semibold text-[#1E1E1EB2]">
          with Dr. Trisha Okonkwo
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CalendarBlack />
          <span className="text-xs font-[500]">
            Wed, Aug 7 • 3:00 PM – 4:30 PM (WAT)
          </span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <PhoneBook />
          <span className="text-xs font-[500]">Live on Zoom</span>
        </div>
      </div>
      <button className="primary-button mt-2 self-end rounded-[5px] px-4 py-2 text-xs font-semibold">
        JOIN SESSION
      </button>
    </div>
  );
};

export default NextSession;
