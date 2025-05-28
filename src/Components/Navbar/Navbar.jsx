import "./Navbar.css";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>NyCa-Pro Bakery</p>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleDropdown}>
        {dropdownOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Menu List */}
      <ul className={`nav-list ${dropdownOpen ? "active" : ""}`}>
        <li
          onClick={() => {
            setMenu("shop");
            closeDropdown();
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
            closeDropdown();
          }}
        >
          <Link to="/pasteries">Pasteries</Link>
          {menu === "men" && <hr />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
            closeDropdown();
          }}
        >
          <Link to="/about">About Us</Link>
          {menu === "women" && <hr />}
        </li>

        {/* Auth/Cart in dropdown */}
        <div className="auth-cart-mobile">
          {/* <Link to="/auth" onClick={closeDropdown}>
            <button>Login</button>
          </Link> */}
          <Link to="/cart" onClick={closeDropdown} className="cart-icon-mobile">
            <img src={cartIcon} alt="cart icon" />
            <div className="nav-counter">0</div>
          </Link>
        </div>
      </ul>

      {/* Desktop Auth/Cart */}
      <div className="auth-cart">
        {/* <Link to="/auth">
          <button>Login</button>
        </Link> */}
        <Link to="/cart">
          <img src={cartIcon} alt="cart icon" />
        </Link>
        <div className="nav-counter">0</div>
      </div>
    </div>
  );
};

export default Navbar;
