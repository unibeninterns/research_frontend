import Check from "@/components/icons/Check";

const CertificateRequirement = () => {
  const requirements = [
    "Complete all weekly modules",
    "Score at least 70% in the final assessment",
    "Attend 80% of live sessions",
    "Complete final capstone project",
  ];
  return (
    <div className="flex flex-col gap-6 rounded-[5px] border-[0.5px] p-4">
      <div className="flex flex-row items-start justify-between gap-2">
        <h2 className="text-[16px] font-semibold text-gray-900">
          Certificate Criteria
        </h2>
        <select
          defaultValue="review"
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
        >
          <option value="review">Review</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>
      <div className="flex flex-col gap-6">
        {requirements.map((r) => (
          <div key={r} className="flex items-center gap-6"><Check/>
            <p className="text-sm flex-1">{r}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateRequirement;
