'use client';
import { useState } from 'react';
import {UpcomingEventComponent, LiveEventComponent, PastEventComponent} from '@/components/student/sessions/EventComponent';

export default function Sessions() {
  const tabs = ['Upcoming', 'Live', 'Past'];

  const [currentTab, setCurrentTab] = useState('Upcoming');
  return (
      <div className='md:p-6 p-2 w-full'>
        <div className=' mb-2 md:mb-6'>
          <h1 className='text-[28px] md:text-[32px] font-bold text-gray-900'>Live Sessions</h1>
          <p className='text-[16px] md:text-[20px]'>
            Join our weekly sessions to interact with tutors and deepen your
            learning.
          </p>
        </div>
        <div className='relative w-full shadow-xs'>
          <div className='flex w-full items-center justify-start gap-[36px] md:gap-[72px]'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`text-[14px] md:text-[16px] font-semibold ${
                  currentTab === tab
                    ? 'text-[#800080] border-b-[#800080] border-b z-2 transition duration-100 ease-in-out transform scale-102'
                    : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <hr className='absolute bottom-0 w-full' />
        </div>
        <div className='w-full mt-2'>
          {currentTab === 'Upcoming' ? <UpcomingComponent /> : currentTab === 'Live' ? <LiveComponent /> : currentTab === 'Past' ? <PastComponent /> : null}
        </div>
      </div>
  );
}

const UpcomingComponent = () => {
  const events = [
    {
      tag: 'this week',
      topic: 'Week 8: Academic Writing & Referencing',
      date: 'Saturday, September 7, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Mfon Udoka',
    },
    {
      tag: 'upcoming',
      topic: 'Week 9: Strategic Visibility & Personal Rebranding',
      date: 'Saturday, September 14, 2025',
      time: '',
      facilitator: '',
    },
    {
      tag: 'upcoming',
      topic: 'Week 10: Proposal & Grant Writing',
      date: 'Saturday, September 21, 2025',
      time: '',
      facilitator: '',
    },
    {
      tag: 'upcoming',
      topic: 'Week 11: Capstone Project Weeks',
      date: 'Saturday, September 28, 2025',
      time: '',
      facilitator: '',
    },
  ];
  return (
    <div className='flex-col flex w-full md:w-[80%] gap-3 items-start overflow-ellipsis'>
      {events.map((event) => (
        <UpcomingEventComponent key={event.topic} event={event}/>
      ))}
    </div>
  );
};

const LiveComponent = () => {
  const events = [
    {
      tag: 'live now',
      topic: 'Week 7: Data Analysis & Visualization',
      date: 'Saturday, August 30, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Trisha Okonkwo',
    },
  ];
  return (
    <div className='flex-col flex w-full md:w-[80%] gap-3 items-start overflow-ellipsis'>
      {events.map((event) => (
        <LiveEventComponent key={event.topic} event={event}/>
      ))}
    </div>
  );
};

const PastComponent = () => {
  const events = [
    {
      tag: 'completed',
      topic: 'Week 1: Introduction to Research in the 21st Century',
      date: 'Saturday, August 9, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Mfon Udoka',
    },
    {
      tag: 'completed',
      topic: 'Week 2: Research Design Fundamentals',
      date: 'Saturday, August 16, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Prof. Adewale Martins',
    },
    {
      tag: 'missed',
      topic: 'Week 6: Data Cleaning & Preprocessing',
      date: 'Saturday, August 23, 2025',
      time: '4:00 PM – 5:00 PM (WAT)',
      facilitator: 'Dr. Musa Ibrahim',
    },
  ];
  return (
    <div className='flex-col flex w-full md:w-[80%] gap-3 items-start overflow-ellipsis'>
      {events.map((event) => (
        <PastEventComponent key={event.topic} event={event}/>
      ))}
    </div>
  );
};
