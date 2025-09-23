import { FC, useState } from 'react';
import FileUpload from '../icons/FileUpload'

interface UploadResourceModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const UploadResourceModal: FC<UploadResourceModalProps> = ({ isOpen, closeModal }) => {
  const [resourceType, setResourceType] = useState<string>('');

  if (!isOpen) return null;

  const isLinkType = resourceType === 'Link';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-xl shadow-lg w-[720] p-6 overflow-y-auto transition-all"
        style={{ height: '593px', maxHeight: '600px' }}
      >
        <div className="flex justify-between items-center mb-4 border-b-2 border-[#D9D9D9] pb-4 ">
          <h2 className="text-xl font-semibold">Upload Learning Resource</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <form className="space-y-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-black">Course</label>
            <select className="mt-1 px-6 py-2 text-[#848484] w-full border rounded-full">
              <option>Select course</option>
              <option>Course A</option>
              <option>Course B</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Resource Title</label>
            <input
              type="text"
              placeholder="e.g., Introduction to Research PDF"
              className="mt-1 px-6 py-2 w-full border rounded-full text-[#848484]"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">Resource Module</label>
              <select className="mt-1 px-6 py-2 w-full border rounded-full text-[#848484]">
                <option>Select module</option>
                <option>Module 1</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">Resource Type</label>
              <select
                className="mt-1 px-6 py-2 w-full border rounded-full text-[#848484]"
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value)}
              >
                <option>Select resource type</option>
                <option value="PDF">PDF</option>
                <option value="Docx">Docx</option>
                <option value="Link">Link</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Upload File / Link</label>
            {isLinkType ? (
              <input
                type="url"
                placeholder="e.g., https://"
                className="mt-1 px-6 py-2 w-full border rounded-full"
              />
            ) : (
              <div className="mt-2 border-2 border-dashed border-gray-300 p-2 flex justify-center flex-col rounded-md text-center h-55 space-y-4 items-center">
                <FileUpload/>
                <div className="text-black mb-2">Drag and drop your file here or</div>
                <button
                  type="button"
                  className="bg-[#800080] text-white py-1 px-4 rounded-md hover:bg-[#AA47AA]"
                >
                  Choose File
                </button>
                <p className="mt-2 text-xs text-gray-400">
                  Only PDF or DOCX formats allowed. Max file size: 10MB
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Description</label>
            <textarea
              placeholder="e.g., This guide explains the fundamentals of research methodology"
              className="mt-1 px-6 py-2 w-full border rounded-lg h-41 resize-none"
            />
          </div>

          <div className="flex flex-col items-center justify-between pt-4">
            <button
              type="submit"
              className="bg-[#800080] text-white py-2 px-8 mb-6 rounded-md hover:bg-purple-700 "
            >
              Upload Resource
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="border border-[#800080] text-[#800080] py-1 px-8 rounded-md hover:bg-purple-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadResourceModal;
