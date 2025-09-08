'use client';

import type React from 'react';
import { useState } from 'react';
import {
  Search,
  Plus,
  MoreHorizontal,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Course {
  id: string;
  name: string;
  duration: string;
  assignedTutors: string[];
  tutorCount: number;
  completionRate: number;
}

type CoursesTableProps = Record<string, never>;

const  CoursesTable: React.FC<CoursesTableProps> = (): React.JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const courses: Course[] = [
    {
      id: '1',
      name: 'Research Technologies and Innovation',
      duration: '5 Weeks',
      assignedTutors: ['Dr. Adebayo', 'Mr. Thompson'],
      tutorCount: 17,
      completionRate: 68,
    },
    {
      id: '2',
      name: 'UI/UX Design Bootcamp',
      duration: '8 Weeks',
      assignedTutors: ['Dr. Adebayo', 'Mr. Thompson'],
      tutorCount: 17,
      completionRate: 32,
    },
    {
      id: '3',
      name: 'Data Analytics for Beginners',
      duration: '6 Weeks',
      assignedTutors: ['Dr. Adebayo', 'Mr. Thompson'],
      tutorCount: 17,
      completionRate: 52,
    },
    {
      id: '4',
      name: 'UI/UX Design Bootcamp',
      duration: '8 Weeks',
      assignedTutors: ['Dr. Adebayo', 'Mr. Thompson'],
      tutorCount: 17,
      completionRate: 32,
    },
    {
      id: '5',
      name: 'UI/UX Design Bootcamp',
      duration: '8 Weeks',
      assignedTutors: ['Dr. Adebayo', 'Mr. Thompson'],
      tutorCount: 17,
      completionRate: 32,
    },
  ];

  const filteredCourses: Course[] = courses.filter((course: Course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses: Course[] = filteredCourses.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleAddCourse = () => {
    console.log('Add course clicked');
  };

  const handleActionClick = (courseId: string, action: string): void => {
    console.log(`${action} clicked for course ${courseId}`);
  };

  const getCompletionColor = (rate: number): string => {
    if (rate >= 60) return 'bg-green-500';
    if (rate >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className='flex flex-col md:gap-6 rounded-[10px] bg-white p-4 md:p-6 mt-5 border border-gray-200'>
      <div className='flex items-center justify-between'>
        <h2 className='text-[16px] font-bold flex-1'>Courses</h2>
        <div className='flex flex-1 gap-8 flex-row items-center'>
          <div className='border-[0.5px] flex px-2 py-1 md:px-4 md:py-2 rounded-[50px] text-[14px] md:flex-1'>
            <input
              type='text'
              placeholder='Search courses...'
              value={searchTerm}
              onChange={handleSearchChange}
              className='outline-none flex-1'
            />
            <Search />
          </div>

          <button
            onClick={handleAddCourse}
            className='flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-[10px] font-medium border text-[#800080] transition-colors hover:text-white border-[#800080] hover:bg-[#800080] focus:outline-none focus:ring-2 focus:ring-[#800080]'
          >
            <Plus className='h-4 w-4' />
            Add Course
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className='hidden overflow-hidden md:block'>
        <table className='w-full'>
          <thead className='bg-[#FBEFFF80] text-nowrap'>
            <tr>
              <th className='px-6 py-3 text-left text-[14px] text-[#7B7F87] font-medium'>
                Course Name
              </th>
              <th className='px-6 py-3 text-left text-[14px] text-[#7B7F87] font-medium'>
                Duration
              </th>
              <th className='px-6 py-3 text-left text-[14px] text-[#7B7F87] font-medium'>
                Assigned Tutors
              </th>
              <th className='px-6 py-3 text-left text-[14px] text-[#7B7F87] font-medium'>
                Completion Rate
              </th>
              <th className='px-6 py-3 text-left text-[14px] text-[#7B7F87] font-medium'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {currentCourses.map((course: Course) => (
              <tr key={course.id} className='hover:bg-gray-50'>
                <td className='px-6 py-3 text-left text-[14px]'>
                  {course.name}
                </td>
                <td className='px-6 py-3 text-left text-[14px]'>
                  {course.duration}
                </td>
                <td className='px-6 py-3 text-left text-[14px]'>
                  {course.assignedTutors.join(', ')} +{' '}
                  {course.tutorCount - course.assignedTutors.length} more
                </td>
                <td className='px-6 py-3 text-left text-[14px]'>
                  {course.completionRate}%
                </td>
                <td className='px-6 py-3 text-left text-[14px]'>
                  <button
                    onClick={() => handleActionClick(course.id, 'menu')}
                    className='rounded-lg p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  >
                    <MoreHorizontal className='h-4 w-4' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className='space-y-4 md:hidden'>
        {currentCourses.map((course: Course) => (
          <div
            key={course.id}
            className='rounded-lg border border-gray-200 bg-white p-4'
          >
            <div className='mb-3 flex items-start justify-between'>
              <h3 className='font-medium text-gray-900'>{course.name}</h3>
              <button
                onClick={() => handleActionClick(course.id, 'menu')}
                className='rounded-lg p-1 text-gray-400 hover:bg-gray-100'
              >
                <MoreHorizontal className='h-4 w-4' />
              </button>
            </div>

            <div className='space-y-2 text-sm text-gray-600'>
              <div>Duration: {course.duration}</div>
              <div className='flex items-center gap-2'>
                <Users className='h-4 w-4' />
                <span>
                  {course.assignedTutors.join(', ')} +{' '}
                  {course.tutorCount - course.assignedTutors.length} more
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span>Completion:</span>
                <div className='h-2 w-20 rounded-full bg-gray-200'>
                  <div
                    className={`h-2 rounded-full ${getCompletionColor(
                      course.completionRate
                    )}`}
                    style={{ width: `${course.completionRate}%` }}
                  />
                </div>
                <span className='font-medium text-gray-900'>
                  {course.completionRate}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-end gap-4 flex-row text-[13px]'>
        <p className=''>
          Showing {startIndex + 1} - {Math.min(endIndex, filteredCourses.length)}{' '}
          of {filteredCourses.length} courses
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
};

export { CoursesTable };
