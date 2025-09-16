const WeekIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-[18px] rounded-[5px] border border-[#D9D9D9] px-4 py-5">
      <div className="rounded-full border-[10px] border-[#FBEFFFCC] shadow-[0_4px_10px_0_#80008012]">
        <div className="flex h-30 w-30 flex-col items-center rounded-full border-4 border-[#80008040] pt-8">
          <div className="text-lg font-bold text-[#800080BF]">Week</div>
          <div className="text-[28px] font-bold text-[#800080BF]">7</div>
        </div>
      </div>
      <p className="text-center text-xs text-gray-600">
        You&apos;re currently in Week 7 of 12 —<br />
        just 6 weeks to go!
      </p>
    </div>
  );
};
export default WeekIndicator;
