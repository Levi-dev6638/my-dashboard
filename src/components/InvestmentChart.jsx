import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
);

function InvestmentChart() {
  const data = {
    labels: ['Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
    datasets: [
      {
        label: 'Patrimônio',
        data: [500, 800, 1200, 1500, 2100, 2800],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative h-64 w-full min-w-0 sm:h-80 lg:h-96">
      <Line data={data} options={options} />
    </div>
  );
}

export default InvestmentChart;
