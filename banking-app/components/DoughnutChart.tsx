"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: accounts.map((account) => account.name),
    datasets: [
      {
        label: "Banks",
        data: accounts.map((account) => account.currentBalance),
        backgroundColor: accounts.map(
          (_, index) => `hsl(${(index * 360) / accounts.length}, 70%, 50%)`,
        ),
        borderWidth: 1,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
