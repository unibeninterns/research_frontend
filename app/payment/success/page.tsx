"use client";
import { useSearchParams } from "next/navigation";
import { jsPDF } from "jspdf";
import Image from "next/image";
import Loading from "@/components/Loading";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

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

function PaymentSuccess() {
  const searchParams = useSearchParams();

  // Read details from query string (from your payment verification step)
  const reference = searchParams.get("ref") || "N/A";
  const planParam = searchParams.get("plan") || "premium";
  const email = searchParams.get("email") || "user@email.com";
  const amount =
    searchParams.get("amount") ||
    (planParam === "basic" ? "₦50,000" : "₦90,000");

  const selectedPlan = plans[planParam as keyof typeof plans];
  const paymentDetails = [
    { detail: "Reference ID", value: "456-789" },
    { detail: "Amount paid", value: "₦90,000" },
    { detail: "Plan", value: "Premium" },
    { detail: "Email", value: "rayweb@gmail.com" },
  ];

  // ✅ Generate and download receipt as PDF
  const downloadReceipt = () => {
    const doc = new jsPDF();

    // ===== Header =====
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("PAYMENT RECEIPT", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Thank you for your purchase!", 105, 28, { align: "center" });

    // Divider line
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // ===== Receipt Details =====
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Receipt Details", 20, 45);

    doc.setFont("helvetica", "normal");
    let y = 55;
    const lineHeight = 10;

    const details = [
      ["Reference ID:", reference],
      ["Plan:", selectedPlan.name],
      ["Email:", email],
      ["Amount Paid:", amount],
      ["Date:", new Date().toLocaleString()],
    ];

    details.forEach(([label, value]) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, 25, y);
      doc.setFont("helvetica", "normal");
      doc.text(value, 80, y);
      y += lineHeight;
    });

    // Divider line before footer
    doc.line(20, y, 190, y);

    // ===== Footer =====
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(
      "This is a system-generated receipt. Please keep a copy for your records.",
      105,
      y + 10,
      { align: "center" },
    );

    // Save
    doc.save(`receipt_${reference}.pdf`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col place-items-center bg-white py-8">
      <div className="mx-auto my-5 flex-col items-center justify-center rounded-lg p-4 px-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <Image
            className="bg-transparent"
            src="/payment/success.png"
            alt="Payment Successful Icon"
            width={387}
            height={178}
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-[42px] font-bold">
          Payment Successful
        </h1>
        <p className="text-center text-base">
          Thank you! Your payment has been confirmed.
        </p>

        {/* Payment Details */}
        <div className="mt-15 rounded-[10px] border-1 border-[#EDEEF1] p-4 text-left">
          <div className="flex flex-col gap-6 text-base">
            {paymentDetails.map((d) => (
              <div key={d.detail} className="flex">
                <p className="flex-1 lg:text-[14px]">{d.detail}</p>
                <p className="flex-1 lg:text-[14px]">{d.value}</p>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="mt-12 flex flex-row gap-7">
            <a
              href="#"
              className="primary-button self-center rounded-[4px] px-6 py-3 lg:text-[14px]"
            >
              <button className="flex items-center justify-center text-nowrap">
                <p>Go To My Classroom</p>
              </button>
            </a>
            <a
              href="#"
              className="secondary-button self-center rounded-[4px] px-6 py-3 lg:text-[14px]"
            >
              <button
                onClick={downloadReceipt}
                className="flex items-center justify-between gap-4 text-nowrap"
              >
                <p>View Payment</p>
                <ArrowRight />
              </button>
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <a
              href="#"
              className="self-center rounded-[4px] px-6 py-3 lg:text-[12px]"
            >
              <button className="flex items-center justify-center text-nowrap">
                <p>
                  {`Don't have an`} <br />
                  account?
                </p>
              </button>
            </a>
            <a
              href="#"
              className="tertiary-button self-center rounded-[4px] px-4 py-2 text-[#800080] lg:text-[12px]"
            >
              <button className="flex items-center justify-between gap-4 text-nowrap">
                <p>Contact Support</p>
                <ArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const PaymentSuccessSuspense = () => (
  <Suspense fallback={<Loading />}>
    <PaymentSuccess />
  </Suspense>
);

export default PaymentSuccessSuspense;
