import Preferences from "@/components/admin/settings/Preferences";
import Security from "@/components/admin/settings/Security";
import ProfileInformation from "@/components/student/settings/ProfileInformation";
export default function Settings() {
  return (
    <div className="flex flex-col p-6">
      <ProfileInformation />
      <Security />
      <Preferences />
    </div>
  );
}
