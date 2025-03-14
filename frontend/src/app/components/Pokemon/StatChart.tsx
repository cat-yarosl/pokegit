import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface StatChartProps {
  pokemonInfo: any;
}

const StatChart: React.FC<StatChartProps> = ({ pokemonInfo }) => {
  const maxStatValue = Math.max(...pokemonInfo.stats.map((stat: any) => stat.base_stat)) + 10;

  const data = {
    labels: pokemonInfo.stats.map((stat: any) => stat.stat.name),
    datasets: [
      {
        label: 'Base Stat',
        data: pokemonInfo.stats.map((stat: any) => stat.base_stat),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y' as const, // This changes the chart to horizontal
    scales: {
      x: {
        max: maxStatValue,
        ticks: {
          color: 'white',
        }
      },
      y: {
        ticks: {
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Pokémon Stats',
        color: 'white',
      },
      datalabels: {
        anchor: 'end' as const,
        align: 'end' as const,
        color: 'gray',
        font: {
          weight: 'bold' as const,
        },
        formatter: (value: number) => value.toString(),
      },
    },
  };

  return (
    <div className="
      stats-box 
      mt-2 
      p-4 
      bg-gray-800 
      rounded-lg
    ">
      <Bar 
        data={data} 
        options={options} 
      />
    </div>
  );
};

export default StatChart;