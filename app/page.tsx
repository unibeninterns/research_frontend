"use client";
import { ScholarCap } from "@/components/icons/ScholarCap";
import { Search } from "@/components/icons/Search";
import Image from "next/image";
import image from "../components/LandingPageImage.png";
// import {CourseSVG} from "@/components/courseSVG"
import { Certificate } from "@/components/icons/Certificate";
import Help from "@/components/icons/Help";
import Notes from "@/components/icons/Notes";
import Project from "@/components/icons/Project";
import QuotationMark from "@/components/icons/Quotation";
import { ArrowRight } from "lucide-react";
import Footer from "../components/HomeFooter";
import Header from "../components/HomeHeader";
// import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const weeks = [
    {
      number: 1,
      title: "Introduction to Research in the 21st Century",
      description:
        "Orientation, course objectives, and relevance in the digital age.",
    },
    {
      number: 2,
      title: "Research Approaches",
      description:
        "Explore qualitative, quantitative & mixed-method frameworks.",
    },
    {
      number: 3,
      title: "Literature Review & Knowledge Management",
      description: "Master sourcing and organizing key academic materials.",
    },
    {
      number: 4,
      title: "AI & Digital Tools for Research",
      description:
        "Boost research efficiency using AI tools and open-source platforms.",
    },
  ];

  return (
    <>
      <Header id="header" />
      <div
        className={`relative flex h-[calc(100vh-67px)] w-full items-center justify-center overflow-hidden lg:mt-[67px] lg:px-[100px]`}
      >
        <div className="absolute inset-0">
          <Image
            src="/heroSection/hero-image.png"
            alt="Background"
            fill
            className="object-fit"
            priority
          />
          {/* <div className='absolute inset-0 bg-black/30'></div> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 grid max-w-7xl items-center py-16 md:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-1 w-full text-white">
            <h1 className="text-5xl leading-none font-bold md:text-6xl lg:text-[84px]">
              Connect. <br />
              Learn. Grow.
            </h1>
            <p className="mt-5 text-xl md:text-[20px] lg:text-lg">
              Advance your skills through structured research and innovation
              courses curated by the Directorate of Research, Innovation and
              Development (DRID), University of Benin.
            </p>
            <button className="primary-button mt-12 rounded-md px-4 py-4 text-sm font-semibold transition md:px-15">
              REGISTER NOW
            </button>
          </div>
          <div className="col-span-1 hidden md:flex">
            <Image src={image} alt="image" className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-background mt-33 flex w-full items-center justify-center lg:px-[100px]">
        <div className="grid max-w-7xl grid-cols-2 items-center text-black">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5 text-3xl font-bold md:text-5xl lg:text-[42px]">
              <h2 className="lg:text-[42px]">About the DRID Course</h2>
            </div>
            <div className="lg:text-lg">
              <p>
                Get cutting-edge research and innovation training through our
                online, expert-led course tailored for students, researchers,
                and professionals.
              </p>
            </div>
            <div>
              <div className="mt-10 mb-3 flex lg:text-lg">
                <ScholarCap />
                <p className="ml-3">Learn from experienced faculty</p>
              </div>
              <div className="mb-3 flex lg:text-lg">
                <Search />
                <p className="ml-3">Research-driven practical insights</p>
              </div>
              <div className="mb-3 flex lg:text-lg">
                <Certificate />
                <p className="ml-3">Certificate of completion from DRID</p>
              </div>
              <div className="mb-3 flex lg:text-lg">
                <Project />
                <p className="ml-3">Hands-on case studies and projects</p>
              </div>
            </div>
          </div>
          <div className="hidden md:col-span-1 md:flex">
            <Image
              src="/heroSection/hero-about.png"
              alt="image"
              width={480}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="bg-background mt-33 flex w-full flex-col justify-center text-black md:text-xl lg:px-[100px]">
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <h2 className="col-span-2 flex justify-center text-3xl font-bold text-black md:col-span-1 md:text-4xl lg:text-[42px]">
            Course Module Preview
          </h2>
          <p className="lg:text-lg">
            Explore core topics covered in the DRID course
          </p>
        </div>
        <div className="relative z-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {weeks.map((week) => (
            <div
              key={week.number}
              className="flex items-start gap-4 rounded-[18px] bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-sm lg:p-4"
            >
              {/* Number Circle */}
              <div className="bg-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:text-base">
                {week.number}
              </div>

              {/* Text */}
              <div>
                <p className="text-base font-bold sm:text-lg lg:text-xl">
                  Week {week.number}: <br />
                  {week.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600 lg:text-base">
                  {week.description}
                </p>
              </div>
            </div>
          ))}
          <Notes className="right-20 z-[-5] h-57 w-58 rotate-12 transform lg:absolute lg:top-[-120px]" />
        </div>
        <a
          href="#"
          className="secondary-button mt-15 self-center rounded-[4px] px-12 py-4 lg:text-base"
        >
          <button className="flex justify-between gap-4">
            <p>View Full Curriculum</p>
            <ArrowRight />
          </button>
        </a>
      </div>

      {/* Testimonials */}
      <div className="lg mt-33 flex flex-col items-center lg:px-[100px]">
        <h2 className="mb-10 text-2xl font-bold md:text-4xl lg:text-[42px]">
          What learners are saying
        </h2>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3 md:text-2xl lg:mt-15">
          {[
            { name: "Royal O." },
            { name: "Caleb U." },
            { name: "Joseph O." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-md bg-white p-6 text-left shadow-sm"
            >
              <QuotationMark />
              <p className="text-sm text-gray-700 md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Faucibus lectus luctus
                nunc eget pretium ipsum cras interdum turpis.
              </p>
              <p className="font-bold">— {item.name}</p>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="tertiary-button mt-10 flex-nowrap font-medium text-[#800080]"
        >
          <button className="flex flex-row items-center gap-5">
            <p>See More</p>
            <ArrowRight />
          </button>
        </a>
      </div>

      {/* FAQ Prompt */}
      <section className="flex min-h-screen flex-col items-center justify-center">
        <Help />

        <h2 className="mt-4 text-2xl font-bold md:text-4xl lg:text-[42px]">
          Got Questions About the Course?
        </h2>
        <p className="mt-5 mb-4 max-w-md text-center text-sm md:text-lg">
          We’ve answered your top questions on duration, requirements,
          certification and more.
        </p>

        <a
          href="#"
          className="tertiary-button mt-10 flex-nowrap font-medium text-[#800080]"
        >
          <button className="flex flex-row items-center gap-5 lg:text-base">
            <p>View FAQs</p>
            <ArrowRight />
          </button>
        </a>
      </section>

      {/* CTA */}
      <section className="flex min-h-screen flex-col items-center">
        <h2 className="mb-2 text-2xl font-bold md:text-4xl lg:text-[42px]">
          Ready to start learning with DRID?
        </h2>
        <p className="mt-3 text-center text-sm md:text-2xl">
          Join a growing community of learners across Nigeria. Gain <br />
          skills. Earn certificates. Grow your future.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center">
          <a
            href="#"
            className="primary-button rounded-md text-sm font-[500] text-white md:py-5 md:text-[20px] lg:px-8 lg:py-3"
          >
            REGISTER NOW
          </a>
          <p className="mt-9">Not sure yet?</p>
          <a
            href="#"
            className="secondary-button mt-6 rounded-md lg:px-9 lg:py-3"
          >
            View Full Curriculum
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
