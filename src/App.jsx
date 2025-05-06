import { BrowserRouter as Router, Route, Routes } from "react-router";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Pasteries from "./Pages/Pasteries";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import AllCeremonies from "./Pages/AllCeremonies";
import BirthDay from "./Pages/BrithDay";
import Wedding from "./Pages/Wedding";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pasteries" element={<Pasteries />} />
          <Route path="/about" element={<About />} />
          <Route path="/ceremony" element={<AllCeremonies />} />
          <Route path="/birthday" element={<BirthDay />} />
          <Route path="/wedding" element={<Wedding />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
