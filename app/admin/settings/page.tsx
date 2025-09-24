import Preferences from "@/components/admin/settings/Preferences";
import Security from "@/components/admin/settings/Security";
import ProfileInformation from "@/components/student/settings/ProfileInformation";
export default function Settings() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Settings</h1>
      <div className="flex flex-1 flex-col gap-8 rounded-[10px] px-4 py-6 shadow-sm">
        <ProfileInformation />
        <Security />
        <Preferences />
      </div>
    </div>
  );
}
