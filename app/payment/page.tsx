"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import paystack from "../../components/paystack-logo.png";
import { Suspense } from "react";
import Loading from "@/components/Loading";

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

const plans = {
  basic: {
    name: "Basic Access",
    price: "₦50,000",
    key: "basic",
  },
  premium: {
    name: "Premium Access",
    price: "₦90,000",
    key: "premium",
  },
};

const PaymentScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "premium"; // default = basic
  const selectedPlan = plans[plan as keyof typeof plans];

  const planFeatures = features.filter(
    (f) => f[selectedPlan.key as "basic" | "premium"],
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
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-8">
      <div className="rounded-[10px] border-[0.5px] border-[#EDEEF1] p-5 text-center shadow-sm lg:px-5 lg:py-4">
        <p className="px-15 text-3xl font-bold lg:text-[42px]">
          {selectedPlan.name}
        </p>

        <hr className="mt-2 border-[0.5px] text-[#EDEEF1]" />

        <ul className="mt-4 flex list-disc flex-col items-start gap-2 pl-6 text-left">
          {planFeatures.map((f) => (
            <li key={f.feature} className="text-base">
              {f.feature}
            </li>
          ))}
        </ul>
        <hr className="mt-4 border-[0.5px] text-[#EDEEF1]" />

        <div className="mt-4">
          <p className="text-xl font-bold">Total Cost</p>
          <p className="text-2xl font-bold">{selectedPlan.price}</p>

          <button
            onClick={payWithPaystack}
            className="primary-button mt-10 mb-7 rounded-sm px-14 py-4 text-[15px] text-white hover:cursor-pointer"
          >
            Pay Now
          </button>
        </div>
      </div>
      <p className="mt-8 flex items-center justify-center pt-5 text-sm">
        Secure checkout with
        <Image
          className="w-20 pl-2"
          src={paystack.src}
          alt="Paystack Logo"
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
