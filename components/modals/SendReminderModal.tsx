// components/modals/SendReminderModal.tsx
"use client";
import React, { useState } from "react";

interface SendReminderModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SendReminderModal: React.FC<SendReminderModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [audience, setAudience] = useState("");
  const [reminderType, setReminderType] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ audience, reminderType, message });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-[720px] max-h-600 p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold">Send Reminder</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-black text-xl">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Audience */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Audience</label>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              required
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA] text-[#848484]"
            >
              <option value="">Select audience</option>
              <option value="students">Students</option>
              <option value="instructors">Instructors</option>
              <option value="all">All</option>
            </select>
          </div>

          {/* Reminder Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Reminder Type</label>
            <select
              value={reminderType}
              onChange={(e) => setReminderType(e.target.value)}
              required
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA] text-[#848484]"
            >
              <option value="">Select reminder type</option>
              <option value="assignment">Assignment</option>
              <option value="event">Event</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter reminder message"
              className="w-full border rounded-lg px-4 py-2 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              type="submit"
              className="bg-[#800080] text-white px-12 py-2 rounded hover:bg-[#AA47AA]"
            >
              Send Reminder
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="border-2 border-[#800080] text-[#800080] px-8 py-2 rounded-md hover:text-[#AA47AA] hover:border-[#AA47AA] font-[600] "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendReminderModal;
