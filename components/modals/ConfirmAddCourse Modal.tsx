import React from "react";
import Success from "../icons/Success";

interface CourseSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToOverview: () => void;
  onSkipToSyllabus: () => void;
}

const CourseSuccessModal: React.FC<CourseSuccessModalProps> = ({
  isOpen,
  onClose,
  onGoToOverview,
  onSkipToSyllabus,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-[720] p-8 text-center relative max-h-600">
      <div className="flex justify-between items-center mb-8 border-b-2 border-[#D9D9D9] pb-4">
            <h2 className="text-xl font-semibold">Add New Course</h2>
            <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
          onClick={onClose}
        >
          ✕
        </button>
          </div>

        <div className="flex flex-col items-center justify-center">
            <Success className="mb-8"/>
            <p className="text-3xl font-semibold mb-8">Course Successfully Added</p>
            <div className="flex flex-col justify-center items-center">
          <button
            className="bg-[#800080] hover:bg-[#AA47AA] text-white px-6 py-2 rounded mb-6 w-full"
            onClick={onGoToOverview}
          >
            Go to Course Overview Setup
          </button>
          <button
            className="border border-[#800080] text-[#800080] px-6 py-2 rounded w-full hover:text-[#AA47AA] hover:border-[#AA47AA]"
            onClick={onSkipToSyllabus}
          >
            Skip to Syllabus
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSuccessModal;
