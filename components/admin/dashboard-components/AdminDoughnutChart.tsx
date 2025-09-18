import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  //   plugins,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

Chart.defaults.font.family = "Montserrat, sans-serif";
Chart.defaults.font.size = 12;

const data: ChartData<"doughnut", number[], string> = {
  labels: ["Completed", "In Progress", "Not Started"],
  datasets: [
    {
      label: "",
      data: [60, 30, 10],
      backgroundColor: ["#800080", "#CDB7D9", "#FBAFFF"],
      // borderColor: ["#800080", "#CDB7D9", "#FBAFFF"],
      // borderWidth: 3,
      // borderAlign: "inner",
      // hoverOffset: 4,
    },
  ],
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: Chart<"doughnut">) => {
    const { ctx, width, height } = chart;
    ctx.restore();

    const sum = chart.data.datasets[0].data.reduce(
      (a: number, b: number) => a + b,
      0,
    );

    const totalText = `Avg. Progress: ${sum}`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#1f2937";

    const textX = width / 2;
    const textY = height / 2;
    ctx.fillText(totalText, textX, textY - 25);
    ctx.save();
  },
};

const options: ChartOptions<"doughnut"> = {
  cutout: "83%",
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        font: {
          family: "Montserrat, sans-serif",
        },
        generateLabels: (chart) => {
          const data = chart.data;
          if (data.labels && data.labels.length && data.datasets.length) {
            const sum = (data.datasets[0].data as number[]).reduce(
              (a: number, b: number) => a + b,
              0,
            );
            return data.labels.map((label, i) => {
              const dataValue = data.datasets[0].data[i] as number;
              const percentage =
                sum > 0 ? ((dataValue / sum) * 100).toFixed(1) : 0;
              return {
                text: `${label}: ${percentage}%`,
                fillStyle: (data.datasets[0].backgroundColor as string[])[
                  i
                ] as string,
                strokeStyle: (data.datasets[0].backgroundColor as string[])[
                  i
                ] as string,
                lineWidth: 1,
                hidden: !chart.isDatasetVisible(0),
                index: i,
              };
            });
          }
          return [];
        },
      },
    },
  },
};

const AdminDoughnutChart = () => {
  return (
    <div className="flex h-[350px] flex-col">
      <div className="flex flex-row items-start justify-between gap-2">
        <h2 className="text-[16px] font-semibold text-gray-900">
          Module Completion Overview
        </h2>
        <select
          defaultValue="review"
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] focus:ring-2 focus:ring-[#800080] focus:outline-none"
        >
          <option value="review">Review</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>

      <div className="mt-4 flex h-100 flex-1 items-center justify-center">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
};

export default AdminDoughnutChart;
