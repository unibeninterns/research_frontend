import { Pencil, Trash } from "lucide-react";

const Note = ({
  note,
}: {
  note: { module: string; subModule: string; note: string };
}) => {
  return (
    <div className="flex w-full flex-col gap-2 text-[16px] shadow-xs">
      <div className="flex justify-between gap-3 bg-white">
        <div className="flex flex-1 items-center justify-between text-[14px]">
          <p className="flex-1 font-bold text-ellipsis">{note.module}</p>
          <p className="flex-1 text-ellipsis">{note.subModule}</p>
        </div>
        <div className="flex items-center justify-between">
          <button>
            <Pencil height={12} />
          </button>
          <button>
            <Trash height={12} />
          </button>
        </div>
      </div>
      <div className="bg-[#FAFAFA] px-4 py-2">
        <p>{note.note}</p>
      </div>
    </div>
  );
};

export default Note;
