interface Task {
  id: number;
  title: string;
  status: 'Pending' | 'Due Today' | 'Incomplete' | 'Upcoming' | 'Urgent';
  icon: string;
}

function Tasks() {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Review 5 new certificate requests',
      status: 'Pending',
      icon: '📋',
    },
    {
      id: 2,
      title: 'Send reminder email to Week 3 students',
      status: 'Due Today',
      icon: '📧',
    },
    {
      id: 3,
      title: 'Upload Week 8 tutorial video',
      status: 'Incomplete',
      icon: '📹',
    },
    {
      id: 4,
      title: 'Invite tutor for Module 8 live session',
      status: 'Upcoming',
      icon: '👥',
    },
    {
      id: 5,
      title: 'Resolve quiz access issue reported by 3 students',
      status: 'Urgent',
      icon: '⚠️',
    },
  ];

  const getStatusColor = (status: Task['status']): string => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Due Today':
        return 'bg-red-100 text-red-800';
      case 'Incomplete':
        return 'bg-gray-100 text-gray-800';
      case 'Upcoming':
        return 'bg-green-100 text-green-800';
      case 'Urgent':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='border-[0.5px] rounded-[10px] px-4 py-6 flex flex-col gap-5 w-[312]'>
      <div>
        <h3 className='text-[16px] font-bold'>Tasks</h3>
      </div>
      <div className='flex flex-col items-start gap'>
        {tasks.map((task: Task) => (
          <div key={task.id} className='flex px-2 py-3 gap-3 items-start w-full'>
            <p className='w-4 h-4 flex items-center justify-center text-xs'>
              {task.icon}
            </p>
            <p className='text-[12px] flex-1'>{task.title}</p>
            <p
              className={`px-2 py-1 text-[10px] rounded-[5px] ${getStatusColor(
                task.status
              )}`}
            >
              {task.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
