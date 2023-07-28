import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Container } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
const PartThree = () => {
  const [chartOne, setChartOne] = useState({
    series: [78],
    options: {
      chart: {
        height: 300,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
        },
      },
      labels: ["Average"],
    },
  });
  const [chartTwo, setChartTwo] = useState({
    series: [95],
    options: {
      chart: {
        height: 300,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
        },
      },
      labels: ["Top"],
    },
  });
  const [chartThree, setChartThree] = useState({
    series: [59],
    options: {
      chart: {
        height: 300,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
        },
      },
      labels: ["Me"],
    },
  });
  return (
    <Container className="ms-lg-4 mt-5" style={{ width: "1/3" }}>
      <div>
        <h5 className="fw-semibold">How do I compare to my peers?</h5>
        <p style={{ fontSize: "12px" }} className="text-secondary fw-semibold">
          These numbers represent current goal achievement.
        </p>
      </div>
      <div className="d-lg-flex">
        <div>
          <p style={{ fontSize: "14px" }}>
            Age: Under 30
            <FaArrowDown></FaArrowDown>
          </p>
          <p style={{ fontSize: "14px" }}>
            Salary: K 20 - K 30
            <FaArrowDown></FaArrowDown>
          </p>
          <p style={{ fontSize: "14px" }}>
            Gender: Male
            <FaArrowDown></FaArrowDown>
          </p>
        </div>
        <div className="d-lg-flex">
          <ReactApexChart
            options={chartOne.options}
            series={chartOne.series}
            type="radialBar"
            height={200}
          />

          <ReactApexChart
            options={chartTwo.options}
            series={chartTwo.series}
            type="radialBar"
            height={200}
          />
          <ReactApexChart
            options={chartThree.options}
            series={chartThree.series}
            type="radialBar"
            height={200}
          />
        </div>
      </div>
    </Container>
  );
};

export default PartThree;
