import React from 'react';
import {
  BriefcaseBusiness,
  Calendar1,
  CircleUserRound,
  CreditCard,
  Divide,
  FileBadge,
  ListChecks,
  Monitor,
  Video,
} from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const nutshell = [
    {
      icon: <Calendar1 color='purple'></Calendar1>,
      title: 'Duration',
      text: '12 weeks',
    },
    {
      icon: <Monitor color='purple' />,
      title: 'Format',
      text: 'Fully online & self-paced',
    },
    {
      icon: <Video color='purple' />,
      title: 'Live Sessions',
      text: 'F2 weekly expert-led live sessions',
    },
    {
      icon: <ListChecks color='purple' />,
      title: 'Assessment',
      text: 'Continuous quizzes + final project & exam',
    },
    {
      icon: <BriefcaseBusiness color='purple' />,
      title: 'Capstone Project',
      text: 'Build and present a practical research portfolio',
    },
    {
      icon: <FileBadge color='purple' />,
      title: 'Certification',
      text: 'Digital diploma [with optional tanscript]',
    },
    {
      icon: <CircleUserRound color='purple' />,
      title: 'Support',
      text: 'Personalized expert feedback available',
    },
    {
      icon: <CreditCard color='purple' />,
      title: 'Fee',
      text: '₦50,000+ (see full pricing for breakdown)',
    },
  ];

  const weeks = [
    {
      title: 'Introduction to Research in the 21st Century',
      text: 'Orientation, course objectives, and relevance in the digital age.',
    },
    {
      title: 'Research Approaches',
      text: 'Explore qualitative, quantitative & mixed-method frameworks.',
    },
    {
      title: 'Literature Review & Knowledge Management',
      text: 'Master sourcing and organizing key academic materials.',
    },
    {
      title: 'AI & Digital Tools for Research',
      text: 'Boost research efficiency using AI tools and open-source platforms.',
    },
    {
      title: 'Data Collection Methods',
      text: 'Design and implement surveys, interviews, and observational techniques.',
    },
    {
      title: 'Data Cleaning & Preprocessing',
      text: 'Prepare raw data for analysis using modern cleaning techniques.',
    },
    {
      title: 'Data Analysis & Visualization',
      text: 'Apply analytical tools and visualize research insights with clarity.',
    },
    {
      title: 'Academic Writing & Referencing + Live Session',
      text: 'Structure research papers and cite sources using standard styles.',
    },
    {
      title: 'Strategic Visibility & Personal Rebranding',
      text: 'Build a compelling digital presence and professional research brand.',
    },
    {
      title: 'Proposal & Grant Writing',
      text: 'Craft winning proposals and identify funding opportunities.',
    },
    {
      title: 'Capstone Project Week',
      text: 'Plan, execute, and finalize your independent research project.',
    },
    {
      title: 'Final Exam & Portfolio Presentation',
      text: 'Submit your portfolio and complete final assessments to graduate.',
    },
  ];

  return (
    <>
      <section className='h-screen w-full border p-10 flex items-center bg-purple-800 opacity-80'>
        <div className='space-y-5 w-3/5 mx-10'>
          <h1 className='text-2xl font-bold leading-none'>
            Welcome to the
            <br />
            DRID Course Platform
          </h1>
          <p>
            A hub of dynamic research-driven training,
            <br />
            designed to equip you with practical tools for
            <br />
            tomorrow
          </p>
          <button className='px-5 py-1 bg-purple-900 opacity-100'>
            VIEW COURSE CURRICULUM
          </button>
        </div>
      </section>
      <section className='min-h-screen w-full px-20 py-10'>
        <div className='flex justify-center flex-col md:flex-row w-full h-[50vh] space-x-5'>
          <div className='w-1/2'>
            <h1 className='text-2xl font-bold mb-5'>
              The DRID Learning
              <br />
              Experience
            </h1>
            <p className='text-sm'>
              The Professional Diploma in Research Technologies and Innovation
              is offered by the Directorate of Research, Innovation, and
              Development (DRID) at the University of Benin.
              <br />
              This 12-week fully online, self-paced program is designed to
              empower researchers, postgraduate students, lecturers, and
              innovation professionals with modern research tools, AI-based
              methods, academic writing skills, data analysis strategies, grant
              writing expertise, and personal branding techniques.
              <br />
              With expert-led live sessions, practical assignments, and a final
              portfolio project, learners build core research competencies for
              career and academic growth in today’s knowledge economy.
            </p>
          </div>
          <div className='w-1/2 md:w-3/5 h-full'>
            <Image
              src=''
              alt=''
              className='w-full h-full bg-gray-200 animate-pulse'
            />
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-2xl font-bold leading-none my-5'>
            The DRID Diploma in a Nutshell
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {nutshell.map((n) => (
              <div
                key={n.title}
                className='border border-purple-900 rounded-xl bg-white flex items-center space-x-2'
              >
                <div className='flex items-center justify-center mx-1 my-1'>
                  {n.icon}
                  <div className='flex flex-col ml-2'>
                    <h1 className='mb-1 font-bold'>{n.title}</h1>
                    <p>{n.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='min-h-screen w-full px-20 py-10'>
        <div className='flex flex-col items-center w-full'>
          <h1 className='text-2xl font-bold leading-none my-5'>
            Curriculum Snapshot
          </h1>
        </div>
      </section>
    </>
  );
};

export default About;
