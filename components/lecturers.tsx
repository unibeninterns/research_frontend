/* eslint-disable @next/next/no-img-element */
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface LecturerProps {
  name: string;
  description: string;
  image: string;
  fullDescription: string;
}

const Lecturer = ({
  name,
  description,
  image,
  fullDescription,
}: LecturerProps) => {
  const [showInfo, setShowInfo] = useState<'hidden' | 'block'>('hidden');
  const hide = () => setShowInfo('hidden');
  const show = () => setShowInfo('block')
  return (
    <>
      <div onClick={show} className='h-[95%] w-[270px] rounded-[10px] m-2 p-3 flex flex-col bg-[rgba(251,239,255,0.5)] shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)]  transition duration-500 ease-in-out transform hover:scale-105 overflow-hidden hover:border-[#800080] hover:border-1'>
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
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.0.8)] ${showInfo} flex items-center justify-center`}
      >
        <div className='md:w-[864px] max-h-[800px] h-auto bg-[rgba(255,255,255,1)] border-[rgba(186,184,184,1)] rounded-[15px] flex flex-col items-center justify-center py-4 px-2 border-4'>
          <div className=' flex flex-row gap-3 w-full justify-center'>
            <div className='h-[110px] w-[110px] z-20'>
              <img
                src={`/lecturers/${image}`}
                alt={name}
                className='object-cover rounded-[10px]'
              />
            </div>
            <div className='flex flex-col w-[600px]'>
              <div className='flex justify-between'>
                <div className=''>
                  <h3 className='text-xl font-semibold'>{name}</h3>
                  <p className='text-sm'>{description}</p>
                </div>
                <button
                  onClick={hide}
                  className='flex items-center justify-center'
                >
                  <X strokeWidth={2} />
                </button>
              </div>
              <div className='mt-4'>
                <p className='text-lg'>{fullDescription}</p>
              </div>
            </div>
          </div>
          <a
            href=''
            className='w-[280px] my-6 text-lg flex items-center justify-around text-[rgb(160,32,240)]'
          >
            <p>View Profile on LinkedIn </p>
            <ArrowRight />
          </a>
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
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '09ab92f44c49a6107e70b39fce2dce6bae10f0bc.png',
      name: 'Prof. Daniel Moore',
      description: 'Data Scientist & Program Director, OpenGov Africa',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '7cba8ae7b7782b3bda40676797692db32276fc13.png',
      name: 'Dr. Tunde Salami',
      description: 'Research Methodology Instructor, EduBridge Institute',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '27242fe6e89ddc9cf434c0bd26a42f24c774a9f3.png',
      name: 'Prof. Ifeoma Eze',
      description: 'Lead Researcher, Centre for Advanced Learning Technologies',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png',
      name: 'Dr. Trisha Okonkwo',
      description: 'Senior Researcher, Digital Innovation Lab',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '09ab92f44c49a6107e70b39fce2dce6bae10f0bc.png',
      name: 'Prof. Daniel Moore',
      description: 'Data Scientist & Program Director, OpenGov Africa',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '7cba8ae7b7782b3bda40676797692db32276fc13.png',
      name: 'Dr. Tunde Salami',
      description: 'Research Methodology Instructor, EduBridge Institute',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
    {
      image: '27242fe6e89ddc9cf434c0bd26a42f24c774a9f3.png',
      name: 'Prof. Ifeoma Eze',
      description: 'Lead Researcher, Centre for Advanced Learning Technologies',
      fullDescription:
        'Dr. Trisha Okonkwo is a Senior Research Fellow at the Digital Innovation Lab, where she specializes in the intersection of AI and social science. She has led over 15 international research projects and mentors early-career scholars across Africa. Her passion lies in using data to drive policy impact and inclusive innovation.',
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='mt-5 h-auto w-full p-2'>
        <div className='mt-3 p-1 flex flex-row items-center'>
          <button
            onClick={scrollLeft}
            className='mr-5 p-1 rounded-full shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] border-1 border-[rgba(160,32,240,0.25)] cursor-pointer bg-white transition duration-150 ease-in transform hover:scale-110'
          >
            <ChevronLeft strokeWidth={3} color='#800080' />
          </button>
          {/* #TODO: remove scroll bar */}
          <div
            ref={scrollRef}
            className='flex flex-row overflow-x-auto flex-nowrap justify-around scroll-smooth h-full grow-1'
          >
            {lecturers.map(({ name, image, description, fullDescription }) => (
              <div key={name} className='md:w-1/4'>
                <Lecturer
                  name={name}
                  image={image}
                  description={description}
                  fullDescription={fullDescription}
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className='ml-5 p-1 rounded-full shadow-[4px_4px_6px_-3px_rgba(160,32,240,0.25)] border-1 border-[rgba(160,32,240,0.25)] cursor-pointer bg-white transition duration-150 ease-in transform hover:scale-110'
          >
            <ChevronRight strokeWidth={3} color='#800080' />
          </button>
        </div>
      </div>
    </>
  );
};

export default LecturerSection;
