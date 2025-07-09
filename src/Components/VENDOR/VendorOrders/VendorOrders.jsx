import React, { useEffect, useState } from "react";
import "./VendorOrders.css";
import { Link } from "react-router";
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
  FaTrash,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import {
  apiDeleteVendorOrderbyId,
  apiGetAllOrders,
} from "../../../services/products";
//import { apiGetAllOrders, apiDeleteVendorOrderbyId } from "../../../services/orders";

const VendorOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await apiGetAllOrders();
      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Could not fetch orders", error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await apiDeleteVendorOrderbyId(orderId);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
      console.log(`Order ${orderId} deleted successfully`);
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="vendor-orders">
      <SideBar />

      <div className="orders-container">
        <div className="order-container">
          {orders.map((order) => (
            <div className="order-in" key={order._id}>
              <h2>
                <span>Full Name:</span> {order.Name}
              </h2>
              <p>
                <span>Location:</span> {order.Location}
              </p>
              <p>
                <span>Phone:</span> {order.Phone}
              </p>
              <span>Order details:</span>
              <p>{order.OrderDescription}</p>
              <div className="status">
                <div>
                  <input type="checkbox" id="completed" />
                  <label>completed</label>
                </div>
                <button
                  className="del-btn"
                  onClick={() => deleteOrder(order._id)}
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorOrders;
