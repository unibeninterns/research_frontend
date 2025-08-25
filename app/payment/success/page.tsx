"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { jsPDF } from "jspdf";
import success from "../../../components/success.png";

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read details from query string (from your payment verification step)
  const reference = searchParams.get("ref") || "N/A";
  const plan = searchParams.get("plan") || "Premium Access";
  const email = searchParams.get("email") || "user@email.com";
  const amount = searchParams.get("amount") || "N90,000";

  // ✅ Generate and download receipt as PDF
  const downloadReceipt = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Receipt", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Reference ID: ${reference}`, 20, 40);
    doc.text(`Plan: ${plan}`, 20, 55);
    doc.text(`Email: ${email}`, 20, 70);
    doc.text(`Amount Paid: ${amount}`, 20, 85);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 100);

    doc.setFontSize(10);
    doc.text(
      "Thank you for your payment. Please keep this receipt for your records.",
      20,
      120
    );

    doc.save(`receipt_${reference}.pdf`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 mt-20 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className=" text-green-600 flex items-center justify-center">
            <img src={success.src} alt="Payment Successful Icon" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you! Your payment has been confirmed.
        </p>

        {/* Payment Details */}
        <div className="text-left border-black border-2 rounded-md p-4 mb-6">
          <div className="grid grid-cols-2 gap-y-2">
            <div className="font-semibold">Reference ID:</div>
            <div>{reference}</div>

            <div className="font-semibold">Plan:</div>
            <div>{plan}</div>

            <div className="font-semibold">Email:</div>
            <div>{email}</div>

            <div className="font-semibold">Amount Paid:</div>
            <div>{amount}</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          <button
            onClick={() => router.push("/classroom")}
            className="bg-[#800080] text-white py-2 px-6 rounded-sm hover:cursor-pointer font-medium hover:bg-purple-900 transition"
          >
            Go to Classroom
          </button>
          <button
            onClick={downloadReceipt}
            className="border border-gray-400 py-2 px-6 rounded-sm font-medium hover:cursor-pointer hover:bg-gray-100 transition"
          >
            Download Payment Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
