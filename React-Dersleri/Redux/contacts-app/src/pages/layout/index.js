import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container mx-auto  rounded-[20px] bg-violet-200 p-4 mt-4">
      <Outlet />
    </div>
  );
}

export default Layout;
