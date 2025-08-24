'use client';
import React from 'react';
import {
  BriefcaseBusiness,
  Calendar1,
  Check,
  CircleUserRound,
  CreditCard,
  FileBadge,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Monitor,
  Presentation,
  Search,
  Video,
} from 'lucide-react';
import LecturerSection from '@/components/lecturers';
import FAQs from '@/components/FAQs';
// import Image from 'next/image';

const About = () => {
  const nutshell = [
    {
      icon: (
        <Calendar1 color='purple' strokeWidth={3} className='h-5'></Calendar1>
      ),
      title: 'Duration',
      text: '12 weeks',
    },
    {
      icon: <Monitor color='purple' strokeWidth={3} className='h-5' />,
      title: 'Format',
      text: 'Fully online & self-paced',
    },
    {
      icon: <Video color='purple' strokeWidth={3} className='h-5' />,
      title: 'Live Sessions',
      text: 'F2 weekly expert-led live sessions',
    },
    {
      icon: <ListChecks color='purple' strokeWidth={3} className='h-5' />,
      title: 'Assessment',
      text: 'Continuous quizzes + final project & exam',
    },
    {
      icon: (
        <BriefcaseBusiness color='purple' strokeWidth={3} className='h-5' />
      ),
      title: 'Capstone Project',
      text: 'Build and present a practical research portfolio',
    },
    {
      icon: <FileBadge color='purple' strokeWidth={3} className='h-5' />,
      title: 'Certification',
      text: 'Digital diploma [with optional tanscript]',
    },
    {
      icon: <CircleUserRound color='purple' strokeWidth={3} className='h-5' />,
      title: 'Support',
      text: 'Personalized expert feedback available',
    },
    {
      icon: <CreditCard color='purple' strokeWidth={3} className='h-5' />,
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

  const gains = [
    {
      title: 'Hands-on Research Skills',
      text: 'Gain a practical understanding of modern research workflows.',
    },
    {
      title: 'AI & Digital Tools Mastery',
      text: 'Learn how to use smart tools to boost research productivity.',
    },
    {
      title: 'Data Fluency',
      text: 'Develop skills in analysis, visualization, and academic publishing.',
    },
    {
      title: 'Capstone Project',
      text: 'Create a real-world research project to showcase in your portfolio.',
    },
    {
      title: 'Verified Certification',
      text: 'Earn a professional digital diploma from DRID, University of Benin.',
    },
  ];

  const enroll = [
    {
      icon: <GraduationCap color='#6e0085' strokeWidth={3} className='h-5' />,
      title: 'Postgraduate students',
      text: 'seeking structured support in their research journey.',
    },
    {
      icon: <Search color='#6e0085' strokeWidth={3} className='h-5' />,
      title: 'Early-career researchers',
      text: 'who want to strengthen their methodology and data skills.',
    },
    {
      icon: <Presentation color='#6e0085' strokeWidth={3} className='h-5' />,
      title: 'Faculty and lecturers',
      text: 'aiming to update their research practice with digital tools.',
    },
    {
      icon: (
        <BriefcaseBusiness color='#6e0085' strokeWidth={3} className='h-5' />
      ),
      title: 'NGO researchers and data officers',
      text: 'working on evidence-based programs.',
    },
    {
      icon: <Lightbulb color='#6e0085' strokeWidth={3} className='h-5' />,
      title: 'Innovation and grant-focused professionals',
      text: 'involved in proposal writing and research-driven projects.',
    },
  ];

  const criteria = [
    'Complete all weekly modules',
    'Score at least 70% in the final assessment',
    'Attend 80% of live sessions',
    'Complete final capstone project',
  ];

  const info = [
    {
      question: 'What is the duration of the course?',
      answer:
        'The course lasts for 12 weeks including virtual classes, assignments, and examination.',
    },
    {
      question: 'Do I need any prior knowledge before enrolling?',
      answer:
        'The course lasts for 12 weeks including virtual classes, assignments, and examination.',
    },
    {
      question: 'How can I track my learning progress?',
      answer:
        'The course lasts for 12 weeks including virtual classes, assignments, and examination.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'The course lasts for 12 weeks including virtual classes, assignments, and examination.',
    },
    {
      question: 'Can I interact with lecturers during the course?',
      answer:
        'The course lasts for 12 weeks including virtual classes, assignments, and examination.',
    },
  ];

  return (
    <>
      <section className='h-screen w-full border p-20 flex items-center  bg-[linear-gradient(90deg,rgba(47,20,50,0.8),rgba(45,17,43,0.8),rgba(43,13,36,0.8),rgba(52,29,65,0.85))]'>
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
          <button className='px-5 py-1 bg-[rgba(128,0,128,1)] text-white text-[24px] font-semibold'>
            VIEW COURSE CURRICULUM
          </button>
        </div>
      </section>
      <section className='min-h-screen w-full px-20 py-20 bg-[#FBEFFF]'>
        <div className='flex justify-center flex-col md:flex-row w-full md:h-[50vh] space-x-5'>
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
          <div className='w-1/2 md:w-3/5 h-full bg-gray-200 animate-pulse'>
            {/* <Image
              src=''
              alt=''
              className='w-full h-full bg-gray-200 animate-pulse'
            /> */}
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
                className='border border-purple-900 rounded-xl bg-[rgba(256,256,256,.25)] flex items-start space-x-2'
              >
                <div className='flex items-center justify-center mx-1 my-1'>
                  {n.icon}
                  <div className='flex flex-col ml-2'>
                    <h1 className='mb-1 font-bold'>{n.title}</h1>
                    <p className='text-sm'>{n.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='min-h-screen w-full px-20 py-20'>
        <div className='flex flex-col items-center w-full my-10'>
          <h1 className='text-2xl font-bold leading-none my-5'>
            Curriculum Snapshot
          </h1>
          <p className='text-sm text-center'>
            Explore the full learning journey—from foundational concepts to your
            final project.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5 justify-center justify-items-center'>
          <style jsx>{`
            @media (min-width: 768px) {
              .grid > :nth-child(odd) {
                justify-self: end;
              }
              .grid > :nth-child(even) {
                justify-self: start;
              }
            }
          `}</style>
          {weeks.map((week, index) => (
            <div
              key={week.title}
              className='rounded-lg flex p-2 items-start space-x-2 shadow-[0_4px_6px_-3px_rgba(0,0,0,0.8)] bg-[rgba(160,32,240,0.2)] w-8/10'
            >
              <div className=' flex items-center justify-center p-2 h-7 w-7 bg-purple-900 text-white text-lg rounded-full font-bold'>
                {index + 1}
              </div>
              <div>
                <h1 className='text-sm font-bold'>
                  Week {index + 1}:<br />
                  {week.title}
                </h1>
                <p className='text-xs'>{week.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='min-h-screen w-full px-10 py-20 flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col items-center justify-center tracking-wide'>
          <h1 className='text-4xl font-bold leading-none my-5 w-full text-center'>
            What You'll Gain
          </h1>
          <div className='mx-2 space-y-3'>
            {gains.map((gain) => (
              <div key={gain.title} className='flex items-center'>
                <Check color='purple' strokeWidth={4} className='h-5' />
                <p className=' text-lg ml-2'>
                  <span className='font-bold'>{gain.title}</span> - {gain.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-[72%] flex flex-col items-center justify-center tracking-wide mt-20'>
          <h1 className='text-4xl font-bold leading-none my-5 w-full text-center'>
            Who Should Enroll
          </h1>
          <div className='mx-2 space-y-3'>
            {enroll.map((e) => (
              <div key={e.title} className='flex items-center'>
                {e.icon}
                <p className=' text-lg ml-2'>
                  <span className='font-bold'>{e.title}</span> - {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='min-h-screen w-100vw px-15 py-20 bg-[rgba(254,251,255,1)]'>
        <div className='w-full flex flex-col items-center'>
          <div>
            <h1 className='text-3xl font-bold leading-none my-1 w-full text-center'>
              Meet Your Lecturers
            </h1>
            <p>Get mentored by top researchers across Africa</p>
          </div>
        </div>
        <div className='w-full'>
          <LecturerSection />
        </div>
        <div className='w-full flex flex-col md:flex-row items-start justify-center mt-10'>
          <div className='bg-white border-2 border-[#F9DBFF] flex items-center justify-center flex-col py-4 px-2 m-4 rounded-2xl flex-1'>
            <h1 className='text-4xl font-bold py-4 px-2 m-4 '>
              Certification Criteria
            </h1>
            <div className='flex flex-col'>
              {criteria.map((c) => (
                <div key={c} className='flex py-4 px-2'>
                  <Check strokeWidth={3} color='#800080CC' />
                  <p className='text-[24px]'>{c}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-white border-2 border-[#F9DBFF] flex items-center justify-center flex-col py-4 px-2 m-4 rounded-2xl flex-1'>
            <h1 className='text-4xl font-bold py-4 px-2 m-4 '>
              Frequently Asked Questions
            </h1>
            <FAQs faqs={info} />
          </div>
        </div>
      </section>
      <section className='min-h-screen w-full px-10 py-20 flex flex-col justify-center items-center'></section>
    </>
  );
};

export default About;
