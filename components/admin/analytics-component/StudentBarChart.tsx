import {
  BarElement,
  CategoryScale,
  Chart,
  // plugins,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

Chart.register(ChartDataLabels);

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

Chart.defaults.font.family = "Montserrat, sans-serif";
Chart.defaults.font.size = 12;

const StudentBarChart = () => {
  const info = [280, 160, 230, 55];

  const data: ChartData<"bar", number[], string> = {
    labels: info.map((_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: "Number of Active Students",
        data: info,
        backgroundColor: "#800080",
        barPercentage: 0.5,
        categoryPercentage: 0.7,
        stack: "revenue-stack",
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
      datalabels: { display: false },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="flex flex-1 flex-col rounded-[5px] border-[0.5px] border-[#D9D9D9] p-2">
      <div className="flex flex-row items-start justify-between gap-2">
        <h3 className="flex-1 text-[16px] font-semibold text-gray-900">
          Payouts per course
        </h3>
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

export default StudentBarChart;
