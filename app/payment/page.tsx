'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import paystack from '../../components/paystack-logo.png';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

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

const plans = {
  basic: {
    name: 'Basic Access',
    price: '₦50,000',
    key: 'basic',
  },
  premium: {
    name: 'Premium Access',
    price: '₦90,000',
    key: 'premium',
  },
};

const PaymentScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'premium'; // default = basic
  const selectedPlan = plans[plan as keyof typeof plans];

  const planFeatures = features.filter(
    (f) => f[selectedPlan.key as 'basic' | 'premium']
  );

  {
    /*
  const payWithPaystack = () => {
    const handler = (window as any).PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY, // your public key
      email: "customer@email.com",
      amount: 9000000, // in kobo
      currency: "NGN",
      callback: async function (response: any) {
        try {
          // Verify with backend
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify_payment/${response.reference}`
          );
          const data = await res.json();

          if (data.status === "success") {
            router.push(`/payment/success?plan=${plan}&amount=${selectedPlan.price}&email=${userEmail}&ref=123456`);
          } else {
            alert("❌ Verification failed");
          }
        } catch (e) {
          alert("⚠️ Error verifying payment");
        }
      },
      onClose: function () {
        alert("Transaction was not completed.");
      },
    });

    handler.openIframe();
  };
  */
  }

  const payWithPaystack = () => {
    router.push(`/payment/success?plan=${plan}&amount=${selectedPlan.price}`);
  };

  return (
    <div className='min-h-screen w-full justify-center items-center flex flex-col bg-white p-8'>
      <div className='rounded-[10px] border-[#EDEEF1] text-center border-[0.5px] p-5 lg:px-5 lg:py-4 shadow-sm'>
        <p className='text-3xl lg:text-[42px] font-bold px-15'>
          {selectedPlan.name}
        </p>

        <hr className='mt-2 text-[#EDEEF1] border-[0.5px]' />

        <ul className='list-disc pl-6 text-left flex flex-col items-start gap-2 mt-4'>
          {planFeatures.map((f) => (
            <li key={f.feature} className='text-base'>
              {f.feature}
            </li>
          ))}
        </ul>
        <hr className='mt-4 text-[#EDEEF1] border-[0.5px]' />

        <div className='mt-4'>
          <p className='font-bold text-xl'>Total Cost</p>
          <p className='font-bold text-2xl'>{selectedPlan.price}</p>

          <button
            onClick={payWithPaystack}
            className='primary-button hover:cursor-pointer text-[15px] text-white px-14 mt-10 py-4 rounded-sm mb-7'
          >
            Pay Now
          </button>
        </div>
      </div>
      <p className='flex items-center text-sm pt-5 justify-center mt-8'>
        Secure checkout with
        <Image
          className='w-20 pl-2'
          src={paystack.src}
          alt='Paystack Logo'
          width={80}
          height={32}
        />
      </p>
    </div>
  );
};

const PaymentScreenSuspense = () => (
  <Suspense fallback={<Loading />}>
    <PaymentScreen />
  </Suspense>
);

export default PaymentScreenSuspense;
