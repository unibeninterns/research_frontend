import {
  ArcElement,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

Chart.defaults.font.family = "Montserrat";

const data: ChartData<"doughnut", number[], string> = {
  // labels: ['Completed', 'In Progress', 'Not Started'],
  datasets: [
    {
      label: "",
      data: [50, 50],
      backgroundColor: ["#800080", "#CDB7D9DD"],
      borderColor: ["#800080", "#CDB7D9"],
    },
  ],
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart: Chart<"doughnut">) => {
    const { ctx, width, height } = chart;
    ctx.restore();

    const completed = chart.data.datasets[0].data[0];

    const totalText = `${completed}%`;
    ctx.font = "700 24px Montserrat, sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#1f2937";

    const textX = width / 2;
    const textY = height / 2;
    ctx.fillText(totalText, textX, textY - 10);

    const secondaryText = "Completed";
    const secondaryTextY = textY + 10;
    ctx.font = "12px Montserrat, sans-serif";
    ctx.fillText(secondaryText, textX, secondaryTextY);
    ctx.save();
  },
};

const options: ChartOptions<"doughnut"> = {
  cutout: "90%",
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          family: "Montserrat, sans-serif",
        },
      },
    },
  },
};

const DoughnutChart = () => {
  return (
    <div className="flex h-25 items-center justify-center">
      <Doughnut
        data={data}
        options={options}
        plugins={[centerTextPlugin]}
        className=""
      />
    </div>
  );
};

export default DoughnutChart;
