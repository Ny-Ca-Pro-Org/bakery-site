import "./Orders.css";
import React, { useState } from "react";

const Orders = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order submitted successfully!");
    // Reset form
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      description: "",
    });
  };

  return (
    <div className="order">
      <div className="order-left">
        <div className="order-text-container">
          <div className="inner-container">
            <h1>just tell us what you want</h1>
            <p>
              Your Order <br /> <span>.....</span> Our Priority
            </p>
          </div>
        </div>
      </div>
      <div className="order-form-container">
        <h2>Place Your Order</h2>
        <form onSubmit={handleSubmit} className="order-form">
          <label>
            Full Name:
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Order Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit Order</button>
        </form>
      </div>
    </div>
  );
};

export default Orders;
