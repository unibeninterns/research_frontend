/* eslint-disable @next/next/no-img-element */
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface LecturerProps {
  name: string;
  description: string;
  image: string;
}

const Lecturer = ({ name, description, image }: LecturerProps) => {
  return (
    <>
      <div className='w-[276px] rounded-[10px] m-2 p-3 flex flex-col bg-[rgba(251,239,255,0.5)] shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)]  transition duration-500 ease-in-out transform hover:scale-105 overflow-hidden hover:border-[#800080] hover:border-1'>
        <img
          src={`/lecturers/${image}`}
          alt={name}
          className='w-full h-[200px] object-cover rounded-[10px]'
        />
        <div>
          <h3 className='text-lg font-bold mt-2'>{name}</h3>
          <p className='text-xs'>{description}</p>
        </div>
      </div>
    </>
  );
};

const LecturerSection = () => {
  const lecturers = [
    {
      image: '969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png',
      name: 'Dr. Trisha Okonkwo',
      description: 'Senior Researcher, Digital Innovation Lab',
    },
    {
      image: '09ab92f44c49a6107e70b39fce2dce6bae10f0bc.png',
      name: 'Prof. Daniel Moore',
      description: 'Data Scientist & Program Director, OpenGov Africa',
    },
    {
      image: '7cba8ae7b7782b3bda40676797692db32276fc13.png',
      name: 'Dr. Tunde Salami',
      description: 'Research Methodology Instructor, EduBridge Institute',
    },
    {
      image: '27242fe6e89ddc9cf434c0bd26a42f24c774a9f3.png',
      name: 'Prof. Ifeoma Eze',
      description: 'Lead Researcher, Centre for Advanced Learning Technologies',
    },
    {
      image: '969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png',
      name: 'Dr. Trisha Okonkwo',
      description: 'Senior Researcher, Digital Innovation Lab',
    },
    {
      image: '09ab92f44c49a6107e70b39fce2dce6bae10f0bc.png',
      name: 'Prof. Daniel Moore',
      description: 'Data Scientist & Program Director, OpenGov Africa',
    },
    {
      image: '7cba8ae7b7782b3bda40676797692db32276fc13.png',
      name: 'Dr. Tunde Salami',
      description: 'Research Methodology Instructor, EduBridge Institute',
    },
    {
      image: '27242fe6e89ddc9cf434c0bd26a42f24c774a9f3.png',
      name: 'Prof. Ifeoma Eze',
      description: 'Lead Researcher, Centre for Advanced Learning Technologies',
    },
  ];
  return (
    <>
      <div className='mt-5 h-auto w-full p-2'>
        <div className='mt-3 p-1 flex flex-row items-center'>
          <button className='mr-5 p-1 rounded-full shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] border-1 border-[rgba(160,32,240,0.25)] cursor-pointer bg-white transition duration-150 ease-in transform hover:scale-110'>
            <ChevronLeft strokeWidth={3} color='#800080' />
          </button>
          <div className='flex flex-row overflow-x-auto flex-nowrap justify-around scroll-smooth h-full grow-1 hide-scrollbar border'>
            {lecturers.map(({ name, image, description }) => (
              <div key={name} className='w-1/4'>
                <Lecturer name={name} image={image} description={description} />
              </div>
            ))}
          </div>
          <button className='ml-5 p-1 rounded-full shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] border-1 border-[rgba(160,32,240,0.25)] cursor-pointer bg-white transition duration-150 ease-in transform hover:scale-110'>
            <ChevronRight strokeWidth={3} color='#800080' />
          </button>
        </div>
      </div>
    </>
  );
};

export default LecturerSection;
