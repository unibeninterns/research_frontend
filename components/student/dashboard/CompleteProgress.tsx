import { ChevronDown } from 'lucide-react';
import DoughnutChart from './DoughnutChart';

const CompletedProgress = () => {
  return (
    <div className='flex flex-col items-center border-[0.5px] p-4 rounded-[5px] gap-5'>
      <h2 className='text-base font-bold  text-nowrap'>Certificate Progress</h2>
      <DoughnutChart />
      <button className='tertiary-button text-primary flex text-xs hover:bg-purple-50 text-nowrap'>
        <p>View requirements</p> <ChevronDown className='h-4 w-4 ml-1' />
      </button>
    </div>
  );
};

export default CompletedProgress;
