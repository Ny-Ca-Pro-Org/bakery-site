// import React from "react";
// import "./VendorAnalytics.css";
import { FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./VendorAnalytics.css"; // Import your CSS file

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 6000 },
];

export default function VendorAnalytics() {
  return (
    <div className="dash-container">
      <h2 className="dashboard-title">Sales Overview</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300} className="dosomething">
          <LineChart data={data} className="doanotherthing">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="analytics-container">
          <h2>Analytics Overview</h2>
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
      </div>
    </div>
  );
}

