import { BrowserRouter as Router, Route, Routes } from "react-router";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Pasteries from "./Pages/Pasteries";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pasteries" element={<Pasteries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
