import ProfileInformation from '@/components/student/settings/ProfileInformation';
export default function Settings() {
  return (
    <div className="p-6 flex flex-col">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Settings</h1>
      <div className='px-4 py-6 flex flex-col gap-8 shadow-sm rounded-[10px] flex-1'>
        <ProfileInformation />
      </div>
    </div>
  );
}
