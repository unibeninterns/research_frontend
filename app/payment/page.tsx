"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import paystack from "../../components/paystack-logo.png";

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
  const plan = searchParams.get("plan") || "basic"; // default = basic
  const selectedPlan = plans[plan as keyof typeof plans];

  const planFeatures = features.filter(
    (f) => f[selectedPlan.key as "basic" | "premium"]
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
    <div className="min-h-screen w-full justify-center items-center flex">
      <div className="rounded-md border-black text-center border-3 w-[500px] px-4 py-10">
        <p className="text-3xl font-bold pb-3">{selectedPlan.name}</p>

        <ul className="list-disc pl-6 text-left border-y-[1px] py-6 border-gray-300">
          {planFeatures.map((f) => (
            <li key={f.feature}>{f.feature}</li>
          ))}
        </ul>

        <div>
          <p className="font-bold text-xl pt-6">Total Cost</p>
          <p className="font-bold text-2xl">{selectedPlan.price}</p>

          <button
            onClick={payWithPaystack}
            className="bg-[#800080] hover:cursor-pointer text-[15px] text-white px-8 my-5 py-3 rounded-sm"
          >
            Pay Now
          </button>
        </div>

        <p className="flex items-center text-sm pt-5 justify-center">
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
    </div>
  );
};

export default PaymentScreen;
