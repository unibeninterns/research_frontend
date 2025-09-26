"use client";
import React, { useState } from "react";

interface EditCourseModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const EditCourseModal: React.FC<EditCourseModalProps> = ({
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
      <div className="bg-white rounded-xl shadow-lg w-[720px] max-h-[600px] p-6 flex flex-col">
        <div className="flex justify-between items-center border-b pb-4 mb-6 flex-shrink-0">
          <h2 className="text-xl font-semibold">Edit Course</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>
        <div className=" flex justify-end mb-4">
            <div className="px-2 py-1 bg-[#DEFFD8] rounded-md text-[#1DAE00]">
                <p className="text-[12px]">Ongoing</p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Course Title</label>
            <input
              type="text"
              placeholder="Enter course title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>
            <div className="flex justify-between">
          <div className="mb-6 w-45/100">
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              type="text"
              placeholder="MM/DD"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>

          <div className="mb-6 w-45/100">
            <label className="block text-sm font-medium mb-1">Duration</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full border rounded-full px-4 py-2 text-[#848484] focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
            >
              <option value="">Select duration</option>
              <option value="12">12 weeks</option>
              <option value="24">24 weeks</option>
            </select>
          </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              placeholder="e.g., Lorem Ipsum"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA] h-41"
            />
          </div>

          <div className="flex flex-col items-center gap-8">
            <button
              type="submit"
              className="bg-[#800080] text-white px-12 py-2 rounded hover:bg-[#AA47AA]"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="border-2 border-[#800080] text-[#800080] px-8 py-2 rounded hover:border-[#AA47AA] hover:text-[#AA47AA] font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourseModal;
