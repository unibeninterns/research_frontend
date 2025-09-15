import CircleDashed from '@/components/icons/circleDashed';
import Padlock2 from '@/components/icons/padlock2';
import TickCircleNormal from '@/components/icons/tickCircleNormal';
import { ArrowRight } from 'lucide-react';

interface ModuleInfo {
  number: number;
  title: string;
  status: string;
  info: string;
}
const Module = ({ module }: { module: ModuleInfo }) => {
  const getBadge = (status: string) => {
    if (status.toLowerCase() === 'completed') {
      return (
        <div className='bg-[#DEFFD8] text-[#1DAE00]  flex gap-2 items-center justify-center rounded-[5px] text-xs px-2 py-1.5'>
          <TickCircleNormal />
          <p>{status}</p>
        </div>
      );
    }
    if (status.toLowerCase() === 'in progress') {
      return (
        <div className='bg-[#FFF9E5] text-[#F6B600] flex gap-2 items-center justify-center rounded-[5px] text-xs px-2 py-1.5'>
          <CircleDashed />
          <p>{status}</p>
        </div>
      );
    }
    return (
      <div className='bg-[#EBEBEB] text-[#848484] flex gap-2 items-center justify-center rounded-[5px] text-xs px-2 py-1.5'>
        <Padlock2 />
        <p>{status}</p>
      </div>
    );
  };
  const getButton = (status: string) => {
    if (status.toLowerCase() === 'completed') {
      return (
        <button className='secondary-button flex justify-between gap-1 px-4 py-2 rounded-[5px] lg:text-xs items-center'>
          <p>View Summary</p>
          <ArrowRight height={15} />
        </button>
      );
    }
    if (status.toLowerCase() === 'in progress') {
      return (
        <button className='primary-button flex justify-between px-4 py-2 rounded-[5px] lg:text-xs items-center font-semibold'>
          <p>Unlock</p>
        </button>
      );
    }
    return (
      <button className='text-[#848484] bg-[#EBEBEB] flex justify-between px-4 py-2 rounded-[5px] lg:text-xs items-center font-semibold'>
        <p>Resume Module</p>
      </button>
    );
  };
  return (
    <div className='flex flex-col p-4 border-[0.5px] border-[#D9D9D9] rounded-[5px] items-start gap-5'>
      <div className='flex flex-col gap-2 items-start'>
        <p className='text-[12px] text-[#1E1E1E99]'>Module {module.number}</p>
        <h3 className='text-sm font-[600]'>{module.title}</h3>
        {getBadge(module.status)}
        <p className='text-xs text-[#1E1E1E99] font-[600]'>{module.info}</p>
      </div>
      {getButton(module.status)}
    </div>
  );
};

const ModulesComponent = () => {
  const modules: ModuleInfo[] = [
    {
      number: 6,
      title: 'Data Cleaning & Processing',
      status: 'Completed',
      info: '3 of 3 Lessons Completed',
    },
    {
      number: 7,
      title: 'Data Analysis & Visualization',
      status: 'In Progress',
      info: '1 of 3 Lessons Completed',
    },
    {
      number: 8,
      title: 'Academic Writing & Referencing',
      status: 'Locked',
      info: 'Unlock after completing Module 7',
    },
  ];
  return (
    <div className='flex gap-5 items-start'>
      {modules.map((module) => (
        <Module key={module.title} module={module} />
      ))}
    </div>
  );
};
export default ModulesComponent;
