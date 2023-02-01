import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./style.css";

function RouteLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Characters</Link>
          </li>
          <li>
            <Link to={"/quotes"}>Quotes</Link>
          </li>
        </ul>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default RouteLayout;
