import React from "react";
import "./VendorProduct.css";
import image from "../../../Assets/product_5.png";
import image1 from "../../../Assets/product_35.png";
import image2 from "../../../Assets/product_20.png";

const products = [
  {
    id: 1,
    image: image,
    title: "Classic T-Shirt",
    category: "men",
  },
  {
    id: 2,
    image: image1,
    title: "Summer Dress",
    category: "women",
  },
  {
    id: 3,
    image: image2,
    title: "Kids Hoodie",
    category: "kid",
  },
  {
    id: 4,
    image: image,
    title: "Denim Jacket",
    category: "men",
  },
  {
    id: 5,
    image: image1,
    title: "Evening Gown",
    category: "women",
  },
  {
    id: 6,
    image: image2,
    title: "Cartoon Tee",
    category: "kid",
  },
  {
    id: 7,
    image: image,
    title: "Casual Shirt",
    category: "men",
  },
  {
    id: 8,
    image: image1,
    title: "Skater Dress",
    category: "women",
  },
];

const VendorProduct = () => {
  return (
    <div className="product-page">
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
