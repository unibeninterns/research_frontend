"use client";
import Image from "next/image";
import {
  BriefcaseBusiness,
  CalendarX as Calendar1,
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
} from "lucide-react";
import LecturerSection from "@/components/lecturers";
import FAQs from "@/components/FAQs";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
// import Image from 'next/image';
import image1 from "../../public/about/8b55db4a8cc952ea101a90132d5ed08bbd565d47.jpg";
import image2 from "../../public/about/fd22a6a3ffd7a34ff6b240ae40a44e4f66e25da8.jpg";

const About = () => {
  const nutshell = [
    {
      icon: <Calendar1 />,
      title: "Duration",
      text: "12 weeks",
    },
    {
      icon: <Monitor />,
      title: "Format",
      text: "Fully online & self-paced",
    },
    {
      icon: <Video />,
      title: "Live Sessions",
      text: "F2 weekly expert-led live sessions",
    },
    {
      icon: <ListChecks />,
      title: "Assessment",
      text: "Continuous quizzes + final project & exam",
    },
    {
      icon: <BriefcaseBusiness />,
      title: "Capstone Project",
      text: "Build and present a practical research portfolio",
    },
    {
      icon: <FileBadge />,
      title: "Certification",
      text: "Digital diploma [with optional tanscript]",
    },
    {
      icon: <CircleUserRound />,
      title: "Support",
      text: "Personalized expert feedback available",
    },
    {
      icon: <CreditCard />,
      title: "Fee",
      text: "₦50,000+ (see full pricing for breakdown)",
    },
  ];

  const weeks = [
    {
      title: "Introduction to Research in the 21st Century",
      text: "Orientation, course objectives, and relevance in the digital age.",
    },
    {
      title: "Research Approaches",
      text: "Explore qualitative, quantitative & mixed-method frameworks.",
    },
    {
      title: "Literature Review & Knowledge Management",
      text: "Master sourcing and organizing key academic materials.",
    },
    {
      title: "AI & Digital Tools for Research",
      text: "Boost research efficiency using AI tools and open-source platforms.",
    },
    {
      title: "Data Collection Methods",
      text: "Design and implement surveys, interviews, and observational techniques.",
    },
    {
      title: "Data Cleaning & Preprocessing",
      text: "Prepare raw data for analysis using modern cleaning techniques.",
    },
    {
      title: "Data Analysis & Visualization",
      text: "Apply analytical tools and visualize research insights with clarity.",
    },
    {
      title: "Academic Writing & Referencing + Live Session",
      text: "Structure research papers and cite sources using standard styles.",
    },
    {
      title: "Strategic Visibility & Personal Rebranding",
      text: "Build a compelling digital presence and professional research brand.",
    },
    {
      title: "Proposal & Grant Writing",
      text: "Craft winning proposals and identify funding opportunities.",
    },
    {
      title: "Capstone Project Week",
      text: "Plan, execute, and finalize your independent research project.",
    },
    {
      title: "Final Exam & Portfolio Presentation",
      text: "Submit your portfolio and complete final assessments to graduate.",
    },
  ];

  const gains = [
    {
      title: "Hands-on Research Skills",
      text: "Gain a practical understanding of modern research workflows.",
    },
    {
      title: "AI & Digital Tools Mastery",
      text: "Learn how to use smart tools to boost research productivity.",
    },
    {
      title: "Data Fluency",
      text: "Develop skills in analysis, visualization, and academic publishing.",
    },
    {
      title: "Capstone Project",
      text: "Create a real-world research project to showcase in your portfolio.",
    },
    {
      title: "Verified Certification",
      text: "Earn a professional digital diploma from DRID, University of Benin.",
    },
  ];

  const enroll = [
    {
      icon: (
        <GraduationCap
          color="#800080"
          strokeWidth={1.5}
          height={40}
          width={40}
        />
      ),
      title: "Postgraduate students",
      text: "seeking structured support in their research journey.",
    },
    {
      icon: <Search color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Early-career researchers",
      text: "who want to strengthen their methodology and data skills.",
    },
    {
      icon: (
        <Presentation
          color="#800080"
          strokeWidth={1.5}
          height={40}
          width={40}
        />
      ),
      title: "Faculty and lecturers",
      text: "aiming to update their research practice with digital tools.",
    },
    {
      icon: (
        <BriefcaseBusiness
          color="#800080"
          strokeWidth={1.5}
          height={40}
          width={40}
        />
      ),
      title: "NGO researchers and data officers",
      text: "working on evidence-based programs.",
    },
    {
      icon: (
        <Lightbulb color="#800080" strokeWidth={1.5} height={40} width={40} />
      ),
      title: "Innovation and grant-focused professionals",
      text: "involved in proposal writing and research-driven projects.",
    },
  ];

  const criteria = [
    "Complete all weekly modules",
    "Score at least 70% in the final assessment",
    "Attend 80% of live sessions",
    "Complete final capstone project",
  ];

  const info = [
    {
      question: "What is the duration of the course?",
      answer:
        "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "Do I need any prior knowledge before enrolling?",
      answer:
        "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "How can I track my learning progress?",
      answer:
        "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "Can I interact with lecturers during the course?",
      answer:
        "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
  ];

  return (
    <>
      <Header />
      <section className="relative flex h-[100dvh] w-full items-center border bg-[linear-gradient(90deg,rgba(47,20,50,0.8),rgba(45,17,43,0.8),rgba(43,13,36,0.8),rgba(52,29,65,0.85))] p-10">
        <Image
          src={image1 || "/placeholder.svg"}
          alt="Students learning from a laptop screen"
          fill
          className="absolute top-0 left-0 z-[-5] w-full object-cover"
          priority
        />
        <div className="mx-2 mt-5 w-full space-y-5 text-white lg:mx-10 lg:w-3/5">
          <h1 className="text-3xl leading-none font-bold md:text-4xl lg:text-5xl">
            Welcome to the
            <br />
            DRID Course Platform
          </h1>
          <p className="text-lg leading-none lg:text-2xl">
            A hub of dynamic research-driven training,
            <br />
            designed to equip you with practical tools for
            <br />
            tomorrow
          </p>
          <button className="text-md rounded-lg bg-[rgba(128,0,128,1)] px-5 py-3 font-semibold text-white lg:text-[24px]">
            VIEW COURSE CURRICULUM
          </button>
        </div>
      </section>
      <section className="min-h-screen w-full bg-[#FBEFFF] p-2 lg:px-20 lg:py-10">
        <div className="m-5 mt-10 flex w-full flex-col justify-center space-x-5 md:flex-row lg:m-0 lg:py-20">
          <div className="md:w-3/5">
            <h1 className="mb-5 text-2xl font-bold md:text-3xl lg:text-5xl">
              The DRID Learning
              <br />
              Experience
            </h1>
            <p className="md:text-lg lg:text-2xl">
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
          <div className="z-5 mt-5 h-80 w-full self-center bg-[linear-gradient(0deg,rgba(37,11,39,0.5),rgba(133,40,141,0.2))] md:mt-0 md:w-2/5 lg:h-96">
            <Image
              src={image2 || "/placeholder.svg"}
              alt="Students learning from a laptop screen"
              className="z-[-5] h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="m-5 mt-10 mb-10 lg:m-0 lg:mt-12">
          <h1 className="my-4 mb-5 text-2xl leading-none font-bold md:text-3xl lg:my-8">
            The DRID Diploma in a Nutshell
          </h1>
          <div className="grid w-full grid-cols-1 gap-2 pb-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
            {nutshell.map((n) => (
              <div
                key={n.title}
                className="flex items-start space-x-2 rounded-xl border-[0.5px] border-[#800080] bg-[rgba(256,256,256,.25)] p-1 lg:p-3"
              >
                <div className="mx-1 my-1 flex items-center justify-center stroke-2 text-[#800080] lg:h-10 lg:w-10 lg:stroke-4">
                  {n.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-semibold lg:mb-1 lg:text-2xl">
                    {n.title}
                  </h3>
                  <p className="text-[14px] lg:text-[20px]">{n.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-white px-2 py-10 md:px-4 lg:px-20 lg:py-20">
        <div className="mb-2 flex w-full flex-col items-center lg:mb-10">
          <h2 className="mb-2 text-2xl leading-none font-bold lg:mb-5 lg:text-5xl">
            Curriculum Snapshot
          </h2>
          <p className="text-center text-[14px] lg:mb-6 lg:text-2xl">
            Explore the full learning journey—from foundational concepts to your
            final project.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:gap-6">
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
              className="flex items-start gap-2 rounded-xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-lg md:gap-4 lg:p-6"
            >
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#800080] text-sm font-bold text-white sm:text-base md:h-8 md:w-8 lg:h-10 lg:w-10">
                {index + 1}
              </div>
              <div>
                <h3 className="text-[14px] font-semibold md:text-[16px] lg:text-xl">
                  Week {index + 1}:<br />
                  {week.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-600 md:mt-1 md:text-[16px] lg:text-xl">
                  {week.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#FEFBFF] flex lg:min-h-screen w-full flex-col items-center px-4 lg:px-10">
        <div className="flex w-full flex-col items-center justify-center py-12">
          <h1 className="my-5 w-full text-center text-2xl leading-none font-bold lg:text-5xl">{`What You'll Gain`}</h1>
          <div className="lg-my-10 my-4 space-y-4 lg:space-y-10">
            {gains.map((gain) => (
              <div key={gain.title} className="flex items-start">
                <Check color="#800080" strokeWidth={2} height={30} width={30} />
                <p className="text-md ml-2 lg:text-xl">
                  <span className="font-bold">{gain.title}</span> - {gain.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center pb-20">
          <h1 className="my-5 w-full text-center text-2xl leading-none font-bold lg:text-5xl">
            Who Should Enroll
          </h1>
          <div className="lg-my-10 my-4 space-y-4 lg:space-y-10">
            {enroll.map((e) => (
              <div key={e.title} className="flex items-start">
                {e.icon}
                <p className="text-md ml-4 lg:text-xl">
                  <span className="font-bold">{e.title}</span> - {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full bg-[rgba(254,251,255,1)] py-5 lg:py-20 lg:px-16">
        <div className="flex w-full flex-col items-center">
          <div className="">
            <h1 className="my-1 w-full text-center text-2xl leading-none font-bold lg:text-5xl">
              Meet Your Lecturers
            </h1>
            <p className="text-md mx-1 text-center lg:text-2xl">
              Get mentored by top researchers across Africa
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <LecturerSection />
        </div>
        <div className="mt-10 flex w-full flex-col md:items-start justify-center md:flex-row">
          <div className="m-2 flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-[#F9DBFF] bg-white px-2 py-4">
            <h1 className="lg:m-4 px-2 py-4 text-xl font-bold lg:text-3xl">
              Certification Criteria
            </h1>
            <div className="flex flex-col">
              {criteria.map((c) => (
                <div key={c} className="flex py-2 lg:px-2 lg:py-4">
                  <Check strokeWidth={3} color="#800080CC" />
                  <p className="text-md ml-2 lg:text-2xl">{c}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="m-2 flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-[#F9DBFF] bg-white px-2 py-4">
            <h1 className="lg:m-4 px-2 py-4 text-xl font-bold lg:text-3xl">
              Frequently Asked Questions
            </h1>
            <FAQs faqs={info} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
