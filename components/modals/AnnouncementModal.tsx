import { FC } from 'react';

interface AnnouncementModalProps {
    isOpen: boolean;
    closeModal: () => void;
  }
  
  const AnnouncementModal: FC<AnnouncementModalProps> = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[720] p-6 h-[600]">
        <div className="flex justify-between border-b-2 border-b-[#D9D9D9] items-center mb-8 pb-4">
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
                stroke-width="2"
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
            className="mt-2 py-2 px-6 w-full border text-[#848484] border-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 "
          />
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">Audience</label>
          <select className="mt-2 text-[#848484] px-6 py-2 w-full border border-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 ">
            <option>Select Audience</option>
            <option>Audience 1</option>
            <option>Audience 2</option>
          </select>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">Announcement Message</label>
          <textarea
            placeholder="Input Message"
            className="mt-2 px-6 py-2 w-full h-32 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 "
          ></textarea>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <button className="bg-[#800080] text-white text-sm py-2 px-6 mb-4 rounded-md hover:bg-[#AA47AA]">
            Send Announcement
          </button>
          <button
            onClick={closeModal}
            className="text-[#800080] hover:text-[#AA47AA] border-2 border-[#800080] py-2 px-8 rounded-md font-semibold"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default AnnouncementModal
