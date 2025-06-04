import React, { useState } from "react";
import "./EditForm.css";
const EditProductForm = ({ product, onCancel, onSave, token }) => {
  if (!product) return null; // 👈 Prevent rendering if product is not ready
  const [formData, setFormData] = useState({
    name: product.name || "",
    category: product.category || "",
    price: product.price || "",
    image: product.image || "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://nyca-pro-enterprise.onrender.com/products/${product.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedProduct = await response.json();
      onSave(updatedProduct); // Let parent component handle updating the list
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h3>Edit Product</h3>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        placeholder="Category"
      />
      <input
        type="number"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        placeholder="Price"
      />
      <input
        type="file"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        placeholder="Image URL"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
