'use client';
import Image from 'next/image';
import image from '../components/LandingPageImage.png';
import { ScholarCap } from '@/components/icons/scholarCap';
import { Search } from '@/components/icons/search';
// import {CourseSVG} from "@/components/courseSVG"
import { Certificate } from '@/components/icons/certificate';
import Header from '../components/HomeHeader';
import Footer from '../components/HomeFooter';
import Project from '@/components/icons/project';
import QuotationMark from '@/components/icons/quotation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Help from '@/components/icons/help';
// import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const weeks = [
    {
      number: 1,
      title: 'Introduction to Research in the 21st Century',
      description:
        'Orientation, course objectives, and relevance in the digital age.',
    },
    {
      number: 2,
      title: 'Research Approaches',
      description:
        'Explore qualitative, quantitative & mixed-method frameworks.',
    },
    {
      number: 3,
      title: 'Literature Review & Knowledge Management',
      description: 'Master sourcing and organizing key academic materials.',
    },
    {
      number: 4,
      title: 'AI & Digital Tools for Research',
      description:
        'Boost research efficiency using AI tools and open-source platforms.',
    },
  ];

  return (
    <>
      <Header id='header' />
      <div
        className={`relative w-full h-[calc(100vh-67px)] flex items-center justify-center overflow-hidden lg:mt-[67px] lg:px-[100px]`}
      >
        <div className='absolute inset-0'>
          <Image
            src='/heroSection/hero-image.png'
            alt='Background'
            fill
            className='object-fit'
            priority
          />
          {/* <div className='absolute inset-0 bg-black/30'></div> */}
        </div>

        {/* Hero Content */}
        <div className='relative z-10 max-w-7xl py-16 grid md:grid-cols-2 lg:grid-cols-2 items-center'>
          <div className='w-full col-span-1 text-white'>
            <h1 className='text-5xl md:text-6xl lg:text-[96px] font-bold leading-none'>
              Connect. <br />
              Learn. Grow.
            </h1>
            <p className='text-xl md:text-[20px] mt-5 lg:text-lg'>
              Advance your skills through structured research and innovation
              courses curated by the Directorate of Research, Innovation and
              Development (DRID), University of Benin.
            </p>
            <button className='md:px-15 py-4 rounded-md primary-button font-semibold transition text-sm px-4 mt-12'>
              REGISTER NOW
            </button>
          </div>
          <div className='hidden md:flex col-span-1'>
            <Image src={image} alt='image' className='w-full h-full' />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='w-full flex justify-center items-center bg-background lg:px-[100px] mt-33 '>
        <div className='grid items-center max-w-7xl grid-cols-2 text-black'>
          <div className='col-span-2 md:col-span-1'>
            <div className='text-3xl md:text-5xl mb-5 font-bold'>
              <h2>About the DRID Course</h2>
            </div>
            <div className='lg:text-lg'>
              <p>
                Get cutting-edge research and innovation training through our
                online, expert-led course tailored for students, researchers,
                and professionals.
              </p>
            </div>
            <div>
              <div className='flex mb-3 mt-10 lg:text-lg'>
                <ScholarCap />
                <p className='ml-3'>Learn from experienced faculty</p>
              </div>
              <div className='flex mb-3  lg:text-lg'>
                <Search />
                <p className='ml-3'>Research-driven practical insights</p>
              </div>
              <div className='flex mb-3 lg:text-lg'>
                <Certificate />
                <p className='ml-3'>Certificate of completion from DRID</p>
              </div>
              <div className='flex mb-3 lg:text-lg'>
                <Project />
                <p className='ml-3'>Hands-on case studies and projects</p>
              </div>
            </div>
          </div>
          <div className='hidden md:flex md:col-span-1'>
            <Image
              src='/heroSection/hero-about.png'
              alt='image'
              width={480}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className='flex flex-col mt-33 w-full justify-center  bg-background md:text-xl text-black lg:px-[100px]'>
        <div className='w-full flex justify-start gap-2 flex-col items-start'>
          <h2 className='text-3xl md:text-4xl lg:text-[42px] font-bold text-black md:col-span-1 col-span-2 justify-center flex'>
            Course Module Preview
          </h2>
          <p className='lg:text-lg'>Explore core topics covered in the DRID course</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5'>
          {weeks.map((week) => (
            <div
              key={week.number}
              className='bg-white p-4 lg:p-4  rounded-[18px] shadow-md flex items-start gap-4 hover:shadow-sm transition-shadow duration-300'
            >
              {/* Number Circle */}
              <div className='flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-base'>
                {week.number}
              </div>

              {/* Text */}
              <div>
                <p className='font-bold text-base sm:text-lg lg:text-xl'>
                  Week {week.number}: <br />
                  {week.title}
                </p>
                <p className='text-gray-600 text-sm lg:text-base mt-1 leading-relaxed'>
                  {week.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href='#'
          className='secondary-button px-12 py-4 self-center rounded-[4px] mt-15 lg:text-base'
        >
          <button className='flex justify-between gap-4'>
                  <p>View Full Curriculum</p><ArrowRight/>
          </button>
        </a>
      </div>

      {/* Testimonials */}
      <div className='lg:px-[100px] mt-33 flex-col flex items-center lg'>
        <h2 className='text-2xl md:text-4xl lg:text-[42px] font-bold mb-10'>
          What learners are saying
        </h2>
        <div className='md:text-2xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 lg:mt-15'>
          {[
            { name: 'Royal O.' },
            { name: 'Caleb U.' },
            { name: 'Joseph O.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className='bg-white p-6 rounded-md shadow-sm text-left flex flex-col gap-3'
            >
              <QuotationMark />
              <p className='text-sm md:text-[16px] text-gray-700'>
                Lorem ipsum dolor sit amet consectetur. Faucibus lectus luctus
                nunc eget pretium ipsum cras interdum turpis.
              </p>
              <p className='font-bold'>— {item.name}</p>
            </div>
          ))}
        </div>
        <a href='#' className='tertiary-button flex-nowrap font-medium mt-10'>
          <button className='flex flex-row gap-5 items-center'>
            <p>See More</p>
            <ArrowRight />
          </button>
        </a>
      </div>

      {/* FAQ Prompt */}
      <section className='min-h-screen flex flex-col justify-center items-center'>
        <Help />

        <h2 className='text-2xl md:text-4xl font-bold mb-2'>
          Got Questions About the Course?
        </h2>
        <p className='text-sm md:text-lg mb-4 max-w-md text-center mt-5'>
          We’ve answered your top questions on duration, requirements,
          certification and more.
        </p>

        <a href='#' className='tertiary-button flex-nowrap font-medium mt-10'>
          <button className='flex flex-row gap-5 items-center lg:text-base'>
            <p>View FAQs</p>
            <ArrowRight />
          </button>
        </a>
      </section>

      {/* CTA */}
      <section className='min-h-screen flex flex-col items-center'>
        <h2 className='text-2xl md:text-4xl font-bold mb-2'>
          Ready to start learning with DRID?
        </h2>
        <p className='mt-3 text-sm md:text-2xl text-center'>
          Join a growing community of learners across Nigeria. Gain <br />
          skills. Earn certificates. Grow your future.
        </p>
        <div className=' mt-12 flex flex-col items-center justify-center'>
          <a
            href='#'
            className='primary-button text-white text-sm md:text-[20px] font-[500] md:py-5 lg:px-8 lg:py-3 rounded-md '
          >
            REGISTER NOW
          </a>
          <p className='mt-9'>Not sure yet?</p>
          <a
            href='#'
            className='secondary-button lg:py-3 lg:px-9 rounded-md mt-6'
          >
            View Full Curriculum
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
