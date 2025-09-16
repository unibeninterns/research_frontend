"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import FAQs from "@/components/FAQs";
import Header from "@/components/HomeHeader";
import Footer from "@/components/HomeFooter";
import Check from "@/components/icons/check";
import Minus from "@/components/icons/minus";
import CheckCircle from "@/components/icons/checkCircle";
import Star from "@/components/icons/star";

const Pricing = () => {
  const router = useRouter();

  const handlePlanSelect = (plan: string) => {
    router.push(`/payment?plan=${plan}`);
  };
  const features = [
    {
      feature: "12 modules (self-paced, 12 weeks)",
      basic: true,
      premium: true,
    },
    {
      feature: "Two live sessions per week",
      basic: true,
      premium: true,
    },
    {
      feature: "Resources & templates",
      basic: true,
      premium: true,
    },
    {
      feature: "Student forum access",
      basic: true,
      premium: true,
    },
    {
      feature: "Practice quizzes",
      basic: true,
      premium: true,
    },
    {
      feature: "Tutor-graded assessments & feedback",
      basic: false,
      premium: true,
    },
    {
      feature: "Final exam",
      basic: false,
      premium: true,
    },
    {
      feature: "Transcript",
      basic: false,
      premium: true,
    },
    {
      feature: "Priority support",
      basic: false,
      premium: true,
    },
    {
      feature: "Professional Diploma Certificate (upon meeting criteria)",
      basic: false,
      premium: true,
    },
  ];
  const glance = [
    { feature: "Full Course Access", price: "₦50,000" },
    { feature: "Expert Grading of Assessments", price: "₦10,000" },
    { feature: "Final Exam & Certification", price: "₦30,000" },
    { feature: "Official Transcript", price: "₦10,000" },
  ];
  const addOns = [
    { feature: "One-on-One Research Clinic", price: "₦15,000" },
    { feature: "Capstone Project Feedback", price: "₦5,000" },
  ];
  const faqs = [
    {
      question: "Can I upgrade from Basic to Premium later?",
      answer: "Yes—pay the difference and keep your progress.",
    },
    {
      question: "How long do I have access?",
      answer: "Yes—pay the difference and keep your progress.",
    },
    {
      question: "Do I get a certificate on Basic?",
      answer: "Yes—pay the difference and keep your progress.",
    },
    {
      question: "Is there a transcript?",
      answer: "Yes—pay the difference and keep your progress.",
    },
    {
      question: "What payment options are available?",
      answer: "Yes—pay the difference and keep your progress.",
    },
  ];
  const basicFeatures = [
    "12 modules (self-paced, 12 weeks)",
    "Live sessions (2× weekly)",
    "Resources & templates",
    "Student forum access",
    "Practice quizzes",
  ];
  const premiumFeatures = [
    "Priority support",
    "Graded assessments + final exam",
    "Professional Diploma certificate (upon meeting criteria)",
    "Official transcript",
  ];

  const stars = [
    { left: 21, top: 13 },
    { left: 241, top: 40 },
    { left: 34, top: 105 },
    { left: 267, top: 165 },
    { left: 13, top: 428 },
    { left: 290, top: 503 },
  ];
  return (
    <>
      <Header />
      <section className="flex min-h-screen w-full flex-col items-center bg-white px-1 py-10 md:px-25 md:py-20">
        <div className="mt-3 flex flex-col items-center lg:mt-10">
          <p className="text-[18px] font-semibold text-[#800080] uppercase">
            Plans & Pricing
          </p>
          <h2 className="text-[36px] font-[700] md:text-[48px] lg:text-[42px]">
            Choose your plan
          </h2>
        </div>
        <div className="mt-3 flex flex-col items-center gap-6 md:mt-5 md:flex-row md:items-start lg:mt-15 lg:gap-14">
          <div className="flex flex-col items-center">
            <div className="relative flex h-[450px] w-[300px] flex-col items-center border border-[#D9D9D9] px-4 md:h-[500px] md:w-[350px] lg:h-[600px] lg:w-[352px] lg:py-2">
              <div className="flex flex-col items-center lg:mt-12">
                <p className="text-[22px] font-[700]">Basic</p>
                <p className="text-[32px] font-[700] lg:mb-2 lg:text-[36px]">
                  ₦50,000
                </p>
              </div>
              <div className="mt-0 flex w-full flex-col items-start md:px-4 md:py-2">
                <p className="m-1 my-1 w-full text-[16px] font-[700] md:m-4 md:my-4 lg:px-4">
                  Key Features
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  {basicFeatures.map((f) => (
                    <div key={f} className="flex items-start gap-2 md:gap-3">
                      <Check />
                      <p className="text-[14px] md:text-[14px]">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                onClick={() => handlePlanSelect("basic")}
                className="absolute bottom-5 rounded-[5px] bg-[#800080] px-[15px] py-[5px] text-[18px] font-[700] text-white hover:cursor-pointer md:bottom-10 md:px-[30px] md:py-[10px] md:text-[20px] lg:bottom-15 lg:px-[48px] lg:py-[16px]"
              >
                Get Started
              </div>
            </div>
            <p className="mt-1 w-full text-center text-[14px] md:mt-3 md:text-[18px]">
              NB: Access auto-expires after 12 weeks.
            </p>
          </div>
          <div className="relative z-5 flex h-[450px] w-[300px] flex-col items-center bg-[linear-gradient(18deg,_#9F3F9FCC_0.63%,_#FBEFFFE5_27.4%,_#FBEFFF_68.26%,_#9F3F9FCC_99.37%)] px-4 md:h-[500px] md:w-[350px] md:px-4 md:py-2 lg:h-[600px] lg:w-[350px]">
            <p className="absolute top-[-9px] left-[30px] rounded-[50px] bg-[#800080] px-3 py-[2px] text-[12px] font-bold text-white uppercase md:top-[-12px] md:left-[50px] md:px-2 md:py-1 lg:top-[-16px] lg:px-4 lg:py-2">
              recommended
            </p>
            <p className="mt-2 self-start text-[22px] font-[700] lg:mt-4">
              Premium
            </p>
            <div className="flex flex-col items-center px-2 py-1">
              <p className="text-[14px] font-[700] line-through lg:text-[16px]">
                ₦100,000
              </p>
              <h4 className="text-[32px] font-[700] lg:mb-2 lg:text-[32px]">
                ₦90,000
              </h4>
              <div className="rounded-[50px] bg-[linear-gradient(77deg,_#EFB832_31.63%,_#FEF092_50.4%,rgba(239,84,50,1))] px-[8px] py-[2px] text-[12px] font-semibold md:px-[12px]">
                Save ₦10,000
              </div>
            </div>
            <div className="m-1 flex w-full flex-col items-start lg:m-4 lg:px-4 lg:py-2">
              <p className="m-1 my-1 w-full text-[18px] font-[700] md:m-4 md:my-4 lg:px-4 lg:py-2">
                Everything in Basic plus...
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {premiumFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2 md:gap-3">
                    <Check />
                    <p className="w-full text-[14px]">{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => handlePlanSelect("basic")}
              className="absolute bottom-5 rounded-[5px] bg-[#800080] px-[15px] py-[5px] text-[18px] font-[700] text-white hover:cursor-pointer md:bottom-10 md:px-[30px] md:py-[10px] md:text-[20px] lg:bottom-15 lg:px-[48px] lg:py-[16px]"
            >
              Get Started
            </button>
            {stars.map((star, index) => (
              <div
                key={index}
                className={`absolute z-[-1]`}
                style={{ top: star.top, left: star.left }}
              >
                <Star />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <table className="mt-10 w-full bg-white shadow-sm">
            <thead className="shadow-b-sm bg-[rgba(251,239,255,0.4)]">
              <tr>
                <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:text-[14px]">
                  Features
                </th>
                <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:w-50 lg:text-[14px]">
                  Basic
                </th>
                <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:w-50 lg:text-[14px]">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, index) => (
                <tr
                  key={f.feature}
                  className="border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0"
                >
                  <td
                    className={`px-2 py-1 pt-3 text-[12px] md:text-[16px] lg:text-[16px] ${
                      index === 0 ? "pt-6" : ""
                    } `}
                  >
                    {f.feature}
                  </td>
                  <td
                    className={`px-2 py-1 pt-3 text-[12px] md:text-[16px] lg:text-[16px] ${
                      index === 0 ? "pt-6" : ""
                    }`}
                  >
                    {f.basic ? <CheckCircle /> : <Minus />}
                  </td>
                  <td
                    className={`px-2 py-1 text-[12px] md:text-[16px] lg:text-[16px] ${
                      index === 0 ? "pt-6" : ""
                    }`}
                  >
                    {f.premium ? <CheckCircle /> : <Minus />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a
            href=""
            className="gap-5x mt-5 flex items-center self-start px-4.5 py-3 text-[#800080]"
          >
            <p className="text-[15px] md:text-[18px]">
              View certification requirements
            </p>
            <ArrowRight color="#800080" />
          </a>
        </div>
        <div className="flex w-full flex-col justify-between gap-8 md:mt-10 md:flex-row md:items-start md:gap-5 lg:gap-10">
          <div className="flex flex-1 flex-col md:items-center">
            <div className="flex w-full flex-col items-center md:w-auto">
              <h2 className="text-center text-[27px] font-bold md:text-[32px] lg:text-[42px]">
                Everything at a Glance
              </h2>
              <p className="text-center text-[12px] md:text-[14px]">
                A transparent view of what you’re paying for — and what it’s
                really worth.
              </p>
            </div>
            <table className="mt-5 w-full bg-white shadow-sm">
              <thead className="shadow-b-sm bg-[rgba(251,239,255,0.4)]">
                <tr>
                  <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:text-[14px]">
                    Features
                  </th>
                  <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:text-[14px]">
                    Individual Price
                  </th>
                  <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:w-50 lg:text-[14px]">
                    Included in Premium Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {glance.map((g, index) => (
                  <tr
                    key={g.feature}
                    className="border-b-[rgba(237,238,241,1)] last:border-b-[5px]"
                  >
                    <td
                      className={`px-2 py-1 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? "pt-6" : ""
                      } pb-3`}
                    >
                      {g.feature}
                    </td>
                    <td
                      className={`px-2 py-1 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? "pt-6" : ""
                      } pb-3`}
                    >
                      {g.price}
                    </td>
                    <td
                      className={`px-2 py-1 ${index === 0 ? "pt-6" : ""} pb-3`}
                    >
                      <CheckCircle />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border-t px-2 py-1 pt-5">
                    <div className="my-2 flex flex-col gap-2">
                      <p className="text-lg font-[700]">Total Value</p>
                      <p className="text-sm font-[600]">₦100,000</p>
                    </div>
                  </td>
                  <td className="border-t px-2 py-1 pt-5">
                    <div className="my-2 flex flex-col gap-2">
                      <p className="text-lg font-[700] text-nowrap">
                        Premium Price
                      </p>
                      <p className="text-sm font-[600]">₦90,000</p>
                    </div>
                  </td>
                  <td className="border-t px-2 py-1 pt-5">
                    <div className="my-2 flex flex-col items-start gap-2">
                      <p className="text-lg font-[700]">You Save</p>
                      <div className="rounded-full bg-[linear-gradient(77deg,_#EFB832_31.63%,_#FEF092_50.4%,rgba(239,84,50,1))] px-[8px] py-[2px] text-[12px] font-semibold md:px-[12px]">
                        Save ₦10,000
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col items-center md:mt-0 md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-[27px] font-bold md:text-[32px] lg:text-[42px]">
                Optional Add-ons
              </h2>
              <p className="text-[12px] md:text-[14px]">
                NB: Not included in package
              </p>
            </div>
            <table className="mt-5 w-full bg-white shadow-sm">
              <thead className="shadow-b-sm bg-[rgba(251,239,255,0.4)]">
                <tr>
                  <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:text-[14px]">
                    Features
                  </th>
                  <th className="px-2 py-1 text-left text-[12px] font-[500] md:text-[14px] lg:text-[14px]">
                    Individual Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((g, index) => (
                  <tr key={g.feature} className="">
                    <td
                      className={`px-2 py-1 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? "pt-6" : ""
                      } pb-3`}
                    >
                      {g.feature}
                    </td>
                    <td
                      className={`px-2 py-1 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? "pt-6" : ""
                      } pb-3`}
                    >
                      {g.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-5 w-full md:mt-10 lg:mt-20">
          <h2 className="text-center text-[27px] font-bold md:mb-5 lg:text-[42px]">
            Frequently Asked Questions
          </h2>
          <FAQs faqs={faqs} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
