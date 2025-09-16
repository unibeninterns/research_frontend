const Preferences = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold">Preferences</h3>
      <div className="flex flex-col gap-2 rounded-[5px]">
        <div className="flex items-center justify-between">
          <p className="flex-1 p-4 text-xs">Status</p>
          <div className="bg-primary flex h-5 w-10 cursor-pointer items-center justify-end rounded-full p-0.5">
            <div className="h-4 w-4 cursor-pointer rounded-full bg-white transition-all"></div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p className="flex-1 p-4 text-xs">Status</p>
          <div className="bg-primary flex h-5 w-10 cursor-pointer items-center justify-end rounded-full p-0.5">
            <div className="h-4 w-4 cursor-pointer rounded-full bg-white transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preferences;
