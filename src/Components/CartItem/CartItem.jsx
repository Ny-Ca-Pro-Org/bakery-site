import { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItem = () => {
  const { getTotalCartAmount, allProduct, cartItems, removeFromCart } =
    useContext(ShopContext);

  const vendorNumber = "233269914370"; 

  const sendOrderToWhatsApp = () => {
    const orderedItems = allProduct.filter((item) => cartItems[item.id] > 0);
    if (orderedItems.length === 0) return alert("Your cart is empty.");

    const messageLines = orderedItems.map((item, index) => {
      const quantity = cartItems[item.id];
      const totalPrice = item.new_price * quantity;
      return `${index + 1}. ${item.name} x${quantity} = $${totalPrice.toFixed(
        2
      )}`;
    });

    const total = getTotalCartAmount();
    const message = `Hello, I'd like to place an order:\n\n${messageLines.join(
      "\n"
    )}\n\nTotal: $${total.toFixed(2)}\nThank you!`;

    const url = `https://wa.me/${vendorNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="cart">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="format-main">
                <img
                  src={e.image}
                  alt="cart"
                  className="carticon-producticon"
                />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="cart-quantity">{cartItems[e.id]}</button>
                <p>${e.price * cartItems[e.id]}</p>
                <img
                  className="removeicon"
                  src={remove_icon}
                  alt="remove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="items-total">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
           
            <hr />
            <div className="items-total">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={sendOrderToWhatsApp}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
