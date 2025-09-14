'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FAQs from '@/components/FAQs';
import Header from '@/components/HomeHeader';
import Footer from '@/components/HomeFooter';
import Check from '@/components/icons/check';
import Minus from '@/components/icons/minus';
import CheckCircle from '@/components/icons/checkCircle';
import Star from '@/components/icons/star';

const Pricing = () => {
  const router = useRouter();

  const handlePlanSelect = (plan: string) => {
    router.push(`/payment?plan=${plan}`);
  };
  const features = [
    {
      feature: '12 modules (self-paced, 12 weeks)',
      basic: true,
      premium: true,
    },
    {
      feature: 'Two live sessions per week',
      basic: true,
      premium: true,
    },
    {
      feature: 'Resources & templates',
      basic: true,
      premium: true,
    },
    {
      feature: 'Student forum access',
      basic: true,
      premium: true,
    },
    {
      feature: 'Practice quizzes',
      basic: true,
      premium: true,
    },
    {
      feature: 'Tutor-graded assessments & feedback',
      basic: false,
      premium: true,
    },
    {
      feature: 'Final exam',
      basic: false,
      premium: true,
    },
    {
      feature: 'Transcript',
      basic: false,
      premium: true,
    },
    {
      feature: 'Priority support',
      basic: false,
      premium: true,
    },
    {
      feature: 'Professional Diploma Certificate (upon meeting criteria)',
      basic: false,
      premium: true,
    },
  ];
  const glance = [
    { feature: 'Full Course Access', price: '₦50,000' },
    { feature: 'Expert Grading of Assessments', price: '₦10,000' },
    { feature: 'Final Exam & Certification', price: '₦30,000' },
    { feature: 'Official Transcript', price: '₦10,000' },
  ];
  const addOns = [
    { feature: 'One-on-One Research Clinic', price: '₦15,000' },
    { feature: 'Capstone Project Feedback', price: '₦5,000' },
  ];
  const faqs = [
    {
      question: 'Can I upgrade from Basic to Premium later?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'How long do I have access?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'Do I get a certificate on Basic?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'Is there a transcript?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
    {
      question: 'What payment options are available?',
      answer: 'Yes—pay the difference and keep your progress.',
    },
  ];
  const basicFeatures = [
    '12 modules (self-paced, 12 weeks)',
    'Live sessions (2× weekly)',
    'Resources & templates',
    'Student forum access',
    'Practice quizzes',
  ];
  const premiumFeatures = [
    'Priority support',
    'Graded assessments + final exam',
    'Professional Diploma certificate (upon meeting criteria)',
    'Official transcript',
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
      <section className='bg-white min-h-screen w-full flex flex-col items-center px-1 py-10 md:px-25 md:py-20'>
        <div className='mt-3 lg:mt-10 flex flex-col items-center'>
          <p className='text-[#800080] text-[18px] font-semibold uppercase'>
            Plans & Pricing
          </p>
          <h2 className='md:text-[48px] lg:text-[42px] text-[36px] font-[700]'>
            Choose your plan
          </h2>
        </div>
        <div className='flex flex-col md:flex-row lg:gap-14 gap-6 mt-3 md:mt-5 lg:mt-15 items-center md:items-start'>
          <div className='flex flex-col items-center'>
            <div className='relative flex flex-col h-[450px] w-[300px] md:h-[500px] lg:h-[600px] md:w-[350px] lg:w-[352px] border border-[#D9D9D9] items-center px-4 lg:py-2'>
              <div className='flex flex-col items-center lg:mt-12 '>
                <p className='text-[22px] font-[700]'>Basic</p>
                <p className='text-[32px] lg:text-[36px] lg:mb-2 font-[700]'>
                  ₦50,000
                </p>
              </div>
              <div className='flex flex-col items-start w-full mt-0 md:px-4 md:py-2'>
                <p className='lg:px-4 md:m-4 m-1 font-[700] text-[16px] my-1 md:my-4 w-full'>
                  Key Features
                </p>
                <div className='mt-2 flex-col flex gap-1'>
                  {basicFeatures.map((f) => (
                    <div key={f} className='flex items-start gap-2 md:gap-3'>
                      <Check />
                      <p className='md:text-[14px] text-[14px]'>{f}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                onClick={() => handlePlanSelect('basic')}
                className='text-[18px] md:text-[20px] text-white font-[700] bg-[#800080] rounded-[5px] px-[15px] md:px-[30px] lg:px-[48px] md:py-[10px] lg:py-[16px] py-[5px]  absolute bottom-5 md:bottom-10 lg:bottom-15 hover:cursor-pointer'
              >
                Get Started
              </div>
            </div>
            <p className='w-full text-center text-[14px] md:text-[18px] mt-1 md:mt-3'>
              NB: Access auto-expires after 12 weeks.
            </p>
          </div>
          <div className='flex flex-col h-[450px] w-[300px] md:h-[500px] lg:h-[600px] md:w-[350px] lg:w-[350px] items-center px-4 md:py-2 md:px-4 bg-[linear-gradient(18deg,_#9F3F9FCC_0.63%,_#FBEFFFE5_27.4%,_#FBEFFF_68.26%,_#9F3F9FCC_99.37%)] relative z-5'>
            <p className='uppercase text-[12px] text-white font-bold absolute top-[-9px] left-[30px] md:top-[-12px] lg:top-[-16px] md:left-[50px] px-3 md:px-2  lg:px-4 py-[2px] md:py-1 lg:py-2 bg-[#800080] rounded-[50px]'>
              recommended
            </p>
            <p className='text-[22px] font-[700] self-start mt-2 lg:mt-4'>
              Premium
            </p>
            <div className='flex flex-col items-center px-2 py-1'>
              <p className='text-[14px] lg:text-[16px] font-[700] line-through'>
                ₦100,000
              </p>
              <h4 className='lg:text-[32px] text-[32px] font-[700] lg:mb-2'>
                ₦90,000
              </h4>
              <div className='bg-[linear-gradient(77deg,_#EFB832_31.63%,_#FEF092_50.4%,rgba(239,84,50,1))] md:px-[12px] px-[8px] py-[2px] rounded-[50px] text-[12px] font-semibold'>
                Save ₦10,000
              </div>
            </div>
            <div className='flex flex-col items-start w-full lg:px-4 lg:py-2 lg:m-4 m-1'>
              <p className='lg:px-4 lg:py-2 md:m-4 m-1 font-[700] text-[18px] my-1 md:my-4 w-full '>
                Everything in Basic plus...
              </p>
              <div className='mt-2 flex-col flex gap-1'>
                {premiumFeatures.map((f) => (
                  <div key={f} className='flex items-start gap-2 md:gap-3'>
                    <Check />
                    <p className='text-[14px] w-full'>{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => handlePlanSelect('basic')}
              className='text-[18px] md:text-[20px] text-white font-[700] bg-[#800080] rounded-[5px] px-[15px] md:px-[30px] lg:px-[48px] md:py-[10px] lg:py-[16px] py-[5px]  absolute bottom-5 md:bottom-10 lg:bottom-15 hover:cursor-pointer'
            >
              Get Started
            </button>
            {stars.map((star, index) => (
              <div
                key={index}
                className={`absolute z-[-1]`}
                style={{top: star.top, left: star.left}}
              >
                <Star />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full flex items-center flex-col'>
          <table className='bg-white mt-10 w-full shadow-sm'>
            <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
              <tr>
                <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1'>
                  Features
                </th>
                <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1 lg:w-50'>
                  Basic
                </th>
                <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1 lg:w-50'>
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, index) => (
                <tr
                  key={f.feature}
                  className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                >
                  <td
                    className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] pt-3 ${
                      index === 0 ? 'pt-6' : ''
                    } `}
                  >
                    {f.feature}
                  </td>
                  <td
                    className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] pt-3 ${
                      index === 0 ? 'pt-6' : ''
                    }`}
                  >
                    {f.basic ? <CheckCircle /> : <Minus />}
                  </td>
                  <td
                    className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] ${
                      index === 0 ? 'pt-6' : ''
                    }`}
                  >
                    {f.premium ? <CheckCircle /> : <Minus />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a
            href=''
            className='text-[#800080] flex items-center mt-5 self-start py-3 px-4.5 gap-5x'
          >
            <p className='text-[15px] md:text-[18px]'>
              View certification requirements
            </p>
            <ArrowRight color='#800080' />
          </a>
        </div>
        <div className='md:mt-10 flex flex-col md:flex-row md:items-start gap-8 justify-between w-full md:gap-5 lg:gap-10'>
          <div className='flex flex-col md:items-center flex-1'>
            <div className='flex flex-col items-center w-full md:w-auto'>
              <h2 className='md:text-[32px] lg:text-[42px] text-[27px] font-bold text-center'>
                Everything at a Glance
              </h2>
              <p className='text-[12px] md:text-[14px] text-center'>
                A transparent view of what you’re paying for — and what it’s
                really worth.
              </p>
            </div>
            <table className='bg-white shadow-sm w-full mt-5'>
              <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
                <tr>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1'>
                    Features
                  </th>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1'>
                    Individual Price
                  </th>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1 lg:w-50'>
                    Included in Premium Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {glance.map((g, index) => (
                  <tr
                    key={g.feature}
                    className='border-b-[rgba(237,238,241,1)] last:border-b-[5px]'
                  >
                    <td
                      className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? 'pt-6' : ''
                      } pb-3 `}
                    >
                      {g.feature}
                    </td>
                    <td
                      className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? 'pt-6' : ''
                      } pb-3 `}
                    >
                      {g.price}
                    </td>
                    <td
                      className={`py-1 px-2 ${index === 0 ? 'pt-6' : ''} pb-3 `}
                    >
                      <CheckCircle />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className='py-1 px-2 pt-5 border-t'>
                    <div className='flex flex-col my-2 gap-2'>
                      <p className='font-[700] text-lg'>Total Value</p>
                      <p className='font-[600] text-sm'>₦100,000</p>
                    </div>
                  </td>
                  <td className='py-1 px-2 pt-5 border-t'>
                    <div className='flex flex-col my-2 gap-2'>
                      <p className='font-[700] text-lg text-nowrap'>
                        Premium Price
                      </p>
                      <p className='font-[600] text-sm'>₦90,000</p>
                    </div>
                  </td>
                  <td className='py-1 px-2 pt-5 border-t'>
                    <div className='flex flex-col my-2 gap-2 items-start'>
                      <p className='font-[700] text-lg'>You Save</p>
                      <div className='bg-[linear-gradient(77deg,_#EFB832_31.63%,_#FEF092_50.4%,rgba(239,84,50,1))] md:px-[12px] px-[8px] py-[2px] rounded-full text-[12px] font-semibold '>
                        Save ₦10,000
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
            <div className='flex flex-col items-center md:items-start'>
              <h2 className='text-[27px] md:text-[32px] lg:text-[42px] font-bold'>
                Optional Add-ons
              </h2>
              <p className='text-[12px] md:text-[14px]'>
                NB: Not included in package
              </p>
            </div>
            <table className='bg-white w-full mt-5 shadow-sm'>
              <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
                <tr>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1'>
                    Features
                  </th>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[14px] font-[500] px-2 py-1'>
                    Individual Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((g, index) => (
                  <tr key={g.feature} className=''>
                    <td
                      className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? 'pt-6' : ''
                      } pb-3 `}
                    >
                      {g.feature}
                    </td>
                    <td
                      className={`py-1 px-2 text-[12px] md:text-[16px] lg:text-[16px] ${
                        index === 0 ? 'pt-6' : ''
                      } pb-3 `}
                    >
                      {g.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='w-full mt-5 md:mt-10 lg:mt-20'>
          <h2 className='text-[27px] lg:text-[42px] font-bold text-center md:mb-5'>
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
