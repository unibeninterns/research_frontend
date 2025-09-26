"use client";
import React, { useState } from "react";

interface AddStudentModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Added:", { name, email, course, date });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-[720px] max-h-[600] p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-xl font-semibold">Add Student</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter student’s name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter student’s email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Course</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full border rounded-full px-4 py-2 text-[#848484] focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
            >
              <option value="">Select course</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">Enrollment Date</label>
            <div className="relative">
                  <input
                    type="text"
                    placeholder="Select date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="mt-1 w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
                  />
                </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              type="submit"
              className="bg-[#800080] text-white px-12 py-2 rounded hover:bg-[#AA47AA] "
            >
              Add Student
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="border-2 border-[#800080] text-[#800080] px-8 py-2 rounded hover:border-[#AA47AA] hover:text-[#AA47AA] font-semibold "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
