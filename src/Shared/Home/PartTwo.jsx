import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Container } from "react-bootstrap";

const PartTwo = () => {
  const [chart, setChart] = useState({
    series: [
      {
        name: "Employer: K-73,500",
        data: [55, 60, 65, 70, 75, 80, 85, 90],
      },
      {
        name: "Employee: K-52,500",
        data: [55, 60, 65, 70, 75, 80, 85, 90],
      },
      {
        name: "total Interest: K-24,4131",
        data: [55, 60, 65, 70, 75, 80, 85, 90],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "60%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: ["20", "25", "30", "35", "40", "45", "60", "65"],
      },
      fill: {
        colors: ["#040466", "#0909b9", "#9898eb"],
        opacity: 1,
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50,
      },
    },
  });
  return (
    <div>
      <div className="ms-lg-5">
        <h5 className="fw-semibold">Contribution Over time</h5>
      </div>
      <Container>
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="bar"
          height={350}
        />
      </Container>
    </div>
  );
};

export default PartTwo;
