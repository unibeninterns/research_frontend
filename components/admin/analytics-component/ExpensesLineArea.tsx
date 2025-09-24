"use client";
import {
  CategoryScale,
  Chart,
  ChartData,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  Plugin,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);
Chart.register(ChartDataLabels);

Chart.defaults.font.family = "Montserrat";
Chart.defaults.font.size = 12;

const createImageFromSVG = (svgString: string) => {
  const img = new Image();
  img.src = "data:image/svg+xml;base64," + btoa(svgString);
  return img;
};

const greyPointSVG = `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4.5" cy="4" r="3.5" fill="white" stroke="#CDB7D9"/>
</svg>`;

const purplePointSVG = `<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4.5" cy="4" r="3.5" fill="white" stroke="#800080"/>
</svg>`;

const ExpensesLineArea = () => {
  const [greyPoint, setGreyPoint] = useState<HTMLImageElement | null>(null);
  const [purplePoint, setPurplePoint] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    setGreyPoint(createImageFromSVG(greyPointSVG));
    setPurplePoint(createImageFromSVG(purplePointSVG));
  }, []);

  const data_points = {
    totalRevenueEarned: [630000, 200000, 670000, 265000, 700000],
    totalExpenses: [327000, 533000, 690000, 660000, 580000],
  };

  const lineShadow: Plugin<"line"> = {
    id: "lineShadow",
    beforeDatasetDraw(chart, args) {
      const { ctx } = chart;
      const dataset = chart.data.datasets[args.index];

      const baseColor = dataset.borderColor;

      if (typeof baseColor === "string") {
        ctx.save();

        ctx.shadowColor = `${baseColor}`;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 5;
      }
    },
    afterDatasetDraw(chart, args) {
      const { ctx } = chart;
      const dataset = chart.data.datasets[args.index];

      const baseColor = dataset.borderColor;
      if (typeof baseColor === "string") {
        ctx.restore();
      }
    },
  };

  const data: ChartData<"line", number[], string> = {
    labels: data_points.totalRevenueEarned.map((_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: "Total Revenue",
        data: data_points.totalRevenueEarned,
        borderColor: "#800080",
        borderWidth: 1,
        cubicInterpolationMode: "monotone" as const,
        pointStyle: purplePoint as unknown as string,
        // tension: 0.5,
      },
      {
        label: "Total Expenses",
        data: data_points.totalExpenses,
        borderColor: "#CDB7D9",
        borderWidth: 1,
        cubicInterpolationMode: "monotone" as const,
        pointStyle: greyPoint as unknown as string,
        // tension: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      datalabels: { display: false },
    },
    font: {
      family: "Montserrat",
    },
    scales: {
      y: {
        // suggestedMax: 3,
        ticks: {
          stepSize: 400000,
        },
      },
    },
  };

  return (
    <div className="mt-6 flex flex-col gap-6 rounded-[5px] border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold">
          Total Revenue Earned vs. Total Payouts.
        </h3>
        <select
          defaultValue="weekly"
          className="w-32 truncate rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
        >
          <option value="weekly">Weekly</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>
      <div className="h-100">
        <Line data={data} options={options} plugins={[lineShadow]} />
      </div>
    </div>
  );
};
export default ExpensesLineArea;
