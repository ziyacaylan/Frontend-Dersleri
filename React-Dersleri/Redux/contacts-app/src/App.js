import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import Home from "./pages/Home";
import Edit from "./components/edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
