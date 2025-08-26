'use client';
import { useState } from 'react';

export default function Classroom() {
  const [showModules, setShowModules] = useState('flex');
  return (
    <div className='p-6 flex flex-col md:flex-row justify-items-center w-full h-screen border border-black border-2'>
      <div className='flex w-full flex-col border-2 grow-1'></div>
      <div
        className={`flex flex-col sm:${showModules} md:inline-block sm:z-20 md:z-0 border-2 border-black w-100`}
      ></div>
    </div>
  );
}
