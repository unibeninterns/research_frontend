import {
  ArcElement,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  Plugin,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

Chart.register(ChartDataLabels);

Chart.register(ArcElement, Tooltip, Legend);

Chart.defaults.font.family = "Montserrat, sans-serif";
Chart.defaults.font.size = 12;

const AdminDoughnutChart = () => {
  const info = [
    { label: "Miscellaneous", value: 2.63, color: "#E5CCE5" },
    { label: "Marketing & Ads", value: 6.67, color: "#B266B2" },
    { label: "Legal & Admin Fees", value: 10.9, color: "#CC99CC" },
    { label: "Domain & Subdomains", value: 31.68, color: "#CDB7D9" },
    { label: "Hosting & Cloud", value: 22.85, color: "#F9DBFF" },
    { label: "Tutor Payouts", value: 25.27, color: "#800080" },
  ];

  const transformedData = info.map((item) => ({
    ...item,
    radius: Math.pow(item.value, 0.5),
  }));

  const data: ChartData<"doughnut"> = {
    labels: transformedData.map((item) => item.label),
    datasets: [
      {
        data: transformedData.map((item) => item.value),
        backgroundColor: transformedData.map((item) => item.color),
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    layout: {
      padding: {
        top: 60,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      datalabels: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const i = context.dataIndex;
            return `${info[i].label}: ${info[i].value}%`;
          },
        },
      },
    },
  };

  const calloutPlugin: Plugin<"doughnut"> = {
    id: "callouts",
    afterDatasetsDraw(chart) {
      const { ctx, chartArea } = chart;
      const meta = chart.getDatasetMeta(0);
      if (!meta) return;

      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      const radialOffset = 36;
      const elbowGap = 5;
      const padding = 50;
      const extraTail = 0;
      const textGap = 4;
      const minLabelGap = 18;
      const items: {
        arcEdgeX: number;
        arcEdgeY: number;
        midX: number;
        midY: number;
        angle: number;
        isLeft: boolean;
        text: string;
        color: string;
        y: number;
      }[] = [];

      meta.data.forEach((arc, i) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const arcAny = arc as any;
        const startAngle: number = arcAny.startAngle;
        const endAngle: number = arcAny.endAngle;
        const outerRadius: number = arcAny.outerRadius;

        const angle = (startAngle + endAngle) / 2;
        const arcEdgeX = centerX + Math.cos(angle) * outerRadius;
        const arcEdgeY = centerY + Math.sin(angle) * outerRadius;

        const midX = centerX + Math.cos(angle) * (outerRadius + radialOffset);
        const midY = centerY + Math.sin(angle) * (outerRadius + radialOffset);

        const isLeft = angle > Math.PI / 2 && angle < (3 * Math.PI) / 2;
        const text = `${info[i].label}: ${info[i].value}%`;

        items.push({
          arcEdgeX,
          arcEdgeY,
          midX,
          midY,
          angle,
          isLeft,
          text,
          color: info[i].color,
          y: midY,
        });
      });

      items.sort((a, b) => a.y - b.y);
      for (let i = 1; i < items.length; i++) {
        const prev = items[i - 1];
        const curr = items[i];
        if (curr.y - prev.y < minLabelGap) {
          curr.y = prev.y + minLabelGap;
        }
      }

      ctx.save();
      ctx.font = "12px";
      ctx.textBaseline = "bottom";
      items.forEach((item) => {
        const textWidth = ctx.measureText(item.text).width;
        const dir = item.isLeft ? -1 : 1;

        const elbowStartX = item.midX;
        const elbowStartY = item.y;

        const elbowInnerX = elbowStartX + dir * elbowGap;

        const mainHorizontalLength = textWidth + padding * 2 + extraTail;

        const mainLineEndX = elbowInnerX + dir * mainHorizontalLength;

        ctx.save();
        ctx.strokeStyle = item.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(item.arcEdgeX, item.arcEdgeY);
        ctx.lineTo(elbowStartX, elbowStartY);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.strokeStyle = item.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(elbowStartX, elbowStartY);
        ctx.lineTo(elbowInnerX, elbowStartY);
        ctx.lineTo(mainLineEndX, elbowStartY);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "#333";
        ctx.font = "12px";
        ctx.textBaseline = "bottom";
        ctx.textAlign = item.isLeft ? "right" : "left";

        const textX = item.isLeft
          ? mainLineEndX + textWidth
          : mainLineEndX - textWidth;
        const textY = elbowStartY - textGap;

        ctx.fillText(item.text, textX, textY);
        ctx.restore();
      });

      ctx.restore();
    },
  };

  return (
    <div className="my-6 flex flex-col gap-6 rounded-[5px] border p-4">
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

      <div className="mt-4 flex h-80 items-center justify-center">
        <Doughnut data={data} options={options} plugins={[calloutPlugin]} />
      </div>
    </div>
  );
};

export default AdminDoughnutChart;
