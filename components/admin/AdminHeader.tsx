import { Bell, CircleUserRound } from "lucide-react";
import { FC } from "react";
import AdminSearchBar from "./dashboard-components/AdminSearchBar";

const AdminHeader: FC<{ pageHeader: string }> = ({ pageHeader }) => {
  return (
    <div className="flex w-full items-center justify-between bg-white p-1 md:flex-row md:gap-16 md:p-2">
      <h1 className="flex-1 text-[20px] font-bold md:text-[32px]">
        {pageHeader}
      </h1>
      <div className="flex rounded-[50px] border-[0.5px] px-2 py-1 text-[14px] md:flex-1 md:px-4 md:py-2 md:text-lg">
        <AdminSearchBar />
      </div>
      <div className="flex items-center gap-3">
        <Bell className="h-6 w-6" />
        <CircleUserRound className="h-8 w-8" />
      </div>
    </div>
  );
};

export default AdminHeader;
