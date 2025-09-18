interface CourseProgress {
  courseName: string;
  progress: number;
}

function AverageCourseProgress() {
  const courseProgress: CourseProgress = {
    courseName: "Research Technologies and Innovation",
    progress: 25,
  };

  return (
    <div className="flex flex-col gap-5 rounded-[5px] border px-4 py-6">
      <div className="flex justify-between gap-5">
        <h3 className="text-[16px] font-semibold">Average Course Progress</h3>
        <div>
          <select
            defaultValue="research-technologies"
            className="truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="research-technologies">Research Technologies</option>
            <option value="last-month">Last Month</option>
          </select>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex h-10 gap-5 text-xs">
          <p className="flex-1">{courseProgress.courseName}</p>
          <p>{courseProgress.progress}%</p>
        </div>
        <div className="relative h-6 flex-1 bg-gray-200">
          <div
            className="absolute top-0 left-0 h-6 bg-[#800080] transition-all duration-300"
            style={{ width: `${courseProgress.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default AverageCourseProgress;
