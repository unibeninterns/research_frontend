import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  Scale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const info = [
  { week: 1, completed: 0 },
  { week: 2, completed: 1 },
  { week: 3, completed: 0 },
  { week: 4, completed: 2 },
  { week: 5, completed: 1 },
  { week: 6, completed: 0 },
  { week: 7, completed: 1 },
  { week: 8, completed: 1 },
  { week: 9, completed: 0 },
  { week: 10, completed: 0 },
  { week: 11, completed: 0 },
  { week: 12, completed: 0 },
];

const data: ChartData<'line', number[], string> = {
  labels: info.map((i) => `Week ${i.week}`),
  datasets: [
    {
      data: info.map((i) => i.completed),
      backgroundColor: '#800080',
      borderColor: '#800080',
      borderWidth: 1,
      cubicInterpolationMode: 'monotone' as const,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  font: {
    family: 'Montserrat',
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      suggestedMax: 3,
      ticks: {
        stepSize: 1,
      },
      title: {
        display: true,
        text: 'Modules Completed',
        position: 'top' as const,
      },
    },
    x: {
      ticks: {
        callback: function (
          this: Scale,
          value: string | number,
          index: number
        ): string | null {
          return index % 2 === 1 ? this.getLabelForValue(Number(value)) : null;
        },
      },
      title: {
        display: true,
        text: 'Weeks', // Name for the x-axis
      },
    },
  },
};

const LineGraph = () => {
  return <Line options={options} data={data} className='' />;
};

export default LineGraph;
