import { Button } from "@/components/ui/button";

interface ModuleData {
  week: string;
  moduleTitle: string;
  completionRate: string;
}

function WeeklyModuleCompletion() {
  const moduleData: ModuleData[] = [
    {
      week: "Week 1",
      moduleTitle: "Introduction to Research",
      completionRate: "78%",
    },
    {
      week: "Week 2",
      moduleTitle: "Research Design Fundamentals",
      completionRate: "56%",
    },
    {
      week: "Week 3",
      moduleTitle: "Literature Review & Knowledge Management",
      completionRate: "40%",
    },
    {
      week: "Week 4",
      moduleTitle: "AI & Digital Tools for Research",
      completionRate: "0%",
    },
    {
      week: "Week 5",
      moduleTitle: "Data Collection Methods",
      completionRate: "0%",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-[10px] border-[0.5px] p-6">
      <div className="flex flex-row items-center justify-between text-nowrap">
        <h2 className="flex-1 text-[16px] font-semibold">
          Weekly Module Completion
        </h2>
        <div className="flex flex-row gap-4">
          <select
            defaultValue="research-technologies"
            className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="research-technologies">Research Technologies</option>
            <option value="last-month">Last Month</option>
          </select>
          <select
            defaultValue="weekly"
            className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
          >
            <option value="weekly">Weekly</option>
            <option value="last-month">Last Month</option>
          </select>
          <Button variant="link" className="p-1 text-[10px] text-[#800080]">
            View all
          </Button>
        </div>
      </div>
      <div>
        <div className="overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FBEFFF80] p-[12px]">
                <th className="p-3 text-left text-[14px] font-medium">Week</th>
                <th className="p-3 text-left text-[14px] font-medium">
                  Module Title
                </th>
                <th className="p-3 text-left text-[14px] font-medium">
                  Avg. Completion Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {moduleData.map((module: ModuleData, index: number) => (
                <tr key={index} className="border-gray-150 border-b">
                  <td className="p-3 text-sm">{module.week}</td>
                  <td className="p-3 text-sm">{module.moduleTitle}</td>
                  <td className="p-3 text-sm">{module.completionRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WeeklyModuleCompletion;
