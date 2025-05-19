import React from "react";
import "./VendorProduct.css";
import image1 from "../../../Assets/birthday-cake.jpg";
import image2 from "../../../Assets/wedding cake.jpg";
import { Link } from "react-router";
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    image: image2,
    title: "wedding cake",
    category: "wedding",
  },
  {
    id: 2,
    image: image1,
    title: " birthday cake",
    category: "birthday",
  },
  {
    id: 3,
    image: image2,
    title: "wedding cake ",
    category: "wedding",
  },
  {
    id: 4,
    image: image1,
    title: "birthday cake",
    category: "birthday",
  },
  {
    id: 5,
    image: image2,
    title: " wedding cake",
    category: "wedding",
  },
  {
    id: 6,
    image: image1,
    title: "birthday cake",
    category: "birthday",
  },
  {
    id: 7,
    image: image2,
    title: " wedding cake",
    category: "wedding",
  },
  {
    id: 8,
    image: image1,
    title: "birthday cake",
    category: "birthday",
  },
];

const VendorProduct = () => {
  return (
    <div className="product-page">
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
      <h1>My Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <div className="actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorProduct;
