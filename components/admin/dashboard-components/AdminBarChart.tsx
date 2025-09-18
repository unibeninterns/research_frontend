import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  // plugins,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

Chart.defaults.font.family = "Montserrat, sans-serif";
Chart.defaults.font.size = 12;

const AdminBarChart = () => {
  const data: ChartData<"bar", number[], string> = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Signups",
        data: [20, 54, 48, 40],
        backgroundColor: "#800080",
        barPercentage: 0.8,
        categoryPercentage: 0.7,
        stack: "signups-stack",
      },
      {
        label: "",
        data: [100, 100, 100, 100],
        backgroundColor: "#FAFAFA",
        barPercentage: 0.8,
        categoryPercentage: 0.7,
        stack: "signups-stack",
      },
      {
        label: "Enrollments",
        data: [70, 32, 55, 60],
        backgroundColor: "#FBEFFF",
        barPercentage: 0.8,
        stack: "enrollments-stack",
        categoryPercentage: 0.7,
      },
      {
        label: "",
        data: [100, 100, 100, 100],
        backgroundColor: "#FAFAFA",
        barPercentage: 0.8,
        categoryPercentage: 0.7,
        stack: "enrollments-stack",
      },
    ],
  };
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="flex h-[350px] flex-col">
      <div className="flex flex-row items-start justify-between gap-2">
        <h2 className="flex-1 text-[16px] font-semibold text-gray-900">
          Platform Engagement Overview
        </h2>
        <select
          defaultValue="this-month"
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
        >
          <option value="this-month">This Month</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>
      <div className="m-2 mt-4 flex-1 self-stretch">
        <Bar
          data={data}
          options={options}
          className="m-2 mt-4 flex-1 self-stretch"
        />
      </div>
    </div>
  );
};

export default AdminBarChart;
