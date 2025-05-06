import "./Navbar.css";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>nyCa bakery</p>
      </div>
      <ul className="nav-list">
        <li onClick={() => setMenu("shop")}>
          {" "}
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/pasteries"> Pasteries</Link>{" "}
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/about">About Us</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        {/* <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li> */}
      </ul>
      <div className="auth-cart">
        <Link to="/auth">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="cart icon" />
        </Link>
        <div className="nav-counter">0</div>
      </div>
    </div>
  );
};

export default Navbar;
