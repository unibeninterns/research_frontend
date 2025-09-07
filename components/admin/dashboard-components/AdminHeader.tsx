import { Bell, CircleUserRound } from 'lucide-react';
import { FC } from 'react';
import AdminSearchBar from './AdminSearchBar';

const AdminHeader: FC<{ pageHeader: string }> = ({ pageHeader }) => {
  return (
    <div className='flex md:flex-row items-center p-1 md:p-2 justify-between bg-white md:gap-16'>
      <h1 className='text-[20px] md:text-[32px] font-bold flex-1'>
        {pageHeader}
      </h1>
      <div className='border-[0.5px] flex px-2 py-1 md:px-4 md:py-2 rounded-[50px] text-[14px] md:text-lg md:flex-1'>
        <AdminSearchBar/>
      </div>
      <div className='flex items-center gap-3'>
        <Bell className='h-6 w-6' />
        <CircleUserRound className='h-8 w-8' />
      </div>
    </div>
  );
};

export default AdminHeader;
