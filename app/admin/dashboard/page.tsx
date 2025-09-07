'use client';
import {
  UsersRound,
  LibraryBig,
  ChartNoAxesCombined,
  FileBadge,
  UserRoundPlus,
  CircleCheck,
} from 'lucide-react';
import AdminBarChart from '@/components/admin/dashboard-components/AdminBarChart';
import AdminDoughnutChart from '@/components/admin/dashboard-components/AdminDoughnutChart';
import AdminInfoComponent from '@/components/admin/dashboard-components/AdminInfoComponent';
import WeekHighlights from '@/components/admin/dashboard-components/WeekHighlights';
import CertificateRequests from '@/components/admin/dashboard-components/CertificateRequests';
import WeeklyModuleCompletion from '@/components/admin/dashboard-components/WeeklyModuleCompletion';
import Tasks from '@/components/admin/dashboard-components/Tasks';
import QuickActions from '@/components/admin/dashboard-components/QuickActions';
import AverageCourseProgress from '@/components/admin/dashboard-components/AverageCourseProgress';

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
      <div className='flex flex-col md:flex-row mt-5 w-full  justify-between py-2 items-start'>
        <div
          className='border-[0.5px] border-[#D9D9D9]
rounded-[5px] p-2'
        >
          <AdminBarChart />
        </div>
        <div
          className='border-[0.5px] border-[#D9D9D9]
rounded-[5px] p-2 h-[380px]'
        >
          <AdminDoughnutChart />
        </div>
        <div>
          <WeekHighlights />
        </div>
      </div>
      <div>
        <CertificateRequests />
      </div>
      <div className='flex items-start mt-8 gap-8 justify-between'>
        <WeeklyModuleCompletion />
        <Tasks />
      </div>
      <div className='flex items-start mt-8 gap-8 mb-10 justify-start'>
        <QuickActions />
        <AverageCourseProgress />
      </div>
    </div>
  );
};

export default Dashboard;
