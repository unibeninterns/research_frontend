import React from 'react';

const About = () => {
  return (
    <>
      <section className='h-screen w-full border p-10 flex items-center bg-purple-800 opacity-80'>
        <div className='space-y-5 w-3/5 mx-10'>
          <h1 className='text-2xl font-bold leading-nones'>
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
        <div className='flex justify-center items-center'>
          <div>
            <h1>
              The DRID Learning
              <br />
              Experience
            </h1>
            <p>
              The Professional Diploma in Research Technologies and Innovation
              is offered by the Directorate of Research, Innovation, and
              Development (DRID) at the University of Benin. This 12-week fully
              online, self-paced program is designed to empower researchers,
              postgraduate students, lecturers, and innovation professionals
              with modern research tools, AI-based methods, academic writing
              skills, data analysis strategies, grant writing expertise, and
              personal branding techniques. With expert-led live sessions,
              practical assignments, and a final portfolio project, learners
              build core research competencies for career and academic growth in
              today’s knowledge economy.
            </p>
          </div>
          <div className='w-full md:w-2/5 h-auto border-2'>
            <img src='' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
