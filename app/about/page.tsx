'use client';
import Image from 'next/image';
import LecturerSection from '@/components/lecturers';
import FAQs from '@/components/FAQs';
import Header from '../../components/HomeHeader';
import Footer from '../../components/HomeFooter';
// import Image from 'next/image';
import image1 from '../../public/about/8b55db4a8cc952ea101a90132d5ed08bbd565d47.jpg';
import image2 from '../../public/about/fd22a6a3ffd7a34ff6b240ae40a44e4f66e25da8.jpg';
import Calendar from '@/components/icons/calendar';
import Monitor from '@/components/icons/monitor';
import Video from '@/components/icons/video';
import Assessment from '@/components/icons/assessment';
import Briefcase from '@/components/icons/briefcaseSmall';
import Person from '@/components/icons/person';
import CreditCard from '@/components/icons/creditCard';
import { ArrowRight, Check } from 'lucide-react';
import Certificate1 from '@/components/icons/certificate1';
import GraduationCap from '@/components/icons/graduationCap';
import { Search } from '@/components/icons/search';
import Teacher from '@/components/icons/teacher';
import Lightbulb from '@/components/icons/lightbulb';

const About = () => {
  const nutshell = [
    {
      icon: <Calendar />,
      title: 'Duration',
      text: '12 weeks',
    },
    {
      icon: <Monitor />,
      title: 'Format',
      text: 'Fully online & self-paced',
    },
    {
      icon: <Video />,
      title: 'Live Sessions',
      text: 'F2 weekly expert-led live sessions',
    },
    {
      icon: <Assessment />,
      title: 'Assessment',
      text: 'Continuous quizzes + final project & exam',
    },
    {
      icon: <Briefcase />,
      title: 'Capstone Project',
      text: 'Build and present a practical research portfolio',
    },
    {
      icon: <Certificate1 />,
      title: 'Certification',
      text: 'Digital diploma [with optional tanscript]',
    },
    {
      icon: <Person />,
      title: 'Support',
      text: 'Personalized expert feedback available',
    },
    {
      icon: <CreditCard />,
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
      icon: <GraduationCap />,
      title: 'Postgraduate students',
      text: 'seeking structured support in their research journey.',
    },
    {
      icon: <Search />,
      title: 'Early-career researchers',
      text: 'who want to strengthen their methodology and data skills.',
    },
    {
      icon: <Teacher />,
      title: 'Faculty and lecturers',
      text: 'aiming to update their research practice with digital tools.',
    },
    {
      icon: <Briefcase />,
      title: 'NGO researchers and data officers',
      text: 'working on evidence-based programs.',
    },
    {
      icon: <Lightbulb />,
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
      <Header />
      <section className='relative flex h-[100dvh] w-full items-center border bg-[linear-gradient(90deg,rgba(47,20,50,0.8),rgba(45,17,43,0.8),rgba(43,13,36,0.8),rgba(52,29,65,0.85))] lg:p-25'>
        <Image
          src={image1 || '/placeholder.svg'}
          alt='Students learning from a laptop screen'
          fill
          className='absolute top-0 left-0 z-[-5] w-full object-cover'
          priority
        />
        <div className='mt-5 w-full text-white lg:w-3/5'>
          <h2 className='text-3xl leading-none font-bold md:text-4xl'>
            Welcome to the
            <br />
            DRID Course Platform
          </h2>
          <p className='text-lg leading-none lg:text-[18px] mt-[21px]'>
            A hub of dynamic research-driven training,
            <br />
            designed to equip you with practical tools for
            <br />
            tomorrow
          </p>
          <button className='primary-button text-md rounded-[5px] bg-[rgba(128,0,128,1)] px-[51px] py-[17px] font-semibold text-white lg:text-[20px] mt-[56px]'>
            VIEW COURSE CURRICULUM
          </button>
        </div>
      </section>
      <section className='h-screen w-full bg-[#FBEFFF] lg:px-25 flex place-items-center'>
        <div className='flex w-full flex-col justify-start md:flex-row gap-21 lg:mt-20'>
          <div className='md:w-1/2'>
            <h2 className='mb-5 text-[18px] font-bold md:text-3xl'>
              The DRID Learning
              <br />
              Experience
            </h2>
            <p className='md:text-lg lg:text-lg'>
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
              <br />
              With expert-led live sessions, practical assignments, and a final
              portfolio project, learners build core research competencies for
              career and academic growth in today’s knowledge economy.
            </p>
          </div>
          <div className='relative z-5 mt-5 h-80 w-full self-center md:mt-0 md:w-2/5 lg:h-120 lg:w-88'>
            <Image
              src={image2 || '/placeholder.svg'}
              alt='Students learning from a laptop screen'
              className='absolute z-[-5] h-full w-full object-cover rounded-[25px]'
              // height={472}
              // width={352}
            />
            <div className='absolute h-full w-full bg-[linear-gradient(0deg,#250B2780,#85288D33)] rounded-[25px]' />
          </div>
        </div>
      </section>
      <section className='h-screen w-full bg-[#FBEFFF] lg:px-25 flex place-items-center'>
        <div className=''>
          <h2 className='my-4 mb-5 lg:text-[42px] text-2xl leading-none font-bold md:text-3xl'>
            The DRID Diploma in a Nutshell
          </h2>
          <div className='grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 mt-7'>
            {nutshell.map((n) => (
              <div
                key={n.title}
                className='flex items-start space-x-2 rounded-xl border-[0.5px] border-[#800080] bg-[rgba(256,256,256,.25)] p-1 lg:p-2'
              >
                <div className='flex items-center justify-center stroke-2 text-[#800080]'>
                  {n.icon}
                </div>
                <div className='flex flex-col'>
                  <p className='text-[16px] font-semibold lg:mb-1 lg:text-[18px]'>
                    {n.title}
                  </p>
                  <p className='text-[14px] lg:text-[16px]'>{n.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='min-h-screen w-full bg-white px-2 py-10 md:px-4 lg:px-[100px]'>
        <div className='flex w-full flex-col items-center lg:mt-25'>
          <h2 className='mb-2 text-2xl leading-none font-bold lg:mb-5'>
            Curriculum Snapshot
          </h2>
          <p className='text-center text-[14px]'>
            Explore the full learning journey—from foundational concepts to your
            final project.
          </p>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:gap-6 lg:mt-10 lg:mb-16'>
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
              className='flex items-start gap-2 rounded-xl bg-[#FBEFFF40] p-2 shadow-sm transition-shadow duration-300 hover:shadow-md md:gap-2 lg:p-4 w-full'
            >
              <div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#800080] text-sm font-bold text-white sm:text-base md:h-8 md:w-8 lg:h-10 lg:w-10'>
                {index + 1}
              </div>
              <div>
                <p className='text-[14px] font-semibold md:text-[16px] lg:text-lg'>
                  Week {index + 1}:<br />
                  {week.title}
                </p>
                <p className='text-[14px] leading-relaxed text-gray-600 md:mt-1 md:text-[16px] lg:text-sm'>
                  {week.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='bg-[#FEFBFF] flex min-h-screen w-full flex-col items-center lg:px-25 lg:pb-15'>
        <div className='flex w-full flex-col items-center justify-center lg:mt-25'>
          <h2 className=' w-full text-center text-2xl leading-none font-bold lg:text-5xl'>{`What You'll Gain`}</h2>
          <div className='flex flex-col gap-5 mt-6'>
            {gains.map((gain) => (
              <div key={gain.title} className='flex items-start'>
                <Check color='#800080' strokeWidth={2} height={30} width={30} />
                <p className='text-md ml-2 lg:text-lg'>
                  <span className='font-bold'>{gain.title}</span> - {gain.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center mt-20'>
          <h2 className='my-5 w-full text-center text-2xl leading-none font-bold lg:text-5xl'>
            Who Should Enroll
          </h2>
          <div className='flex flex-col gap-5 mt-6'>
            {enroll.map((e) => (
              <div key={e.title} className='flex items-start'>
                <div className='h-[30px] w-[30px]'>{e.icon}</div>
                <p className='text-md ml-4 lg:text-lg'>
                  <span className='font-bold'>{e.title}</span> - {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='min-h-screen w-full py-5 lg:py-20 lg:px-25 bg-[#FEFBFF]'>
        <div className='flex w-full flex-col items-center'>
          <div className=''>
            <h2 className='my-1 w-full text-center text-2xl leading-none font-bold lg:text-5xl'>
              Meet Your Lecturers
            </h2>
            <p className='text-md mx-1 text-center lg:text-[22px]'>
              Get mentored by top researchers across Africa
            </p>
          </div>
        </div>
        <div className='flex w-full items-center justify-center'>
          <LecturerSection />
        </div>
        <div className='mt-10 flex w-full flex-col md:items-start justify-center md:flex-row'>
          <div className='m-2 flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-[#F9DBFF] bg-white px-2 py-4'>
            <h4 className='lg:m-4 px-2 py-4 text-xl font-bold lg:text-3xl'>
              Certification Criteria
            </h4>
            <div className='flex flex-col'>
              {criteria.map((c) => (
                <div key={c} className='flex py-2 lg:px-2 lg:py-4'>
                  <Check strokeWidth={3} color='#800080CC' />
                  <p className='text-md ml-2 lg:text-xl'>{c}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='m-2 flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-[#F9DBFF] bg-white px-2 py-4'>
            <h4 className='lg:m-4 px-2 py-4 text-xl font-bold lg:text-3xl'>
              Frequently Asked Questions
            </h4>
            <FAQs faqs={info} />
          </div>
        </div>
        <p className='mt-12 mb-6'>
          NB: Tuition for this program is ₦50,000 only.
        </p>
        <a
          href=''
          className='tertiary-button w-[280px] lg:mt-6 text-sm md:text-base flex items-center justify-between text-[#800080] mb-2'
        >
          <p>View full pricing details</p>
          <ArrowRight />
        </a>
      </section>
      <section className='min-h-screen flex flex-col items-center justify-center bg-[#FEFBFF]'>
        <h4 className='text-2xl md:text-4xl font-bold mb-2'>
          Ready to start learning with DRID?
        </h4>
        <p className='mt-3 text-sm md:text-xl text-center'>
          Join other research professionals building the future.
        </p>
        <div className=' mt-12 flex flex-col items-center justify-center'>
          <a
            href='#'
            className='primary-button text-white text-sm md:text-[20px] font-[500] md:py-5 lg:px-8 lg:py-3 rounded-md '
          >
            REGISTER NOW
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
