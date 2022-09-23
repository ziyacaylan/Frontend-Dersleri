import "./App.css";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Users from "./components/pages/Users";
import User from "./components/pages/User";
import Page404 from "./components/pages/Page404";

let activeStyle = {
  textDecoration: "underline",
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ borderBottom: "solid 2px" }}>
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li style={{ marginLeft: "10px" }}>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <NavLink
                to="/users"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Users
              </NavLink>
            </li>
            <li style={{ marginLeft: "10px" }}>
              <NavLink
                to="contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
