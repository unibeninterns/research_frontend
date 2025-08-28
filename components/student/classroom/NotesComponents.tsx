import { Pencil, Trash } from 'lucide-react';

const Note = ({
  note,
}: {
  note: { module: string; subModule: string; note: string };
}) => {
  return (
    <div className='flex flex-col w-full shadow-xs border'>
      <div className='flex justify-between gap-5 px-4 bg-white'>
        <div className='flex items-center justify-between w-full text-[16px] mr-4 md:mr-8'>
          <p className='font-bold'>{note.module}</p>
          <p>{note.subModule}</p>
        </div>
        <div className='flex items-center justify-between '>
          <button>
            <Pencil height={12} />
          </button>
          <button>
            <Trash height={12} />
          </button>
        </div>
      </div>
      <div className='px-4 py-2 bg-[#FAFAFA]'>
        <p>{note.note}</p>
      </div>
    </div>
  );
};

export default Note;
