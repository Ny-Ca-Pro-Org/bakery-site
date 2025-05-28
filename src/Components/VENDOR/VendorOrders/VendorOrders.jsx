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
import axios from "axios";

const VendorOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://nyca-pro-enterprise.onrender.com/orders/allorders"
      );
      setOrders(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Could not fetch orders", error);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(
        `https://nyca-pro-enterprise.onrender.com/orders/${orderId}`
      );
      // Remove order from state
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
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
      <aside className="sidebar">
        <h2 className="logo">NyCa-Pro Bakery</h2>
        <nav className="nav-links">
          <Link to="/admin-onion-dashboard">
            <FaShoppingCart /> <span>Overview</span>
          </Link>
          <Link to="/admin-onion-dashboard/product">
            <FaTshirt /> <span>My Products</span>
          </Link>
          <Link to="/admin-onion-dashboard/add-product">
            <FaPlus /> <span>Add Product</span>
          </Link>
          <Link to="/admin-onion-dashboard/orders">
            <FaPlus /> <span>Orders </span>
          </Link>
          <Link to="/admin-onion-dashboard/analytics">
            <FaChartBar /> <span>Analytics</span>
          </Link>

          <a href="/logout">
            <FaSignOutAlt /> <span>Logout</span>
          </a>
        </nav>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>

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
                  onClick={() => deleteOrder(order.id)}
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

// import React, { useEffect, useState } from "react";
// import "./VendorOrders.css";
// import { Link } from "react-router";
// import {
//   FaTshirt,
//   FaPlus,
//   FaChartBar,
//   FaSignOutAlt,
//   FaShoppingCart,
//   FaTrash,
//   FaDollarSign,
//   FaChartLine,
// } from "react-icons/fa";
// import axios from "axios";

// const VendorOrders = () => {
//   const [orders, setOrders] = useState([]);

//   const fecthOrders = async () => {
//     try {
//       const res = await axios.get(
//         "https://nyca-pro-enterprise.onrender.com/orders/allorders"
//       );
//       setOrders(res.data);
//       console.log(res.data);
//     } catch (error) {
//       console.error("could not fecth orders", error);
//     }
//   };

//   useEffect(() => {
//     fecthOrders();
//   }, []);

//   return (
//     <div className="vendor-orders">
//       <aside className="sidebar">
//         <h2 className="logo">NyCa-Pro Bakery</h2>
//         <nav className="nav-links">
//           <Link to="/admin-onion-dashboard">
//             <FaShoppingCart /> <span>Overview</span>
//           </Link>
//           <Link to="/admin-onion-dashboard/product">
//             <FaTshirt /> <span>My Products</span>
//           </Link>
//           <Link to="/admin-onion-dashboard/add-product">
//             <FaPlus /> <span>Add Product</span>
//           </Link>
//           <Link to="/admin-onion-dashboard/orders">
//             <FaPlus /> <span>Orders </span>
//           </Link>
//           <Link to="/admin-onion-dashboard/analytics">
//             <FaChartBar /> <span>Analytics</span>
//           </Link>

//           <a href="/logout">
//             <FaSignOutAlt /> <span>Logout</span>
//           </a>
//         </nav>
//         <div className="hamburger">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </aside>
//       <div className="orders-container">
//         <div className="order-container">
//           {orders.map((order) => {
//             return (
//               <div className="order-in" key={order.id}>
//                 <h2>
//                   {" "}
//                   <span>Full Name:</span> {order.Name}
//                 </h2>
//                 <p>
//                   {" "}
//                   <span>Location:</span> {order.Location}
//                 </p>
//                 <p>
//                   {" "}
//                   <span>Phone:</span> {order.Phone}
//                 </p>
//                 <span>Order details:</span>
//                 <p> {order.OrderDescription}</p>
//                 <div className="status">
//                   <div>
//                     <input type="checkbox" id="completed" />
//                     <label>completed</label>
//                   </div>
//                   <button className="del-btn">
//                     <FaTrash size={18} />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorOrders;
