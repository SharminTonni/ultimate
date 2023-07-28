import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Shared/Navbar";
const Main = () => {
  return (
    <div className="d-lg-flex my-lg-2 mx-lg-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
