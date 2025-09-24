import { FC } from "react";

interface AnnouncementModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AnnouncementModal: FC<AnnouncementModalProps> = ({
  isOpen,
  closeModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-gray-500">
      <div className="h-[600] w-[720] rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-8 flex items-center justify-between border-b-2 border-b-[#D9D9D9] pb-4">
          <h2 className="text-xl font-semibold">Announcement</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Announcement Title
          </label>
          <input
            type="text"
            placeholder="e.g., Important Update on Capstone Project"
            className="mt-2 w-full rounded-full border border-[#D9D9D9] px-6 py-2 text-[#848484] focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Audience
          </label>
          <select className="mt-2 w-full rounded-full border border-[#D9D9D9] px-6 py-2 text-[#848484] focus:ring-2 focus:outline-none">
            <option>Select Audience</option>
            <option>Audience 1</option>
            <option>Audience 2</option>
          </select>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">
            Announcement Message
          </label>
          <textarea
            placeholder="Input Message"
            className="mt-2 h-32 w-full rounded-xl border border-gray-300 px-6 py-2 focus:ring-2 focus:outline-none"
          ></textarea>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <button className="mb-4 rounded-md bg-[#800080] px-6 py-2 text-sm text-white hover:bg-[#AA47AA]">
            Send Announcement
          </button>
          <button
            onClick={closeModal}
            className="rounded-md border-2 border-[#800080] px-8 py-2 font-semibold text-[#800080] hover:text-[#AA47AA]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
