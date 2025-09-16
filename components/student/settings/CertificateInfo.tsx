const CertificateInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold">Certificate Information</h3>
      <div className="flex flex-col gap-2 rounded-[5px] border border-[#D9D9D9]">
        <div className="flex items-center justify-between">
          <p className="flex-1 p-4 text-xs text-[#1E1E1EB2]">Course Title</p>
          <p className="flex-1 p-4 text-xs text-[#1E1E1EB2]">Status</p>
          <p className="flex-1 p-4 text-xs text-[#1E1E1EB2]">Date Issued</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p className="flex-1 p-4 text-xs text-[#1E1E1EB2]">
            Research Technologies and Investment
          </p>
          <div className="flex flex-1">
            <p className="rounded-full bg-[#FFF9E5] px-2 py-1 text-[10px] text-[#F6B600]">
              In Progress
            </p>
          </div>
          <p className="flex-1 p-4 text-xs text-[#1E1E1EB2]">
            10th March. 2026
          </p>
        </div>
      </div>
      <div className="p- flex items-center justify-between rounded-[5px] border border-[#D9D9D9] p-4">
        <h4 className="text-sm font-[500]">Data Analysis</h4>
        <p className="flex items-center justify-center rounded-full bg-[#FFF9E5] px-2 py-1 text-[10px] text-[#F6B600]">
          In Progress
        </p>
      </div>
    </div>
  );
};
export default CertificateInfo;
