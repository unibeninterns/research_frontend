import CheckCircle from '@/components/icons/checkCircle';
import BookCheck from '@/components/icons/bookCheck';
import Downloaded from '@/components/icons/downloaded';
import { ChevronDown } from 'lucide-react';

const RecentActivities = () => {
  const recentActivities = [
    {
      icon: <CheckCircle size={16} />,
      title: 'Completed Module 6',
      text: 'Data Cleaning & Preprocessing',
    },
    {
      icon: <BookCheck />,
      title: 'Attempted Quiz 6',
      text: 'Score: 80%',
    },
    {
      icon: <Downloaded />,
      title: 'Downloaded',
      text: 'Data Analysis pdf',
    },
  ];
  return (
    <div className='flex flex-col py-6 px-4 gap-4 items-start justify-start border rounded-[5px]'>
      <h2 className='text-base font-bold'>Recent Activities</h2>
      <div className='flex flex-col gap-3'>
        {recentActivities.map((a) => (
          <div key={a.title} className='flex items-start justify-start gap-2'>
            <div className='mt-1'>{a.icon}</div>
            <div>
              <p className='text-xs font-semibold'>{a.title}</p>
              <p className='text-[10px] font-light'>{a.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='tertiary-button text-[#800080] text-[10px] flex self-center'>
        View all activities <ChevronDown className='h-4 w-4 ml-1' />
      </button>
    </div>
  );
};

export default RecentActivities;
