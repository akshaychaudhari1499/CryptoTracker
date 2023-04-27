import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { convertNumbers } from "../../../functions/convertPrices";

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: multiAxis ? {
          coin1: {
            type: "linear",
            display: true,
            position: "left",
            
          },
          coin2: {
            type: "linear",
            display: true,
            position: "right"
            }}: false,
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
