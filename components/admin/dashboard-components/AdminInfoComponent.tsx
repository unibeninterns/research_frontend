'use client';
import React from 'react';

interface AdminCardInfo {
  icon: React.ReactNode;
  param: string;
  value: string;
}

export const AdminInfoCard = ({ icon, param, value }: AdminCardInfo) => {
  return (
    <div className='p-4 rounded-[5px] outline-[0.50px] outline-zinc-300 inline-flex justify-start items-center gap-5'>
      <div className='p-2 bg-fuchsia-50 rounded-[50px] flex justify-center items-center text-fuchsia-800'>
        {icon}
      </div>
      <div className='flex-1 inline-flex flex-col justify-center items-start gap-1'>
        <div className="self-stretch justify-start text-stone-900 text-xs font-medium font-['Montserrat'] whitespace-nowrap">
          {param}
        </div>
        <div className="self-stretch justify-start text-stone-900 text-2xl font-semibold font-['Montserrat']">
          {value}
        </div>
      </div>
    </div>
  );
};

const AdminInfoComponent = ({ cardInfo }: { cardInfo?: AdminCardInfo[] }) => {
  return (
    <div className='flex overflow-x-scroll p-1 w-full'>
      <style jsx>{`
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
      <div className='flex gap-4 animate-scroll flex-nowrap'>
        {cardInfo &&
          cardInfo.map((info, index) => (
            <AdminInfoCard
              key={`first-${index}`}
              param={info.param}
              value={info.value}
              icon={info.icon}
            />
          ))}
        {cardInfo &&
          cardInfo.map((info, index) => (
            <AdminInfoCard
              key={`second-${index}`}
              param={info.param}
              value={info.value}
              icon={info.icon}
            />
          ))}
      </div>
    </div>
  );
};

export default AdminInfoComponent;
