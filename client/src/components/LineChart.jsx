import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ labels, datasets }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const chartConfig = {
        type: "line",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Day",
                color: "#1F2937",
              },
              ticks: {
                precision: 0,
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Amount",
                color: "#1F2937",
              },
              ticks: {
                precision: 0,
              },
            },
          },
        },
      };

      chartInstance = new Chart(ctx, chartConfig);
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [datasets, labels]);

  return <canvas ref={chartRef} height="200"></canvas>;
};

export default LineChart;
