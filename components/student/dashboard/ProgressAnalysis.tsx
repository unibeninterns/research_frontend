const ProgressAnalysis = () => {
  const info = [
    { title: 'Modules Completed', stat: '6 of 12', end: '50% Completed' },
    { title: 'Average Weekly Study Time', stat: '1.5 hrs', end: 'per week' },
    { title: 'Quiz Pass Rate', stat: '80%', end: 'Quiz Pass Rate' },
  ];
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Progress Analysis</h2>
        <select
          defaultValue='this-week'
          className='w-32 px-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#800080] text-[10px] truncate'
        >
          <option value='this-week'>This Week</option>
          <option value='last-month'>Last Month</option>
        </select>
      </div>
      <div className='flex justify-between items-start gap-6'>
        {info.map((i) => (
          <div key={i.title} className='flex flex-col border-[0.5px] p-4 rounded-[5px] flex-1 shadow-xs'>
            <p className='text-xs'>{i.title}</p>
            <p className='text-[22px] font-semibold'>{i.stat}</p>
            <p className='text-xs'>{i.end}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressAnalysis;
