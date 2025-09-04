'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { jsPDF } from 'jspdf';
import Image from 'next/image';
import success from '../../../components/success.png';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

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

function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read details from query string (from your payment verification step)
  const reference = searchParams.get('ref') || 'N/A';
  const planParam = searchParams.get('plan') || 'premium';
  const email = searchParams.get('email') || 'user@email.com';
  const amount =
    searchParams.get('amount') ||
    (planParam === 'basic' ? '₦50,000' : '₦90,000');

  const selectedPlan = plans[planParam as keyof typeof plans];

  // ✅ Generate and download receipt as PDF
  const downloadReceipt = () => {
    const doc = new jsPDF();

    // ===== Header =====
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('PAYMENT RECEIPT', 105, 20, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for your purchase!', 105, 28, { align: 'center' });

    // Divider line
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // ===== Receipt Details =====
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Receipt Details', 20, 45);

    doc.setFont('helvetica', 'normal');
    let y = 55;
    const lineHeight = 10;

    const details = [
      ['Reference ID:', reference],
      ['Plan:', selectedPlan.name],
      ['Email:', email],
      ['Amount Paid:', amount],
      ['Date:', new Date().toLocaleString()],
    ];

    details.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 25, y);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 80, y);
      y += lineHeight;
    });

    // Divider line before footer
    doc.line(20, y, 190, y);

    // ===== Footer =====
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text(
      'This is a system-generated receipt. Please keep a copy for your records.',
      105,
      y + 10,
      { align: 'center' }
    );

    // Save
    doc.save(`receipt_${reference}.pdf`);
  };

  return (
    <div className='flex-col w-[430px] h-[560px] shadow-lg p-4 items-center my-5 mx-auto justify-center bg-gray-50 px-6 rounded-lg'>
      {/* Success Icon */}
      <div className='flex justify-center my-8'>
        <Image
          className='bg-transparent'
          src={success}
          alt='Payment Successful Icon'
          width={280}
          height={280}
        />
      </div>

      {/* Title */}
      <h1 className='text-2xl text-center font-bold text-gray-900 mb-2'>
        Payment Successful
      </h1>
      <p className='text-gray-600 text-center mb-6'>
        Thank you! Your payment has been confirmed.
      </p>

      {/* Payment Details */}
      <div className='text-left border-black border-2 rounded-md p-4 mb-6'>
        <div className='grid grid-cols-2 gap-y-2'>
          <div className='font-semibold'>Reference ID:</div>
          <div>{reference}</div>

          <div className='font-semibold'>Plan:</div>
          <div>{selectedPlan.name}</div>

          <div className='font-semibold'>Email:</div>
          <div>{email}</div>

          <div className='font-semibold'>Amount Paid:</div>
          <div>{amount}</div>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex flex-row gap-3'>
        <button
          onClick={() => router.push('/classroom')}
          className='bg-[#800080] text-white py-2 px-6 rounded-sm hover:cursor-pointer font-medium hover:bg-purple-900 transition'
        >
          Go to Classroom
        </button>
        <button
          onClick={downloadReceipt}
          className='border border-gray-400 py-2 px-6 rounded-sm font-medium hover:cursor-pointer hover:bg-gray-100 transition'
        >
          Download Payment Receipt
        </button>
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
