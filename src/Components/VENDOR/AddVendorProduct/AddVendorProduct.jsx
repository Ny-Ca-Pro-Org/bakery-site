import React, { useState } from "react";
import "./AddVendorProduct.css";
import { Link } from "react-router";
import axios from "axios";
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";

const AddVendorProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post(
        "https://nyca-pro-enterprise.onrender.com/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRhZjcwMzY5M2ViZWRiZWI1NzkwMSIsImlhdCI6MTc0ODU0NjAyMiwiZXhwIjoxNzQ4NjMyNDIyfQ.C8WJL5oacn8p3jVEBohbVZ5CR-crGSkjlp2g_UFStkc`,
          },
        }
      );

      alert("Product submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product.");
    }
  };

  return (
    <div className="add-product-container">
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
            <FaPlus /> <span>Orders</span>
          </Link>
          <Link to="/admin-onion-dashboard/analytics">
            <FaChartBar /> <span>Analytics</span>
          </Link>
          <a href="/logout">
            <FaSignOutAlt /> <span>Logout</span>
          </a>
        </nav>
      </aside>

      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>
          Product Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Price:
          <input type="number" name="price" required />
        </label>

        <label>
          Category:
          <select name="category" required>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
          </select>
        </label>

        <label>
          Upload Image:
          <input type="file" name="image" accept="image/*" required />
        </label>

        <label>
          Description:
          <textarea name="description" required></textarea>
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddVendorProduct;
