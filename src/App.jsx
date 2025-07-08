import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {
  Route,
  BrowserRouter as Onion,
  Routes,
  useLocation,
} from "react-router";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import VendorAnalytics from "./Components/VENDOR/VendorAnalytics/VendorAnalytics";
import VendorProduct from "./Components/VENDOR/VendorProducts/VendorProduct";
import AddVendorProduct from "./Components/VENDOR/AddVendorProduct/AddVendorProduct";
import VendorOrders from "./Components/VENDOR/VendorOrders/VendorOrders";
import Pasteries from "./Pages/Pasteries";

function LayoutWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin-onion-dashboard");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/admin-onion-dashboard" element={<AdminDashboard />} />
        <Route path="/wedding" element={<ShopCategory category="Wedding" />} />
        <Route
          path="/birthday"
          element={<ShopCategory category="Birthday" />}
        />
        <Route path="/ceremony" element={<ShopCategory category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/:productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Auth />} />
        <Route path="pasteries" element={<Pasteries />} />
        <Route
          path="/admin-onion-dashboard/analytics"
          element={<VendorAnalytics />}
        />
        <Route
          path="/admin-onion-dashboard/product"
          element={<VendorProduct />}
        />
        <Route
          path="/admin-onion-dashboard/add-product"
          element={<AddVendorProduct />}
        />
        <Route
          path="/admin-onion-dashboard/orders"
          element={<VendorOrders />}
        />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Onion>
      <LayoutWrapper />
    </Onion>
  );
}

export default App;
