'use client';

import type React from 'react';
import { Bell, Upload, CheckCircle, CirclePlus } from 'lucide-react';

interface QuickAction {
  id: number;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

function QuickActions() {
  const quickActions: QuickAction[] = [
    {
      id: 1,
      title: 'Add Live Session',
      icon: <CirclePlus className='w-5 h-5' />,
      onClick: () => console.log('Add Live Session clicked'),
    },
    {
      id: 2,
      title: 'Send Announcement',
      icon: <Bell className='w-5 h-5' />,
      onClick: () => console.log('Send Announcement clicked'),
    },
    {
      id: 3,
      title: 'Upload Content',
      icon: <Upload className='w-5 h-5' />,
      onClick: () => console.log('Upload Content clicked'),
    },
    {
      id: 4,
      title: 'Approve Certificate',
      icon: <CheckCircle className='w-5 h-5' />,
      onClick: () => console.log('Approve Certificate clicked'),
    },
  ];

  return (
    <div className='border-[0.5px] px-4 py-6 flex flex-col gap-5 rounded-[5px]'>
      <div>
        <h3 className='text-[16px] font-bold'>Quick Actions</h3>
      </div>
      <div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-5'>
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className='flex items-center justify-center p-4 bg-white border border-[#FBEFFFE5] rounded-[5px] gap-3'
            >
              <div className='text-[#800080]'>{action.icon}</div>
              <span className='text-center text-sm'>{action.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
