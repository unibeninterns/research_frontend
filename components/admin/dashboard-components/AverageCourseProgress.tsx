interface CourseProgress {
  courseName: string;
  progress: number;
}

function AverageCourseProgress() {
  const courseProgress: CourseProgress = {
    courseName: 'Research Technologies and Innovation',
    progress: 25,
  };

  return (
    <div className='flex flex-col px-4 py-6 border rounded-[5px] gap-5'>
      <div className=' flex justify-between gap-5'>
        <h3 className='text-[16px] font-bold'>Average Course Progress</h3>
        <div>
          <select
            defaultValue='research-technologies'
            className='w-32 px-2 py-1 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#800080] text-[10px] truncate'
          >
            <option value='research-technologies'>Research Technologies</option>
            <option value='last-month'>Last Month</option>
          </select>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='flex gap-5 text-sm h-10'>
          <p className='flex-1'>{courseProgress.courseName}</p>
          <p>{courseProgress.progress}%</p>
        </div>
        <div className='flex-1 bg-gray-200 h-6 relative'>
          <div
            className='bg-[#800080] h-6 transition-all duration-300 absolute top-0 left-0'
            style={{ width: `${courseProgress.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default AverageCourseProgress;
