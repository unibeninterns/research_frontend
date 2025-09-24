"use client";
import {
  CategoryScale,
  Chart,
  ChartData,
  Filler,
  Legend,
  LinearScale,
  LineElement,
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

const greenPointSVG = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8.9101" y="8.33246" width="1.5689" height="0.581911" fill="url(#paint0_linear_1932_8362)"/>
  <rect x="8.9101" y="8.33246" width="1.5689" height="0.581911" stroke="#1DAE00" strokeWidth="0.581911"/>
  <path opacity="0.25" d="M8.61914 0.0415039L16.6191 8.0415L8.61914 16.0415L0.619141 8.0415L8.61914 0.0415039Z" fill="#1DAE00"/>
  <path d="M12.9121 8.0415L8.61914 12.3345L4.32617 8.0415L8.61914 3.74854L12.9121 8.0415Z" fill="#1DAE00" stroke="white"/>
  <defs>
    <linearGradient id="paint0_linear_1932_8362" x1="9.74748" y1="8.0415" x2="9.74748" y2="9.20533" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1DAE00" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#1DAE00" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>`;

const purplePointSVG = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8.94135" y="8.59857" width="1.31159" height="0.581911" fill="url(#paint0_linear_1932_8345)"/>
  <rect x="8.94135" y="8.59857" width="1.31159" height="0.581911" stroke="#800080" strokeWidth="0.581911"/>
  <path opacity="0.25" d="M8.65039 0.307617L16.6504 8.30762L8.65039 16.3076L0.650391 8.30762L8.65039 0.307617Z" fill="#800080"/>
  <path d="M12.9434 8.30762L8.65039 12.6006L4.35742 8.30762L8.65039 4.01465L12.9434 8.30762Z" fill="#800080" stroke="white"/>
  <defs>
    <linearGradient id="paint0_linear_1932_8345" x1="9.70505" y1="8.30762" x2="9.70505" y2="9.47144" gradientUnits="userSpaceOnUse">
      <stop stop-color="#800080" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#800080" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>`;

const LineAreaGraph = () => {
  const [greenPoint, setGreenPoint] = useState<HTMLImageElement | null>(null);
  const [purplePoint, setPurplePoint] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    setGreenPoint(createImageFromSVG(greenPointSVG));
    setPurplePoint(createImageFromSVG(purplePointSVG));
  }, []);

  const data_points = {
    totalRevenueEarned: [500000, 1400000, 600000, 1400000, 1500000],
    totalPayouts: [300000, 200000, 380000, 790000, 800000],
  };

  const createGradient = (chart: Chart, color1: string, color2: string) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top,
    );
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const data: ChartData<"line", number[], string> = {
    labels: data_points.totalRevenueEarned.map((_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: "Revenue Earned",
        data: data_points.totalRevenueEarned,
        borderColor: "#1DAE00",
        borderWidth: 1,
        fill: "start" as const,
        backgroundColor: (ctx) =>
          createGradient(ctx.chart, "#1DAE000D", "#1DAE004D"),
        cubicInterpolationMode: "monotone" as const,
        pointStyle: greenPoint as unknown as string,
      },
      {
        label: "Revenue Paid Out",
        data: data_points.totalPayouts,
        borderColor: "#800080",
        borderWidth: 1,
        fill: "start" as const,
        backgroundColor: (ctx) =>
          createGradient(ctx.chart, "#8000800D", "#8000800D"),
        cubicInterpolationMode: "monotone" as const,
        pointStyle: purplePoint as unknown as string,
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
export default LineAreaGraph;
