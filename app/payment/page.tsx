"use client";
import { useRouter } from "next/navigation";
import paystack from "../../components/paystack-logo.png";

const PaymentScreen = () => {
  const router = useRouter();

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
            router.push("/payments/success");
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
    router.push("/payment/success");
  };
  return (
    <div className="min-h-screen w-full justify-center items-center flex">
      <div className="rounded-md border-black text-center border-3 w-[500px] px-4 py-10">
        <p className="text-3xl font-bold pb-3">Premium Access</p>

        <ul className="list-disc pl-6 text-left border-y-[1px] py-6 border-gray-300">
          <li>Full Course Access</li>
          <li>Expert grading of Assessments</li>
          <li>Final Exam and Certification</li>
          <li>Official Transcript</li>
        </ul>

        <div>
          <p className="font-bold text-xl pt-6">Total Cost</p>
          <p className="font-bold text-2xl">N90,000</p>

          <button
            onClick={payWithPaystack}
            className="bg-[#800080] hover:cursor-pointer text-[15px] text-white px-8 my-5 py-3 rounded-sm"
          >
            Pay Now
          </button>
        </div>

        <p className="flex items-center pt-5 justify-center">
          Secure checkout with{" "}
          <img className="w-20 pl-2" src={paystack.src} alt="Paystack Logo" />
        </p>
      </div>
    </div>
  );
};

export default PaymentScreen;
