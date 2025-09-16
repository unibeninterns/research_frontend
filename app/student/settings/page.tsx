import CertificateInfo from "@/components/student/settings/CertificateInfo";
import EnrollmentInfo from "@/components/student/settings/EnrollmentInfo";
import Preferences from "@/components/student/settings/Preferences";
import ProfileInformation from "@/components/student/settings/ProfileInformation";
import Security from "@/components/student/settings/Security";
export default function Settings() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Settings</h1>
      <div className="flex flex-1 flex-col gap-8 rounded-[10px] px-4 py-6 shadow-sm">
        <ProfileInformation />
        <Security />
        <EnrollmentInfo />
        <CertificateInfo />
        <Preferences />
      </div>
    </div>
  );
}
