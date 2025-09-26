"use client";
import React, { useState } from "react";
import AddTutorProfile from "../icons/AddTutorProfile"

interface AddTutorModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddTutorModal: React.FC<AddTutorModalProps> = ({ isOpen, closeModal }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, title, email, bio, file });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-[720px] max-h-[600px] p-8 flex flex-col">
        <div className="flex justify-between items-center border-b pb-4 mb-6 flex-shrink-0">
          <h2 className="text-xl font-semibold">Add Tutor</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter tutor’s name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tutor’s Title</label>
            <input
              type="text"
              placeholder="e.g Professor"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter tutor’s email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tutor’s Bio</label>
            <textarea
              placeholder="Enter tutor’s bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#AA47AA] h-41 resize-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <AddTutorProfile/>
            <div className="flex flex-col items-center w-full">
            <div className="border rounded-md flex w-full mb-2 py-4 px-8 justify-around">
            <label
              htmlFor="file-upload"
              className="text-[#800080] font-semibold cursor-pointer"
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".jpeg,.jpg,.png"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <span className="text-sm">
              {file ? file.name : "No file chosen"}
            </span>
            </div>
            <p className="text-xs text-gray-400">
            Only JPEG, PNG, JPG formats allowed. Max file size, 5MB.
          </p>
          </div>
          </div>
          <div className="flex flex-col items-center gap-6 mt-4">
            <button
              type="submit"
              className="bg-[#800080] text-white px-14 py-2 rounded hover:bg-[#AA47AA]"
            >
              Add Tutor
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

export default AddTutorModal;
