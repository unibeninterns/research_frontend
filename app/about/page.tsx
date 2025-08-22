import React from 'react';

const About = () => {
  const nutshell = [
    { icon: '', title: 'Duration', text: '12 weeks' },
    { icon: '', title: 'Format', text: 'Fully online & self-paced' },
    {
      icon: '',
      title: 'Live Sessions',
      text: 'F2 weekly expert-led live sessions',
    },
    {
      icon: '',
      title: 'Assessment',
      text: 'Continuous quizzes + final project & exam',
    },
    {
      icon: '',
      title: 'Capstone Project',
      text: 'Build and present a practical research portfolio',
    },
    {
      icon: '',
      title: 'Certification',
      text: 'Digital diploma [with optional tanscript]',
    },
    {
      icon: '',
      title: 'Support',
      text: 'Personalized expert feedback available',
    },
    {
      icon: '',
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
      <section className='min-h-screen w-full'>
        <div className='flex justify-center items-center flex items-center justify-center flex-col md:flex-row'>
          <div>
            <h1 className='text-2xl font-bold'>
              The DRID Learning
              <br />
              Experience
            </h1>
            <p>
              The Professional Diploma in Research Technologies and Innovation
              is offered by the Directorate of Research, Innovation, and
              Development (DRID) at the University of Benin.
              <br />
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
          <div className='w-1/2 h-auto border-2'>
            <img src='' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
