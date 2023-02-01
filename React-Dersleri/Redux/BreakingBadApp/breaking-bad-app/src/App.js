import React from "react";

import { Routes, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/global.css";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import RouteLayout from "./pages/RouteLayout";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./components/QuoteDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RouteLayout />}>
          <Route index element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route path="/quotes/" element={<Quotes />} />
          <Route path="/quotes/detail/:id" element={<QuoteDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
