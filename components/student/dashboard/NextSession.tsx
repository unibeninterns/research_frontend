import CalendarBlack from '@/components/icons/calendarBlack';
import PhoneBook from '@/components/icons/phoneBook';

const NextSession = () => {
  return (
    <div className='flex flex-col gap-2 p-4 rounded-[5px] shadow-sm items-start'>
      <p className='text-[10px] text-[#1E1E1E99] uppercase'>
        NEXT LIVE SESSION
      </p>
      <div>
        <h3 className='text-sm font-semibold'>Data Analysis & Visualization</h3>
        <p className='text-[#1E1E1EB2] text-xs font-semibold'>
          with Dr. Trisha Okonkwo
        </p>
      </div>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2 text-sm text-gray-600'>
          <CalendarBlack />
          <span className='text-xs font-[500]'>
            Wed, Aug 7 • 3:00 PM – 4:30 PM (WAT)
          </span>
        </div>
        <div className='flex items-center space-x-2 text-sm text-gray-600'>
          <PhoneBook />
          <span className='text-xs font-[500]'>Live on Zoom</span>
        </div>
      </div>
      <button className='primary-button rounded-[5px] px-4 py-2 text-xs font-semibold self-end mt-2'>
        JOIN SESSION
      </button>
    </div>
  );
};

export default NextSession;
