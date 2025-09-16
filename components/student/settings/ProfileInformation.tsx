import Image from "next/image";
const ProfileInformation = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold">Profile Information</h3>
      <div className="flex gap-6">
        <Image src="/lecturers/969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png" alt="Profile Picture" height={80} width={80} className="rounded-full" />
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProfileInformation;
