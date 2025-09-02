'use client';
import { ArrowRight, Check, Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import FAQs from '@/components/FAQs';
import Header from '@/components/HomeHeader';
import Footer from '@/components/HomeFooter';

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
  return (
    <>
      <Header />
      <section className='bg-white min-h-screen w-full flex flex-col items-center px-1 py-10 md:px-10 md:py-20'>
        <div className='mt-3 lg:mt-10 flex flex-col items-center'>
          <h2 className='text-[#800080] text-[18px] font-semibold uppercase'>
            Plans & Pricing
          </h2>
          <h3 className='md:text-[48px] text-[36px] font-[700]'>
            Choose your plan
          </h3>
        </div>
        <div className='flex flex-col md:flex-row gap-6 mt-3 md:mt-5 items-center md:items-start'>
          <div className='flex flex-col items-center'>
            <div className='relative flex flex-col h-[450px] w-[300px] md:h-[500px] lg:h-[691px] md:w-[350px] lg:w-[400px] border border-[#D9D9D9] items-center px-4 lg:py-2'>
              <div className='flex flex-col items-center mt-5 md:mt-0 lg:m-4 md:px-4 md:py-2'>
                <h4 className='text-[24px] font-[700]'>Basic</h4>
                <h4 className='text-[32px] lg:text-[36px] lg:mb-2 font-[700]'>
                  ₦50,000
                </h4>
              </div>
              <div className='flex flex-col items-start w-full mt-5 md:px-4 md:py-2'>
                <h4 className='lg:px-4 lg:py-2 md:m-4 m-1 font-[700] text-[18px] my-1 md:my-4 w-full '>
                  Key Features
                </h4>
                <div className='mt-2 flex-col flex gap-1'>
                  {features
                    .filter((feature) => feature.basic)
                    .map((f) => (
                      <div
                        key={f.feature}
                        className='flex  items-start gap-2 md:gap-3'
                      >
                        <Check strokeWidth={2} color='#800080' />
                        <p className='md:text-[16px] text-[14px]'>
                          {f.feature}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <button
                onClick={() => handlePlanSelect('basic')}
                className='text-[18px] md:text-[24px] text-white font-[700] bg-[#800080] rounded-[5px] px-[15px] md:px-[30px] lg:px-[60px] md:py-[10px] lg:py-[20px] py-[5px]  absolute bottom-5 md:bottom-10 lg:bottom-20 hover:cursor-pointer'
              >
                Get Started
              </button>
            </div>
            <p className='w-full text-center text-[14px] md:text-[18px] mt-1 md:mt-3'>
              NB: Access auto-expires after 12 weeks.
            </p>
          </div>
          <div className='flex flex-col h-[450px] w-[300px] md:h-[500px] lg:h-[691px] md:w-[350px] lg:w-[400px] items-center px-4 md:py-2 md:px-4 bg-[linear-gradient(30deg,rgba(159,63,159,0.8),rgba(251,239,255,0.9),rgba(251,239,255,1),rgba(159,63,159,0.8))] relative'>
            <p className='uppercase text-[12px] text-white font-bold absolute top-[-9px] left-[30px] md:top-[-12px] lg:top-[-16px] md:left-[50px] px-3 md:px-2  lg:px-4 py-[2px] md:py-1 lg:py-2 bg-[#800080] rounded-[50px]'>
              recommended
            </p>
            <h4 className='text-[24px] font-[700] self-start mt-2 lg:mt-4'>
              Premium
            </h4>
            <div className='flex flex-col items-center px-2 py-1'>
              <h4 className='text-[14px] lg:text-[16px] font-[700] line-through'>
                ₦100,000
              </h4>
              <h4 className='lg:text-[36px] text-[32px] font-[700] lg:mb-2'>
                ₦90,000
              </h4>
              <button className='bg-[linear-gradient(30deg,rgba(239,184,50,1),rgba(254,240,146,1),rgba(239,84,50,1))] md:px-[12px] px-[8px] py-[2px] rounded-[50px] text-[12px] font-semibold'>
                Save ₦10,000
              </button>
            </div>
            <div className='flex flex-col items-start w-full lg:px-4 lg:py-2 lg:m-4 m-1'>
              <h4 className='lg:px-4 lg:py-2 md:m-4 m-1 font-[700] text-[18px] my-1 md:my-4 w-full '>
                Everything in Basic plus...
              </h4>
              <div className='mt-2 flex-col flex gap-1'>
                {features
                  .filter((feature) => !feature.basic)
                  .map((f) => (
                    <div
                      key={f.feature}
                      className='flex items-start gap-2 md:gap-3'
                    >
                      <Check strokeWidth={2} color='#800080' />
                      <p className='text-[14px] w-full'>{f.feature}</p>
                    </div>
                  ))}
              </div>
            </div>
            <button
              onClick={() => handlePlanSelect('basic')}
              className='text-[18px] md:text-[24px] text-white font-[700] bg-[#800080] rounded-[5px] px-[15px] md:px-[30px] lg:px-[60px] md:py-[10px] lg:py-[20px] py-[5px]  absolute bottom-5 md:bottom-10 lg:bottom-20 hover:cursor-pointer'
            >
              Get Started
            </button>
          </div>
        </div>
        <div className='w-full flex items-center flex-col'>
          <table className='bg-white mt-10 w-full lg:w-[70%] shadow-sm'>
            <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
              <tr>
                <th className='text-left text-[12px] md:text-[16px] font-[500] px-2 py-1'>
                  Features
                </th>
                <th className='text-left text-[12px] md:text-[16px] font-[500] px-2 py-1'>
                  Basic
                </th>
                <th className='text-left  text-[12px] md:text-[16px] font-[500] px-2 py-1'>
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr
                  key={f.feature}
                  className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                >
                  <td className='py-1 px-2  text-[12px] md:text-[18px] '>
                    {f.feature}
                  </td>
                  <td className='py-1 px-2'>
                    {f.basic ? (
                      <Check
                        color='#800080'
                        className='p-1 md:border-2 rounded-full stroke-2 md:stroke-4 border-[#800080]'
                      />
                    ) : (
                      <Minus className='stroke-2 md:stroke-4 p-1 text-[#800080]' />
                    )}
                  </td>
                  <td className='py-1 px-2'>
                    {f.premium ? (
                      <Check
                        color='#800080'
                        className='p-1  md:border-2 rounded-full stroke-2 md:stroke-4 border-[#800080]'
                      />
                    ) : (
                      <Minus className='stroke-2 md:stroke-4 p-1 text-[#800080]' />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href='' className='text-[#800080] flex items-center mt-5'>
            <p className='mr-5 text-[15px] md:text-[20px]'>
              View certification requirements
            </p>
            <ArrowRight color='#800080' />
          </a>
        </div>
        <div className='md:mt-10 flex flex-col md:flex-row md:items-start p-2 lg:px-20 justify-around w-full md:gap-5 lg:gap-10'>
          <div className='flex flex-col md:items-center '>
            <div className='flex flex-col items-center w-full md:w-auto'>
              <h3 className='md:text-[32px] lg:text-[36px] text-[27px] font-bold text-center'>
                Everything at a Glance
              </h3>
              <p className='text-[12px] md:text-[16px] text-center'>
                A transparent view of what you’re paying for — and what it’s
                really worth.
              </p>
            </div>
            <table className='bg-white shadow-sm w-full mt-2'>
              <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
                <tr>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[16px] font-[500] px-2 py-1'>
                    Features
                  </th>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[16px] font-[500] px-2 py-1'>
                    Individual Price
                  </th>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[16px] font-[500] px-2 py-1'>
                    Included Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {glance.map((g) => (
                  <tr
                    key={g.feature}
                    className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                  >
                    <td className='py-1 px-2 text-[12px] md:text-[16px] lg:text-[18px]'>
                      {g.feature}
                    </td>
                    <td className='py-1 px-2 text-[12px] md:text-[16px] lg:text-[18px]'>
                      {g.price}
                    </td>
                    <td>
                      <Check
                        color='#800080'
                        className='p-1 rounded-full border-[#800080] md:border-2 stroke-2 md:stroke-4'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
            <div className='flex flex-col items-center md:items-start'>
              <h3 className='text-[27px] md:text-[32px] lg:text-[36px] font-bold'>
                Optional Add-ons
              </h3>
              <p className='text-[12px] md:text-[16px]'>
                NB: Not included in package
              </p>
            </div>
            <table className='bg-white w-full mt-2 shadow-sm'>
              <thead className='bg-[rgba(251,239,255,0.4)] shadow-b-sm'>
                <tr>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[16px] font-[500] px-2 py-1'>
                    Features
                  </th>
                  <th className='text-left text-[12px] md:text-[14px] lg:text-[16px] font-[500] px-2 py-1'>
                    Individual Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((g) => (
                  <tr
                    key={g.feature}
                    className='border-b-[1px] border-b-[rgba(237,238,241,1)] last:border-b-0'
                  >
                    <td className='py-1 px-2 text-[12px] md:text-[16px] lg:text-[18px]'>
                      {g.feature}
                    </td>
                    <td className='py-1 px-2 text-[12px] md:text-[16px] lg:text-[18px]'>
                      {g.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='md:w-[80%] mt-5 md:mt-10 lg:mt-20'>
          <h3 className='text-[27px] md:text-[36px] font-bold text-center md:mb-5'>
            Frequently Asked Questions
          </h3>
          <FAQs faqs={faqs} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
