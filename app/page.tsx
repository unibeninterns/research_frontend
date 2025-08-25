import Image from "next/image";
import image from "../components/LandingPageImage.png";
import image2 from "../components/image.png";
import { ScholarCap } from "@/components/scholarCap";
import { Search } from "@/components/search";
// import {CourseSVG} from "@/components/courseSVG"
import {Certificate} from "@/components/certificate"
import Header from "../components/HomeHeader"
import Footer from "../components/HomeFooter"


export default function Home() {
  const weeks = [
    {
      number: 1,
      title: "Introduction to Research in the 21st Century",
      description: "Orientation, course objectives, and relevance in the digital age.",
    },
    {
      number: 2,
      title: "Research Approaches",
      description: "Explore qualitative, quantitative & mixed-method frameworks.",
    },
    {
      number: 3,
      title: "Literature Review & Knowledge Management",
      description: "Master sourcing and organizing key academic materials.",
    },
    {
      number: 4,
      title: "AI & Digital Tools for Research",
      description: "Boost research efficiency using AI tools and open-source platforms.",
    },
  ];
  return (
    <>
    <Header/>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-600"></div>

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#7E22CE"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,234.7C1120,256,1280,224,1360,208L1440,192V320H0Z"
          ></path>
        </svg>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16 grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3 w-full col-span-1 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-none">
              Connect. <br />
              Learn. Grow.
            </h1>
            <p className="text-xl md:text-3xl font-bold text-gray-300 max-w-lg">
              Advance your skills through structured research and innovation
              courses curated by the Directorate of Research, Innovation and
              Development (DRID), University of Benin.
            </p>
            <button className="bg-purple-500 hover:bg-pink-700 text-white md:px-15 py-3 rounded-md font-semibold transition text-sm px-4">
              REGISTER NOW
            </button>
          </div>
          <div className="hidden md:flex col-span-1">
            <Image src={image} alt="image" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex justify-center items-center bg-background md:text-xl">
        <div className="grid items-center py-10 max-w-7xl px-10 grid-cols-2 text-black">
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl md:text-5xl mb-5 font-bold">
              <h1>About the DRID Course</h1>
            </div>
            <div className="">
              <p>
                Get cutting-edge research and innovation training through our
                online, expert-led course tailored for students, researchers, and
                professionals.
              </p>
            </div>
            <div>
              <div className="flex mb-4 mt-15">
                <ScholarCap/>
                <p className="ml-4">Learn from experienced faculty</p>
              </div>
              <div className="flex mb-4">
                <Search/>
                <p className="ml-4">Research-driven practical insights</p>
              </div>
              <div className="flex mb-4">
                <Certificate/>
                <p className="ml-4">Certificate of completion from DRID</p>
              </div>
              <div className="flex mb-4">
                <Certificate/>
                <p className="ml-4">Hands-on case studies and projects</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-1">
            <Image src={image2} alt="image" width={548} height={463} />
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className="pt-30 w-full block justify-center  bg-background md:text-xl text-black">
        <div className="w-full grid grid-cols-2">
        <h1 className="text-3xl md:text-4xl font-bold text-black md:col-span-1 col-span-2 justify-center flex px-10">Course Module Preview</h1>
      </div>
      <div className=" py-10 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {weeks.map((week) => (
          <div
            key={week.number}
            className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Number Circle */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm sm:text-base">
              {week.number}
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
                Week {week.number}: <br/>{week.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">
                {week.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center items-center">
       <a
            href="#"
            className="border border-purple-900 text-purple-800 font-bold py-3 px-6 rounded-md"
          >
            View Full Curriculum 
          </a>
    </div>
      </div>
      <div className="bg-background text-black text-center py-16 px-4">
      {/* Testimonials */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">What learners are saying</h2>
        <div className="md:text-2xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { name: "Royal O." },
            { name: "Caleb U." },
            { name: "Joseph O." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md shadow-sm text-left"
            >
              <p className="font-bold text-3xl md:text-6xl">"</p>
              <p className="mb-4 text-sm md:text-xl text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Faucibus lectus luctus
                nunc eget pretium ipsum cras interdum turpis.
              </p>
              <p className="font-bold">— {item.name}</p>
            </div>
          ))}
        </div>
        <a href="#" className="text-purple-600 font-medium">
          See More →
        </a>
      </section>

      {/* FAQ Prompt */}
      <section className="py-24 flex flex-col items-center">
  <div className="bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold mb-4">
    ?
  </div>

  <h3 className="text-2xl md:text-4xl font-bold mb-2">Got Questions About the Course?</h3>
  <p className="text-gray-700 text-sm md:text-2xl mb-4 max-w-md text-center">
    We’ve answered your top questions on duration, requirements, certification and more.
  </p>

  <a href="#" className="text-purple-600 font-medium">
    View FAQs →
  </a>
</section>

      {/* CTA */}
      <section className="py-24">
        <h3 className="text-2xl md:text-4xl font-bold mb-2">Ready to start learning with DRID?</h3>
        <p className="text-gray-700 mb-6 text-sm md:text-2xl">
          Join a growing community of learners across Nigeria. Gain skills. Earn certificates. Grow your future.
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="#"
            className="bg-purple-800 hover:bg-purple-700 text-white text-sm md:text-lg font-bold md:py-5 px-8 py-3 rounded-md "
          >
            REGISTER NOW
          </a>
          <a
            href="#"
            className="border border-purple-900 text-purple-800 font-bold py-3 px-6 rounded-md"
          >
            View Full Curriculum
          </a>
        </div>
      </section>
    </div>
    
    <Footer/>
    </>
  );
}

