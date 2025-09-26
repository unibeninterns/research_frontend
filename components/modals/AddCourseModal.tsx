"use client";
import React, { useState, useRef } from "react";
import CourseSuccessModal from "./ConfirmAddCourse Modal"; // <-- Import

interface AddCourseModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({ isOpen, closeModal }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    closeModal(); 
  };

  const handleGoToOverview = () => {
    console.log("Navigating to course overview setup...");
    handleCloseSuccessModal();
  };

  const handleSkipToSyllabus = () => {
    console.log("Skipping to syllabus...");
    handleCloseSuccessModal();
  };

  return (
    <>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
        <div
          className="bg-white rounded-xl shadow-lg w-[720px] p-6 overflow-y-auto transition-all"
          style={{ height: "593px", maxHeight: "600px" }}
        >
          <div className="flex justify-between items-center mb-8 border-b-2 border-[#D9D9D9] pb-4">
            <h2 className="text-xl font-semibold">Add New Course</h2>
            <button onClick={closeModal} className="text-gray-500 hover:text-black">
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="block text-sm font-medium">Course Title</label>
              <input
                type="text"
                placeholder="Enter Course Title"
                className="mt-1 w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
                required
              />
            </div>

            <div className="flex gap-4 mb-8">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Start Date</label>
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Select date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="mt-1 w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium">Duration</label>
                <select
                  className="mt-1 w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA] text-[#848484]"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="1h">1 hour</option>
                  <option value="2h">2 hours</option>
                  <option value="3h">3 hours</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                placeholder="e.g., Lorem Ipsum"
                className="mt-1 w-full border rounded-lg px-4 py-2 h-41 resize-none focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
                required
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className="bg-[#800080] text-white px-12 py-2 rounded hover:bg-[#AA47AA] mb-2"
              >
                Add Course
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="border-2 border-[#800080] text-[#800080] px-8 py-2 rounded-md hover:text-[#AA47AA] hover:border-[#AA47AA] font-[600]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <CourseSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        onGoToOverview={handleGoToOverview}
        onSkipToSyllabus={handleSkipToSyllabus}
      />
    </>
  );
};

export default AddCourseModal;
