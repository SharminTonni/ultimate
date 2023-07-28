import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import PartTwo from "./PartTwo";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const PartOne = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        {" "}
        <div className="ms-lg-5">
          <h6 className="text-primary fw-bold">Retirement Income</h6>
          <h3 className="">Starting Year 2056</h3>
        </div>
        <div className="d-lg-flex">
          <div className="border-bottom border-3 mt-4 border-primary m-lg-5">
            <h4>$300,0000</h4>
            <p
              style={{ fontSize: "12px" }}
              className="text-secondary fw-semibold"
            >
              My Goal
            </p>
          </div>
          <div className="d-flex justify-content-around">
            <div className="border-bottom border-3 mt-4 border-primary m-lg-5 m-5">
              <h4>59%</h4>
              <p
                style={{ fontSize: "12px" }}
                className="text-secondary fw-semibold"
              >
                Goal Achieved
              </p>
            </div>
            <div className="border-bottom border-3 mt-4 border-primary m-lg-5 m-5">
              <h4>$300</h4>
              <p
                style={{ fontSize: "12px" }}
                className="text-secondary fw-semibold"
              >
                Estimated Monthly Income
              </p>
            </div>
          </div>
        </div>
        <PartTwo></PartTwo>
      </div>
      <div className="col-md-4 bg-body-tertiary p-3 w-lg-25 rounded-5">
        <div>
          <h6 className="text-primary fw-bold">Retirement Strategy</h6>
        </div>
        <div className="mt-3">
          <h6 className=" fw-semibold">Employee Contribution</h6>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              aria-valuenow="25"
              style={{ width: "25%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              12%
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h6 className=" fw-semibold">Retirement</h6>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              aria-valuenow="25"
              style={{ width: "75%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-between">
          <h6 className=" fw-semibold">Employer Contribution </h6> <p>8.4%</p>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <h6 className=" fw-semibold">Interest Rate </h6> <p>5%</p>
        </div>
        <div className="text-center">
          <Button className="px-5">Update</Button>
        </div>
        <h6
          className="text-primary fw-bold text-center mt-3"
          style={{ fontSize: "12px" }}
        >
          View Help Docs <FaArrowDown></FaArrowDown>
        </h6>

        <div className="mt-5 border-start border-2 border-primary ps-2">
          <span style={{ fontSize: "14px" }} className="text-secondary fw-bold">
            Are you considering a
          </span>
          <span style={{ fontSize: "14px" }} className="fw-bold">
            Housing Advance
          </span>
          <span style={{ fontSize: "12px" }} className="text-secondary fw-bold">
            Limited time reduced interest
          </span>
          <h6
            className="text-primary fw-bold mt-3"
            style={{ fontSize: "12px" }}
          >
            Learn More <FaArrowRight></FaArrowRight>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PartOne;
