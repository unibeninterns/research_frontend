interface Task {
  id: number;
  title: string;
  status: "Pending" | "Due Today" | "Incomplete" | "Upcoming" | "Urgent";
  icon: string;
}

function Tasks() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Review 5 new certificate requests",
      status: "Pending",
      icon: "📋",
    },
    {
      id: 2,
      title: "Send reminder email to Week 3 students",
      status: "Due Today",
      icon: "📧",
    },
    {
      id: 3,
      title: "Upload Week 8 tutorial video",
      status: "Incomplete",
      icon: "📹",
    },
    {
      id: 4,
      title: "Invite tutor for Module 8 live session",
      status: "Upcoming",
      icon: "👥",
    },
    {
      id: 5,
      title: "Resolve quiz access issue reported by 3 students",
      status: "Urgent",
      icon: "⚠️",
    },
  ];

  const getStatusColor = (status: Task["status"]): string => {
    switch (status) {
      case "Pending":
        return "bg-[#FFF9E5] text-[#F6B600]";
      case "Due Today":
        return "bg-[#FBEFFF] text-primary";
      case "Incomplete":
        return "bg-[#EBEBEB] text-[#848484]";
      case "Upcoming":
        return "bg-[#DEFFD8] text-[#1DAE00]";
      case "Urgent":
        return "bg-[#FFDCDD] text-[#FF383C]";
      default:
        return "bg-[#EBEBEB] text-[#848484]";
    }
  };

  return (
    <div className="flex w-[312] flex-col gap-5 rounded-[10px] border-[0.5px] px-4 py-6">
      <div>
        <h3 className="text-[16px] font-semibold">Tasks</h3>
      </div>
      <div className="gap flex flex-col items-start gap-3">
        {tasks.map((task: Task) => (
          <div
            key={task.id}
            className="flex w-full items-start gap-3 rounded-[5px] hover:bg-[#FBEFFF80] hover:px-2 hover:py-3"
          >
            <p className="flex h-4 w-4 items-center justify-center text-xs">
              {task.icon}
            </p>
            <p className="flex-1 text-[12px]">{task.title}</p>
            <p
              className={`rounded-[5px] px-2 py-1 text-[10px] ${getStatusColor(
                task.status,
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
