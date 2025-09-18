import { Bell, CircleUserRound } from "lucide-react";
import { FC } from "react";
import AdminSearchBar from "./dashboard-components/AdminSearchBar";

const AdminHeader: FC<{ pageHeader: string }> = ({ pageHeader }) => {
  return (
    <div className="flex w-full items-center justify-between bg-white p-1 md:flex-row md:gap-16 md:p-2">
      <h1 className="flex-1 text-[20px] font-semibold md:text-[28px]">
        {pageHeader}
      </h1>
      <div className="flex rounded-[50px] border-[0.5px] px-2 py-1 text-[14px] md:flex-1 md:px-4 md:py-2 md:text-base items-center gap-2">
        <AdminSearchBar />
      </div>
      <div className="flex items-center gap-3">
        <Bell className="h-4 w-4" />
        <CircleUserRound className="h-4 w-4" />
      </div>
    </div>
  );
};

export default AdminHeader;
