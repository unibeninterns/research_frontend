"use client";
import { useState } from "react";
import AddStudentModal from "@/components/modals/AddTutorModal";

export default function Home() {
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsAddStudentModalOpen(true)}
        className="bg-[#800080] text-white px-6 py-3 rounded hover:bg-[#AA47AA]"
      >
        Open Add Student Modal
      </button>

      <AddStudentModal
        isOpen={isAddStudentModalOpen}
        closeModal={() => setIsAddStudentModalOpen(false)}
      />
    </div>
  );
}
