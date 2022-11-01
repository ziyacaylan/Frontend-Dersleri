import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
