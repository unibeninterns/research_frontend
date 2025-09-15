const WeekIndicator = () => {
  return (
    <div className='border border-[#D9D9D9] rounded-[5px] flex flex-col gap-[18px] px-4 py-5 items-center'>
      <div className='border-[10px] border-[#FBEFFFCC] rounded-full shadow-[0_4px_10px_0_#80008012]'>
        <div className='h-30 w-30 rounded-full border-4 border-[#80008040] flex flex-col items-center pt-8'>
          <div className='text-lg font-bold text-[#800080BF]'>Week</div>
          <div className='text-[28px] font-bold text-[#800080BF]'>7</div>
        </div>
      </div>
      <p className='text-xs text-gray-600 text-center'>
        You&apos;re currently in Week 7 of 12 —<br />
        just 6 weeks to go!
      </p>
    </div>
  );
};
export default WeekIndicator;
