"use client";
import { ChevronRight, Eye } from "lucide-react";

const Security = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-[600]">Security</h3>
      <div>
        <div className="flex items-center justify-between px-3 text-[10px]">
          <label htmlFor="fullName" className="font-[500]">
            Full Name
          </label>
          <div className="flex items-center gap-1">
            <p>Change Password</p>
            <ChevronRight height={14} />
          </div>
        </div>
        <div className="flex w-full rounded-full border border-[#D9D9D9] px-3 py-1 text-xs text-[#848484]">
          <input
            // type={showPassword ? "text" : "password"}
            placeholder="Royal Caleb"
            value="Royal Caleb"
            className="flex-1 outline-none"
            id="fullName"
            name="fullName"
            disabled={true}
          />
          <Eye size={16} />
        </div>
      </div>
    </div>
  );
};

export default Security;
