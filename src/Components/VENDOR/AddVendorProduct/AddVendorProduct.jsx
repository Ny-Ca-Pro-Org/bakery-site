import React, { useState } from "react";
import "./AddVendorProduct.css";
import { Link } from "react-router";
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import { apiAddProduct } from "../../../services/products";

const AddVendorProduct = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setLoading(true);

    try {
      const response = await apiAddProduct(formData);
      alert("Product submitted successfully!");
      console.log("Response:", response.data);
      e.target.reset(); // Optional: Reset form fields
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-container">
      <SideBar />
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

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Add Product"}
        </button>

        {/* Spinner */}
        {loading && <div className="spinner"></div>}
      </form>
    </div>
  );
};

export default AddVendorProduct;
