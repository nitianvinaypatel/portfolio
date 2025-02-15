import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GFG = ({
  totalSolved,
  basicSolved,
  easySolved,
  mediumSolved,
  hardSolved,
  rank,
  profileLink,
}) => {
  const [chartWidth, setChartWidth] = useState(280); // Default width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setChartWidth(550); // Large screens (lg)
      } else {
        setChartWidth(280); // Small screens
      }
    };

    handleResize(); // Set initial value based on screen width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add basicSolved to easySolved
  const adjustedEasySolved = (easySolved || 0) + (basicSolved || 0);

  // Set chartData as the number of solved problems in each category
  const chartData = [adjustedEasySolved, mediumSolved || 0, hardSolved || 0];

  // Create a mapping for category counts
  const categoryCounts = {
    Easy: { solved: adjustedEasySolved },
    Medium: { solved: mediumSolved || 0 },
    Hard: { solved: hardSolved || 0 },
  };

  // ApexCharts options for the donut chart
  const chartOptions = {
    series: chartData,
    labels: ["Easy", "Medium", "Hard"],
    chart: {
      type: "donut",
    },
    colors: ["#1CBBBA", "#f5bb40", "#e34a42"],
    plotOptions: {
      pie: {
        startAngle: -135,
        endAngle: 135,
        donut: {
          size: "90%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "",
              formatter: () => `${totalSolved}/3570`,
            },
          },
        },
      },
    },
    stroke: {
      show: false, // Ensure no stroke is drawn on the slices
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#ffffff", // Set legend text color to white
      },
      formatter: function (seriesName) {
        const { solved } = categoryCounts[seriesName];
        return `${seriesName}: ${solved}`;
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#ffffff"],
        fontSize: "12px",
        fontWeight: "extra-thin",
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="text-white">
      <div className="flex justify-center">
        <Chart
          options={chartOptions}
          series={chartData}
          type="donut"
          height={200}
          width={chartWidth}
        />
      </div>
    </div>
  );
};

export default GFG;
