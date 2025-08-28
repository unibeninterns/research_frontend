"use client"
import Image from "next/image"
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
} from "lucide-react"
import LecturerSection from "@/components/lecturers"
import FAQs from "@/components/FAQs"
import Header from "../../components/HomeHeader"
import Footer from "../../components/HomeFooter"
// import Image from 'next/image';
import image1 from "../../public/about/8b55db4a8cc952ea101a90132d5ed08bbd565d47.jpg"
import image2 from "../../public/about/fd22a6a3ffd7a34ff6b240ae40a44e4f66e25da8.jpg"

const About = () => {
  const nutshell = [
    {
      icon: <Calendar1 color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Duration",
      text: "12 weeks",
    },
    {
      icon: <Monitor color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Format",
      text: "Fully online & self-paced",
    },
    {
      icon: <Video color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Live Sessions",
      text: "F2 weekly expert-led live sessions",
    },
    {
      icon: <ListChecks color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Assessment",
      text: "Continuous quizzes + final project & exam",
    },
    {
      icon: <BriefcaseBusiness color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Capstone Project",
      text: "Build and present a practical research portfolio",
    },
    {
      icon: <FileBadge color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Certification",
      text: "Digital diploma [with optional tanscript]",
    },
    {
      icon: <CircleUserRound color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Support",
      text: "Personalized expert feedback available",
    },
    {
      icon: <CreditCard color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Fee",
      text: "₦50,000+ (see full pricing for breakdown)",
    },
  ]

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
  ]

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
  ]

  const enroll = [
    {
      icon: <GraduationCap color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Postgraduate students",
      text: "seeking structured support in their research journey.",
    },
    {
      icon: <Search color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Early-career researchers",
      text: "who want to strengthen their methodology and data skills.",
    },
    {
      icon: <Presentation color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Faculty and lecturers",
      text: "aiming to update their research practice with digital tools.",
    },
    {
      icon: <BriefcaseBusiness color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "NGO researchers and data officers",
      text: "working on evidence-based programs.",
    },
    {
      icon: <Lightbulb color="#800080" strokeWidth={1.5} height={40} width={40} />,
      title: "Innovation and grant-focused professionals",
      text: "involved in proposal writing and research-driven projects.",
    },
  ]

  const criteria = [
    "Complete all weekly modules",
    "Score at least 70% in the final assessment",
    "Attend 80% of live sessions",
    "Complete final capstone project",
  ]

  const info = [
    {
      question: "What is the duration of the course?",
      answer: "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "Do I need any prior knowledge before enrolling?",
      answer: "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "How can I track my learning progress?",
      answer: "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
    {
      question: "Can I interact with lecturers during the course?",
      answer: "The course lasts for 12 weeks including virtual classes, assignments, and examination.",
    },
  ]

  return (
    <>
      <Header />
      <section className="relative h-[100dvh] w-full border p-10 flex items-center bg-[linear-gradient(90deg,rgba(47,20,50,0.8),rgba(45,17,43,0.8),rgba(43,13,36,0.8),rgba(52,29,65,0.85))]">
        <Image
          src={image1 || "/placeholder.svg"}
          alt="Students learning from a laptop screen"
          fill
          className="absolute top-0 left-0 w-full object-cover z-[-5]"
          priority
        />
        <div className="space-y-5 w-full lg:w-3/5 mx-2 lg:mx-10 mt-5 text-white">
          <h1 className="text-3xl lg:text-5xl font-bold leading-none">
            Welcome to the
            <br />
            DRID Course Platform
          </h1>
          <p className="text-lg lg:text-2xl leading-none">
            A hub of dynamic research-driven training,
            <br />
            designed to equip you with practical tools for
            <br />
            tomorrow
          </p>
          <button className="px-5 py-3 bg-[rgba(128,0,128,1)] text-white text-md lg:text-[24px] font-semibold rounded-lg">
            VIEW COURSE CURRICULUM
          </button>
        </div>
      </section>
      <section className="min-h-screen w-full p-6 lg:px-20 lg:py-10 bg-[#FBEFFF]">
        <div className="flex justify-center flex-col md:flex-row w-full space-x-5 py-20">
          <div className="md:w-3/5">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5">
              The DRID Learning
              <br />
              Experience
            </h1>
            <p className="text-md lg:text-2xl">
              The Professional Diploma in Research Technologies and Innovation is offered by the Directorate of
              Research, Innovation, and Development (DRID) at the University of Benin.
              <br />
              This 12-week fully online, self-paced program is designed to empower researchers, postgraduate students,
              lecturers, and innovation professionals with modern research tools, AI-based methods, academic writing
              skills, data analysis strategies, grant writing expertise, and personal branding techniques.
              <br />
              With expert-led live sessions, practical assignments, and a final portfolio project, learners build core
              research competencies for career and academic growth in today’s knowledge economy.
            </p>
          </div>
          <div className="w-full h-80 lg:h-96 self-center md:w-2/5 bg-[linear-gradient(0deg,rgba(37,11,39,0.5),rgba(133,40,141,0.2))] z-5 md:mt-0 mt-5">
            <Image
              src={image2 || "/placeholder.svg"}
              alt="Students learning from a laptop screen"
              className="object-cover z-[-5] h-full w-full"
            />
          </div>
        </div>
        <div className="mt-12 pb-10">
          <h1 className="text-2xl lg:text-3xl font-bold leading-none my-8">The DRID Diploma in a Nutshell</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {nutshell.map((n) => (
              <div
                key={n.title}
                className="border-[0.5px] border-[#800080] rounded-xl bg-[rgba(256,256,256,.25)] flex items-start p-2 lg:p-3 space-x-2"
              >
                <div className="flex items-center justify-center mx-1 my-1">{n.icon}</div>
                <div className="flex flex-col">
                  <h1 className="mb-1 font-semibold text-lg lg:text-2xl">{n.title}</h1>
                  <p className="text-[15px] lg:text-[20px]">{n.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full py-20 px-8 lg:px-20 bg-white">
        <div className="flex flex-col items-center w-full mb-2 lg:mb-10">
          <h1 className="text-2xl lg:text-5xl font-bold leading-none mb-5">Curriculum Snapshot</h1>
          <p className="text-md mb-6 lg:text-2xl text-center">
            Explore the full learning journey—from foundational concepts to your final project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
              className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                {index + 1}
              </div>
              <div>
                <h1 className="font-semibold text-base sm:text-lg lg:text-xl">
                  Week {index + 1}:<br />
                  {week.title}
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">{week.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-screen w-full px-4 lg:px-10 flex flex-col items-center">
        <div className="w-full py-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-5xl font-bold leading-none my-5 w-full text-center">What You'll Gain</h1>
          <div className="space-y-4 lg:space-y-10 my-4 lg-my-10">
            {gains.map((gain) => (
              <div key={gain.title} className="flex items-start">
                <Check color="#800080" strokeWidth={2} height={30} width={30} />
                <p className="text-md lg:text-xl ml-2">
                  <span className="font-bold">{gain.title}</span> - {gain.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full pb-20 flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-5xl font-bold leading-none my-5 w-full text-center">Who Should Enroll</h1>
          <div className="space-y-4 lg:space-y-10 my-4 lg-my-10">
            {enroll.map((e) => (
              <div key={e.title} className="flex items-start">
                {e.icon}
                <p className="text-md lg:text-xl ml-4">
                  <span className="font-bold">{e.title}</span> - {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full px-1 lg:px-16 py-25 bg-[rgba(254,251,255,1)]">
        <div className="w-full flex flex-col items-center">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold leading-none my-1 w-full text-center">Meet Your Lecturers</h1>
            <p className="text-md text-center mx-1 lg:text-2xl">Get mentored by top researchers across Africa</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <LecturerSection />
        </div>
        <div className="w-full flex flex-col md:flex-row items-start justify-center mt-10">
          <div className="bg-white border-2 border-[#F9DBFF] flex items-center justify-center flex-col py-4 px-2 m-2 rounded-2xl flex-1">
            <h1 className="text-xl lg:text-3xl font-bold py-4 px-2 m-4 ">Certification Criteria</h1>
            <div className="flex flex-col">
              {criteria.map((c) => (
                <div key={c} className="flex py-4 px-2">
                  <Check strokeWidth={3} color="#800080CC" />
                  <p className="text-md lg:text-2xl ml-2">{c}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border-2 border-[#F9DBFF] flex items-center justify-center flex-col py-4 px-2 m-2 rounded-2xl flex-1">
            <h1 className="text-xl lg:text-3xl font-bold py-4 px-2 m-4 ">Frequently Asked Questions</h1>
            <FAQs faqs={info} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
