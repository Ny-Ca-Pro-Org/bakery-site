import "./Orders.css";
import React, { useState } from "react";
import axios from "axios";
import { apiCreateOrder } from "../../services/products";

const Orders = () => {
  const [formElement, setFormElement] = useState({
    Name: "",
    Location: "",
    Phone: "",
    OrderDescription: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      Name: formElement.Name,
      Location: formElement.Location,
      Phone: formElement.Phone,
      OrderDescription: [formElement.OrderDescription],
    };

    try {
      const response = await apiCreateOrder(formData);

      alert("Product submitted successfully!");
      console.log("Response:", response.data);

      // ✅ Reset inputs after success
      setFormElement({
        Name: "",
        Location: "",
        Phone: "",
        OrderDescription: "",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order">
      <div className="order-left">
        <div className="order-text-container">
          <h1>just tell us what you want</h1>
          <p>
            Your Order <br /> <span>.....</span> Our Priority
          </p>
        </div>
      </div>
      <div className="order-right">
        <h2>Place Your Order</h2>

        <div className="order-form-container">
          <form onSubmit={handleSubmit} className="order-form">
            <label>
              Name:
              <input
                type="text"
                name="Name"
                value={formElement.Name}
                onChange={(e) =>
                  setFormElement({ ...formElement, Name: e.target.value })
                }
                required
              />
            </label>

            <label>
              Location:
              <input
                type="text"
                name="Location"
                value={formElement.Location}
                onChange={(e) =>
                  setFormElement({ ...formElement, Location: e.target.value })
                }
                required
              />
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                name="Phone"
                value={formElement.Phone}
                onChange={(e) =>
                  setFormElement({ ...formElement, Phone: e.target.value })
                }
                required
              />
            </label>

            <label>
              Order Description:
              <textarea
                name="OrderDescription"
                value={formElement.OrderDescription}
                onChange={(e) =>
                  setFormElement({
                    ...formElement,
                    OrderDescription: e.target.value,
                  })
                }
                required
              />
            </label>

            <button type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Submit Order"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Orders;
