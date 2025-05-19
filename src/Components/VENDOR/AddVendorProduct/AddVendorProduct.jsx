import React, { useState } from "react";
import "./AddVendorProduct.css";
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

const AddVendorProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "birthday",
    image: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    alert("Product submitted!");
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
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>
          Product Title:
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
          </select>
        </label>

        <label>
          Upload Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Product Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddVendorProduct;
