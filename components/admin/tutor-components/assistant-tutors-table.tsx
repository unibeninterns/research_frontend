'use client';

import type React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface AssistantTutor {
  id: string;
  name: string;
  email: string;
  course: string;
  archivedOn: string;
}

const AssistantTutorsTable: React.FC = (): React.JSX.Element => {
  const assistants: AssistantTutor[] = [
    {
      id: '1',
      name: 'Blessing Uche',
      email: 'blessing.uche@gmail.com',
      course: 'Data Analytics',
      archivedOn: '05/09/2025',
    },
    {
      id: '2',
      name: 'Mercy Chukwu',
      email: 'mercy.chukwu@gmail.com',
      course: 'UI/UX Bootcamp',
      archivedOn: '05/09/2025',
    },
    {
      id: '3',
      name: 'Blessing Uche',
      email: 'blessing.uche@gmail.com',
      course: 'Data Analytics',
      archivedOn: '05/09/2025',
    },
  ];

  // const getStatusColor = (status: string): string => {
  //   switch (status) {
  //     case "CONFIRMED":
  //       return "bg-green-100 text-green-800"
  //     case "PENDING":
  //       return "bg-yellow-100 text-yellow-800"
  //     case "REJECTED":
  //       return "bg-red-100 text-red-800"
  //     default:
  //       return "bg-gray-100 text-gray-800"
  //   }
  // }

  return (
    <div className='bg-white rounded-lg border pb-6'>
      <div className='p-6 border-b'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-gray-900'>
            Archived Tutors
          </h2>
          <div className='flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto'>
            <div className='relative w-full sm:w-60 md:w-72'>
              <input
                type='text'
                placeholder='Search'
                className='pl-3 pr-8 w-full py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-purple-500'
              />
              <Search className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
            </div>

            <select className='border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 focus:outline-none w-full sm:w-auto'>
              <option>All Courses</option>
            </select>
          </div>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-background'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Course
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Archived On
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {assistants.map((assistant) => (
              <tr key={assistant.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-black'>{assistant.name}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-black'>{assistant.email}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-black'>{assistant.course}</div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-black'>
                    {assistant.archivedOn}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <Button variant='ghost' size='sm'>
                    <MoreHorizontal className='h-4 w-4' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssistantTutorsTable;
