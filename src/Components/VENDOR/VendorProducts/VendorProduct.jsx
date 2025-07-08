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
import SideBar from "../SideBar/SideBar";
import { apiDeleteVendorProductbyId } from "../../../services/products";

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
      //const token = localStorage.getItem("token");

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Token is missing! Please log in.");
      }

      if (!token) {
        alert("You are not logged in. Please log in to delete a product.");
        return;
      }

      setLoading(true);

      await apiDeleteVendorProductbyId(id, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Remove product from local state
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

  return (
    <div className="product-page">
      <SideBar />
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
          token={localStorage.getItem("token")} // ✅ Real token
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
