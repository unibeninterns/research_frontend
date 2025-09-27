"use client";
import {
  ArcElement,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

Chart.register(ChartDataLabels);

Chart.register(ArcElement, Tooltip, Legend);

Chart.defaults.font.family = "Montserrat, sans-serif";
Chart.defaults.font.size = 12;

const data: ChartData<"pie", number[], string> = {
  labels: ["Issued", "Pending", "Revoked", "Denied"],
  datasets: [
    {
      label: "",
      data: [77, 16, 6, 1],
      backgroundColor: ["#800080", "#CC99CC", "#CDB7D9", "#FBAFFF"],
    },
  ],
};

const options: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      display: true,
      position: "right" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 5,
      },
    },
    datalabels: { display: false },
  },
};

const CertificateRequestOverviewPieChart = () => {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-[5px] border p-4">
      <div className="flex flex-row items-start justify-between gap-2">
        <h2 className="text-[16px] font-semibold text-gray-900">
          Certificate Requests Overview
        </h2>
        <select
          defaultValue="review"
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
        >
          <option value="review">Review</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>

      <div className="flex h-100 items-center justify-center">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CertificateRequestOverviewPieChart;
