import "./Orders.css";
import React, { useState } from "react";
import axios from "axios";

const Orders = () => {
  const [formElement, setFormElement] = useState({
    fullname: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await axios.post(
        "https://nyca-pro-enterprise.onrender.com/orders",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRhZjcwMzY5M2ViZWRiZWI1NzkwMSIsImlhdCI6MTc0NzkxMDMzNiwiZXhwIjoxNzQ3OTk2NzM2fQ.Fzs_hIU2vGHODoIU2vUTN3TNn9A_o-96UkA4obDL4qM`,
          },
        }
      );

      alert("Product submitted successfully!");
      console.log("Response:", response.data);

      setFormElement({
        fullname: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product.");
    }
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
      <div className="order-right">
        <h2>Place Your Order</h2>

        <div className="order-form-container">
          <form onSubmit={handleSubmit} className="order-form">
            <label>
              Full Name:
              <input type="text" name="customersName" required />
            </label>

            <label>
              Location:
              <input type="text" name="email" required />
            </label>

            <label>
              Phone Number:
              <input type="tel" name="customersPhone" required />
            </label>

            <label>
              Order Description:
              <textarea name="OrderDescription" required />
            </label>

            <button type="submit">Submit Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Orders;

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   try {
//     const response = await axios.post(
//       "https://nyca-pro-enterprise.onrender.com/products",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRhZjcwMzY5M2ViZWRiZWI1NzkwMSIsImlhdCI6MTc0NzkxMDMzNiwiZXhwIjoxNzQ3OTk2NzM2fQ.Fzs_hIU2vGHODoIU2vUTN3TNn9A_o-96UkA4obDL4qM`,
//         },
//       }
//     );

//     alert("Product submitted successfully!");
//     console.log("Response:", response.data);
//   } catch (error) {
//     console.error("Error submitting product:", error);
//     alert("Failed to submit product.");
//   }
// };
// <h2>Add New Product</h2>
//     <form onSubmit={handleSubmit} className="add-product-form">
//       <label>
//         Product Name:
//         <input type="text" name="name" required />
//       </label>

//       <label>
//         Price:
//         <input type="number" name="price" required />
//       </label>

//       <label>
//         Category:
//         <select name="category" required>
//           <option value="Weddings">Wedding</option>
//           <option value="Birthday">Birthday</option>
//         </select>
//       </label>

//       <label>
//         Upload Image:
//         <input type="file" name="image" accept="image/*" required />
//       </label>

//       <label>
//         Description:
//         <textarea name="description" required></textarea>
//       </label>

//       <button type="submit">Add Product</button>
//     </form>
