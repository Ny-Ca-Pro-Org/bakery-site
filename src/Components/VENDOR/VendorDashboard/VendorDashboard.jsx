import React from "react";
import "./VendorDashboard.css";
import { Link } from "react-router";
import logo from "../../../assets/logo-big.png"
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import SideBar from "../SideBar/SideBar";

const VendorDashboard = () => {
  const data = [
    { label: "January", value: 50 },
    { label: "February", value: 40 },
    { label: "March", value: 50 },
    { label: "April", value: 60 },
  ];

  return (
    <div className="dashboard-container ">
      <SideBar />
      <main className="main-content">
        <div className="bar-chart">
          {data.map((item, index) => (
            <div className="bar-container" key={index}>
              <span>GHC{item.value}</span>
              <div
                className="bar"
                style={{ height: `${item.value * 5}px` }}
              ></div>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="analytics-container">
          <h2> Overview</h2>
          <div className="cards">
            <div className="card">
              <FaShoppingCart className="icon" />
              <div>
                <h3>1,230</h3>
                <p>Total Orders</p>
              </div>
            </div>
            <div className="card">
              <FaDollarSign className="icon" />
              <div>
                <h3>$18,500</h3>
                <p>Total Revenue</p>
              </div>
            </div>
            <div className="card">
              <FaChartLine className="icon" />
              <div>
                <h3>12%</h3>
                <p>Growth Rate</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;
