'use client';
import { useState } from 'react';
import Image from 'next/image';
import image1 from '../../../public/student/classroom/9ffc5617ef490086ab82dbbdd34fab6a43d3977e.jpg';
import ClassroomInteractiveComponent from '@/components/student/classroom/ClassroomInteractiveComponent';
import ModulesComponent from '@/components/student/classroom/ModulesComponent';
import { ArrowLeft, ChevronLeft, Divide } from 'lucide-react';

export default function Classroom() {
  const [showModules, setShowModules] = useState(false);
  const hideMobileModules = () => setShowModules(false);
  const [currentTab, setCurrentTab] = useState('Quiz');
  const setTab = (tab: string) => setCurrentTab(tab);
  return (
    <div className='md:p-2 flex justify-items-center w-full gap-2 bg-white h-full'>
      <div className='flex w-full flex-col grow-1 items-center gap-2'>
        <div
          className={`h-[40vh] w-full ${currentTab === 'Quiz' ? 'hidden' : ''}`}
        >
          <Image
            src={image1}
            alt='Module video'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='w-full h-full px-1 md:px-5'>
          <ClassroomInteractiveComponent
            currentTab={currentTab}
            setTab={setTab}
          />
        </div>
      </div>
      <div className={`flex-col md:flex hidden sm:z-20 md:z-0 w-150`}>
        <ModulesComponent />
      </div>
      <div
        className={`flex-col md:hidden flex absolute right-0 z-20 ${
          showModules ? 'w-full' : ''
        }  ${currentTab === 'Quiz' ? 'hidden' : ''}`}
      >
        {showModules ? (
          <ModulesComponent hideMobileModules={hideMobileModules} />
        ) : (
          <button
            className='flex place-items-center p-2 rounded-full bg-white'
            onClick={() => setShowModules(true)}
          >
            <ChevronLeft height={24} width={24} strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
}
