import "./SideBar.css";
import { Link } from "react-router";
import logo from "../../../assets/logo-large.jpg"
import {
  FaTshirt,
  FaPlus,
  FaChartBar,
  FaSignOutAlt,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
const SideBar = () => {
  return (
    <div>
      <aside className="sidebar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        {/* <h2 className="logo">NyCa-Pro Bakery</h2> */}
        <nav className="nav-links">
          <Link to="/admin-onion-dashboard">
            <FaShoppingCart /> <span>Overview</span>
          </Link>
          <Link to="/admin-onion-dashboard/product">
            <FaTshirt /> <span>My Products</span>
          </Link>
          <Link to="/admin-onion-dashboard/add-product">
            <FaPlus /> <span>Add Product</span>
          </Link>
          <Link to="/admin-onion-dashboard/orders">
            <FaPlus /> <span>Orders </span>
          </Link>
          <Link to="/admin-onion-dashboard/analytics">
            <FaChartBar /> <span>Analytics</span>
          </Link>

          <a href="/logout">
            <FaSignOutAlt /> <span>Logout</span>
          </a>
        </nav>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
