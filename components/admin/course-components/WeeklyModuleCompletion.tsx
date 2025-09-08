import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ModuleData {
  week: string;
  moduleTitle: string;
  completionRate: string;
}

export function WeeklyModuleCompletion() {
  const moduleData: ModuleData[] = [
    {
      week: 'Week 1',
      moduleTitle: 'Introduction to Research',
      completionRate: '78%',
    },
    {
      week: 'Week 2',
      moduleTitle: 'Research Design Fundamentals',
      completionRate: '56%',
    },
    {
      week: 'Week 3',
      moduleTitle: 'Literature Review & Knowledge Management',
      completionRate: '40%',
    },
    {
      week: 'Week 4',
      moduleTitle: 'AI & Digital Tools for Research',
      completionRate: '0%',
    },
    {
      week: 'Week 5',
      moduleTitle: 'Data Collection Methods',
      completionRate: '0%',
    },
    {
      week: 'Week 6',
      moduleTitle: 'Data Cleaning & Preprocessing',
      completionRate: '0%',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(moduleData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  {
    /* Desktop Table */
  }

  return (
    <div className='flex flex-col md:gap-6 rounded-[10px] bg-white p-4 md:p-6 border border-gray-200'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[16px] font-bold flex-1'>
          Weekly Module Completion
        </h2>
        <div className='flex flex-row gap-8'>
          <select
            defaultValue='research-technologies'
            className='w-32 px-2 py-1 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#800080] text-[10px] truncate'
          >
            <option value='research-technologies'>Research Technologies</option>
            <option value='last-month'>Last Month</option>
          </select>
          <select
            defaultValue='weekly'
            className='w-32 px-2 py-1 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#800080] text-[10px] truncate'
          >
            <option value='weekly'>Weekly</option>
            <option value='last-month'>Last Month</option>
          </select>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='p-[12px] bg-[#FBEFFF80]'>
              <th className='text-left p-3 text-[14px] font-medium'>Week</th>
              <th className='text-left p-3 text-[14px] font-medium'>
                Module Title
              </th>
              <th className='text-left p-3 text-[14px] font-medium'>
                Avg. Completion Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {moduleData.map((module: ModuleData, index: number) => (
              <tr
                key={index}
                className='border-b border-gray-100 hover:bg-gray-50'
              >
                <td className='p-3 text-sm'>{module.week}</td>
                <td className='p-3 text-sm'>{module.moduleTitle}</td>
                <td className='p-3 text-sm'>{module.completionRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className='flex items-center justify-end gap-4 flex-row text-[13px]'>
        <p className=''>
          Showing {startIndex + 1} - {Math.min(endIndex, moduleData.length)} of{' '}
          {moduleData.length} courses
        </p>

        <div className='flex items-center gap-5'>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className='text-[#848484] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className='text-[#848484] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
