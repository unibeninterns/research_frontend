import AdminInfoComponent from '@/components/admin/AdminInfoComponent';
import {
  UsersRound,
  LibraryBig,
  ChartNoAxesCombined,
  FileBadge,
  UserRoundPlus,
  CircleCheck,
} from 'lucide-react';

const Dashboard = () => {
  const cardInfo = [
    {
      icon: <UsersRound />,
      param: 'Total Enrolled Students',
      value: '1,284',
    },
    {
      icon: <LibraryBig />,
      param: 'Active Courses',
      value: '1',
    },
    {
      icon: <ChartNoAxesCombined />,
      param: 'Revenue This Month',
      value: '₦1,240,000',
    },
    {
      icon: <FileBadge />,
      param: 'Certificate Requests',
      value: '5',
    },
    {
      icon: <UserRoundPlus />,
      param: 'Today’s New Signups',
      value: '23',
    },
    {
      icon: <CircleCheck />,
      param: 'Average Module Completion Rate',
      value: '67%',
    },
  ];
  return (
    <div className='mt-5 w-full'>
      <AdminInfoComponent cardInfo={cardInfo} />
    </div>
  );
};

export default Dashboard;
