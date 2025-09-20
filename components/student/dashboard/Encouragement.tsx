import DoubleStar from "@/components/icons/DoubleStar";
const Encouragement = () => {
  return (
    <div className="flex items-start gap-3 rounded-[5px] border-[0.5px] p-4">
      <div>
        <DoubleStar size={16} />
      </div>
      <p className="text-xs text-gray-600">
        Small progress is still progress. You are doing great!
      </p>
    </div>
  );
};

export default Encouragement;
