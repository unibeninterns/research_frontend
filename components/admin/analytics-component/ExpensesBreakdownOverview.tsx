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
        top: 40,
        right: 60,
        bottom: 40,
        left: 60,
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

      const labelPositions: {
        midX: number;
        midY: number;
        text: string;
        color: string;
        isLeft: boolean;
        y: number;
      }[] = [];

      meta.data.forEach((arc, i) => {
        // TODO: solve the type problem
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { startAngle, endAngle, outerRadius } = arc as any;
        const angle = (startAngle + endAngle) / 2;

        const lineStartX = centerX + Math.cos(angle) * outerRadius;
        const lineStartY = centerY + Math.sin(angle) * outerRadius;

        const offset = 20;
        const midX = centerX + Math.cos(angle) * (outerRadius + offset);
        const midY = centerY + Math.sin(angle) * (outerRadius + offset);

        const text = `${info[i].label}: ${info[i].value}`;
        const isLeft = angle > Math.PI / 2 && angle < (3 * Math.PI) / 2;

        labelPositions.push({
          midX,
          midY,
          text,
          color: info[i].color,
          isLeft,
          y: midY,
        });

        ctx.save();
        ctx.strokeStyle = info[i].color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(lineStartX, lineStartY);
        ctx.lineTo(midX, midY);
        ctx.stroke();
        ctx.restore();
      });

      labelPositions.sort((a, b) => a.y - b.y);
      const minGap = 18;
      for (let i = 1; i < labelPositions.length; i++) {
        const prev = labelPositions[i - 1];
        const curr = labelPositions[i];
        if (curr.y - prev.y < minGap) {
          labelPositions[i].y = prev.y + minGap;
        }
      }

      labelPositions.forEach((label) => {
        ctx.save();
        ctx.strokeStyle = label.color;
        ctx.fillStyle = "#333";
        ctx.font = "12px Montserrat";
        ctx.textBaseline = "bottom";
        ctx.textAlign = label.isLeft ? "right" : "left";

        const textWidth = ctx.measureText(label.text).width;
        const padding = 8;
        const textGap = 3;

        let lineX1: number, lineX2: number, textX: number;

        if (label.isLeft) {
          lineX1 = label.midX - (textWidth + padding);
          lineX2 = label.midX;
          textX = lineX2;
        } else {
          lineX1 = label.midX;
          lineX2 = label.midX + (textWidth + padding);
          textX = lineX1;
        }

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(lineX1, label.y);
        ctx.lineTo(lineX2, label.y);
        ctx.stroke();

        ctx.fillText(label.text, textX, label.y - textGap);
        ctx.restore();
      });
    },
  };

  //   const variableRadiusPlugin: Plugin<"doughnut"> = {
  //     id: "variableRadiusDoughnut",
  //     beforeDatasetDraw(chart, args) {
  //       const meta = chart.getDatasetMeta(args.index);

  //       meta.data.forEach((arc, i) => {
  //         const t = transformedData[i];

  //         // @ts-expect-error (Arc private props)
  //         const baseOuter = arc.outerRadius;
  //         arc.outerRadius = baseOuter * 0.5 + t.radius;
  //       });
  //     },
  //   };

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

      <div className="mt-4 flex h-100 items-center justify-center">
        <Doughnut data={data} options={options} plugins={[calloutPlugin]} />
      </div>
    </div>
  );
};

export default AdminDoughnutChart;
