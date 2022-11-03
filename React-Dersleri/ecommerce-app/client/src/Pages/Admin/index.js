import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Home from "./Home";
import Orders from "./Orders";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

//style
import "./styles.css";

function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <NavLink to={"/admin/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">Products</NavLink>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:product_id" element={<ProductDetail />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Admin;
