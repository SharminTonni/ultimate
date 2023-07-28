import React from "react";
import { Button } from "react-bootstrap";
import {
  FaHome,
  FaClipboardList,
  FaNewspaper,
  FaUserAlt,
  FaSearch,
  FaRegBell,
  FaSignOutAlt,
  FaArrowDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="d-lg-flex pe-3 rela">
      <div className="p-1">
        <img
          className="d-lg-block d-none"
          style={{ height: "40px", width: "40px" }}
          src="https://p7.hiclipart.com/preview/236/162/358/monarch-butterfly-logo-poster-blue-butterfly-thumbnail.jpg"
          alt=""
        />
        <div className="d-lg-block d-flex text-secondary-emphasis">
          <Link className="d-lg-block">
            <FaSearch></FaSearch>
          </Link>

          <Link to="/" className="d-lg-block mt-lg-5">
            <FaHome></FaHome>
          </Link>
          <Link className="d-lg-block">
            <FaNewspaper></FaNewspaper>
          </Link>
          <Link className="d-lg-block">
            <FaClipboardList></FaClipboardList>
          </Link>

          <Link to="/profile" className="d-lg-block">
            <FaUserAlt></FaUserAlt>
          </Link>

          <Link className="d-lg-block mt-lg-5 abs">
            <FaRegBell className="mt-lg-5"></FaRegBell>
            <span
              className="bg-success cir rounded-circle"
              style={{ width: "6px", height: "6px" }}
            ></span>
          </Link>

          <Link className="d-lg-block">
            <FaSignOutAlt></FaSignOutAlt>
          </Link>
        </div>
      </div>
      <div className="bg-body-tertiary p-5">
        <div className="d-flex mt-3">
          <img
            style={{ width: "70px", height: "70px" }}
            className="rounded-circle me-2"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div className=" flex-row">
            <h6>Hello Mike</h6>
            <span>Welcome back</span>
          </div>
        </div>

        <div className="mt-3">
          <span>Today</span>
          <h4 className="mt-3">$19,892</h4>
          <span style={{ fontSize: "12px" }} className="text-secondary">
            Account Balance
          </span>
          <div className="d-flex d-lg-block">
            <div>
              {" "}
              <h5 className="mt-3">$4000</h5>
              <span style={{ fontSize: "10px" }} className="text-secondary">
                Year-to-Date Contribution
              </span>
            </div>
            <div>
              <h5 className="mt-3">$1892</h5>
              <span style={{ fontSize: "10px" }} className="text-secondary">
                Total Interest
              </span>
            </div>
          </div>
          <Button className="mt-3" style={{ fontSize: "14px" }}>
            I want To <FaArrowDown></FaArrowDown>
          </Button>
        </div>
        <div className="mt-4">
          <h6>Recent Transactions</h6>
          <span style={{ fontSize: "12px" }} className="text-secondary">
            2020-7-8
          </span>
          <br />
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
            Withdrawal transferred to XXX111
          </span>
          <br />
          <span style={{ fontSize: "12px" }} className="text-secondary">
            2020-7-17
          </span>
          <br />
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
            Withdrawal transferred to XXX111
          </span>
          <br />
          <span style={{ fontSize: "12px" }} className="text-secondary">
            2020-7-21
          </span>
          <br />
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
            Withdrawal transferred to XXX111
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
