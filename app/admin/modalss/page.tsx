"use client";
import { useState } from 'react';
import UploadResourceModal from '@/components/modals/UploadResourceModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-purple-600 text-white px-6 py-2 rounded-md"
      >
        Open
      </button>

      <UploadResourceModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  );
}
