import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Pages/ProtectedRoute";

import Home from "./Pages/Home";
import Navbar from "./components/Navbar/index";
import Products from "./Pages/Products/index";
import ProductDetail from "./Pages/ProductDetail/index";
import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/Signup";
import Profile from "./Pages/Profile/index";
import Basket from "./Pages/Basket";
import Admin from "./Pages/Admin";

import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<ProtectedRoute admin={true} />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route>

          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
