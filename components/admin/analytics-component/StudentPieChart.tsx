// VariableRadiusPieChart.tsx
import {
  ArcElement,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { PolarArea } from "react-chartjs-2";

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend, ChartDataLabels);

const info = [
  { label: "Completed", value: 60, color: "#800080" },
  { label: "In Progress", value: 30, color: "#F9DBFF" },
  { label: "Not Started", value: 10, color: "#CDB7D9" },
];
const power = 0.3;
const transformedData = info
  .slice()
  .sort((a, b) => a.value - b.value)
  .map((item) => ({
    ...item,
    transformedValue: Math.pow(item.value, power),
  }));

const data: ChartData<"polarArea", number[], string> = {
  labels: transformedData.map((item) => item.label),
  datasets: [
    {
      label: "Progress",
      data: transformedData.map((item) => item.transformedValue),
      backgroundColor: transformedData.map((item) => item.color),
      borderWidth: 0,
    },
  ],
};

const options: ChartOptions<"polarArea"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
      },
    },
    datalabels: {
      color: "#fff",
      font: {
        size: 12,
        weight: "bold",
      },
      textAlign: "center",
      formatter: (value, context) => {
        const index = context.dataIndex;
        const label = info[index].label;
        const originalValue = info[index].value;
        return `${label}\n${originalValue}%`;
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const index = context.dataIndex;
          const originalValue = info[index].value;
          const label = info[index].label;
          return `${label}: ${originalValue}%`;
        },
      },
    },
  },
  scales: {
    r: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
      angleLines: {
        display: false,
      },
    },
  },
};

const StudentPolarArea = () => {
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
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
};

export default StudentPolarArea;
