"use client";
import React from "react";

interface AdminCardInfo {
  icon: React.ReactNode;
  param: string;
  value: string | number;
}

export const AdminInfoCard = ({ icon, param, value }: AdminCardInfo) => {
  return (
    <div className="inline-flex items-start justify-start gap-5 rounded-[5px] p-4 outline-[0.5px] outline-zinc-300">
      <div className="flex items-center justify-center rounded-[50px] bg-[#FBEFFF] p-2 text-[#800080]">
        {icon}
      </div>
      <div className="inline-flex flex-1 flex-col items-start justify-center gap-1">
        <div className="justify-start self-stretch font-['Montserrat'] text-xs font-medium whitespace-nowrap text-stone-900">
          {param}
        </div>
        <div className="justify-start self-stretch font-['Montserrat'] text-xl font-semibold text-stone-900">
          {value}
        </div>
      </div>
    </div>
  );
};

const AdminInfoComponent = ({ cardInfo }: { cardInfo: AdminCardInfo[] }) => {
  return (
    <div
      className={`flex w-full p-1 ${
        cardInfo.length > 3 ? "overflow-x-scroll" : ""
      }`}
    >
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
      <div
        className={`flex gap-4 ${
          cardInfo.length > 3 ? "animate-scroll flex-nowrap" : ""
        }`}
      >
        {cardInfo &&
          cardInfo.map((info, index) => (
            <AdminInfoCard
              key={`first-${index}`}
              param={info.param}
              value={info.value}
              icon={info.icon}
            />
          ))}
        {cardInfo.length > 3 &&
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
