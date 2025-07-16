import React, { useState } from "react";
import "./EditForm.css";
import { apiUpdateProduct } from "../../../services/products"; // Adjust as needed

const EditProductForm = ({ product, onCancel, onSave, token }) => {
  if (!product) return null;

  const [formData, setFormData] = useState({
    name: product.name || "",
    category: product.category || "",
    price: product.price || "",
    image: null, // Store File object here
  });

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("price", formData.price);
      if (formData.image) {
        data.append("image", formData.image); // actual file
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          // Do NOT set Content-Type; axios sets it automatically for FormData
        },
      };

      const response = await apiUpdateProduct(product.id, data, config);
      onSave(response.data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
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
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
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
          accept="image/*"
          // onChange={handleFileChange}
          name="image"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
