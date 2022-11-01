import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/index";
import Products from "./components/Pages/Products/index";
import ProductDetail from "./components/Pages/ProductDetail/index";
import Signin from "./components/Pages/Auth/Signin";
import Signup from "./components/Pages/Auth/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
