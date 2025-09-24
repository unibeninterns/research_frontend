import Pencil from "@/components/icons/Pencil";
import Image from "next/image";
const ProfileInformation = () => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <h3 className="text-base font-semibold">Profile Information</h3>
      <div className="flex items-center gap-6">
        <Image
          src="/lecturers/969234aacd9ebc42fda5f7e9f5cb46d0c64ecd88.png"
          alt="Profile Picture"
          height={80}
          width={80}
          className="rounded-full"
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-[500]">Royal Caleb</h2>
          <div className="flex gap-15">
            <button className="tertiary-button text-primary text-xs font-[500]">
              Change Photo
            </button>
            <button className="text-xs font-[500] text-[#848484]">
              Remove Photo
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center justify-between px-3">
            <label htmlFor="fullName" className="text-[10px] font-[500]">
              Full Name
            </label>
            <Pencil />
          </div>
          <input
            // type={showPassword ? "text" : "password"}
            disabled={true}
            placeholder="Royal Caleb"
            value="Royal Caleb"
            className="w-full rounded-full border border-[#D9D9D9] px-3 py-1 text-xs text-[#848484] outline-none"
            id="fullName"
            name="fullName"
          />
          {/* <button onClick={toggleShow} className="">
              {showPassword ? <EyeSlash /> : <Eye />}
            </button> */}
        </div>
        <div>
          <label htmlFor="email" className="mx-3 text-[10px] font-[500]">
            Email
          </label>
          <div className="flex items-center justify-between gap-3">
            <input
              type="email"
              placeholder="Enter Email Address"
              value="royalcaleb@gmail.com"
              className="focus:border-primary w-full rounded-full border border-[#D9D9D9] px-3 py-1 text-xs text-[#848484] outline-none"
              id="email"
              name="email"
            />
            <button className="primary-button rounded-[5px] px-4 py-1 text-xs font-[600] text-[#800080]">
              Save
            </button>
            <div className="flex items-center justify-between gap-4">
              <button className="secondary-button rounded-[5px] px-4 py-1 text-xs font-[400]">
                Cancel
              </button>
            </div>
          </div>
          {/* <button onClick={toggleShow} className="">
              {showPassword ? <EyeSlash /> : <Eye />}
            </button> */}
        </div>
        <div>
          <div className="flex items-center justify-between gap-0.5 px-3">
            <label htmlFor="phoneNumber" className="text-[10px] font-[500]">
              Phone Number
            </label>
            <Pencil />
          </div>
          <input
            type="phone number"
            placeholder="Please enter your phone number"
            value="+234 801 234 5678"
            className="focus:border-primary w-full rounded-full border border-[#D9D9D9] px-3 py-1 text-xs text-[#848484] outline-none"
            id="phoneNumber"
            name="phoneNumber"
          />
          {/* <button onClick={toggleShow} className="">
              {showPassword ? <EyeSlash /> : <Eye />}
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
