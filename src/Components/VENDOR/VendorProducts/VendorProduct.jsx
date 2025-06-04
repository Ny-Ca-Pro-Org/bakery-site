import React, { useContext, useState } from "react";
import "./VendorProduct.css";
import { Link } from "react-router";
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { ShopContext } from "../../../Context/ShopContext";
import EditProductForm from "../EditForm/EditForm";

const VendorProduct = () => {
  const { allProduct, setAllProduct } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmed) return;

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRhZjcwMzY5M2ViZWRiZWI1NzkwMSIsImlhdCI6MTc0ODU0NjAyMiwiZXhwIjoxNzQ4NjMyNDIyfQ.C8WJL5oacn8p3jVEBohbVZ5CR-crGSkjlp2g_UFStkc";

      if (!token) {
        alert("You are not logged in. Please log in to delete a product.");
        return;
      }

      setLoading(true);

      const response = await fetch(
        `https://nyca-pro-enterprise.onrender.com/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      const updatedProducts = allProduct.filter((product) => product.id !== id);
      setAllProduct(updatedProducts);

      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Something went wrong while deleting the product.");
    } finally {
      setLoading(false);
    }
  };

  // const handleDelete = async (id) => {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete this product?"
  //   );
  //   if (!confirmed) return;

  //   try {
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRhZjcwMzY5M2ViZWRiZWI1NzkwMSIsImlhdCI6MTc0ODQyODM2MSwiZXhwIjoxNzQ4NTE0NzYxfQ.cuOJDZtcXVE9YD90wdmAIs0RBdxvoraaKIgDlELyd7U"; // ✅ Correct token retrieval

  //     if (!token) {
  //       alert("You are not logged in. Please log in to delete a product.");
  //       return;
  //     }

  //     setLoading(true);

  //     const response = await fetch(
  //       `https://nyca-pro-enterprise.onrender.com/products/6828f0f468588da4da9d576c${id}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: `Bearer ${token}`, // ✅ Proper header
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to delete product");
  //     }
  //     // ✅ Update local product list after deletion
  //     const updatedProducts = allProduct.filter((product) => product.id !== id);
  //     setAllProduct(updatedProducts);

  //     alert("Product deleted successfully!");
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     alert("Something went wrong while deleting the product.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
      <h1>My Products</h1>
      <div className="product-grid">
        {allProduct.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">{product.price}</p>
            <div className="actions">
              <button
                className="edit-btn"
                onClick={() => setEditingProduct(product)}
              >
                <FaEdit size={18} />
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
                disabled={loading}
              >
                <FaTrash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          token={
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRhZjcwMzY5M2ViZWRiZWI1NzkwMSIsImlhdCI6MTc0ODU0NjAyMiwiZXhwIjoxNzQ4NjMyNDIyfQ.C8WJL5oacn8p3jVEBohbVZ5CR-crGSkjlp2g_UFStkc"
          } // TODO: Replace with real token logic
          onCancel={() => setEditingProduct(null)}
          onSave={(updatedProduct) => {
            const updatedList = allProduct.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            );
            setAllProduct(updatedList);
            setEditingProduct(null);
            alert("Product updated successfully!");
          }}
        />
      )}
    </div>
  );
};

export default VendorProduct;
