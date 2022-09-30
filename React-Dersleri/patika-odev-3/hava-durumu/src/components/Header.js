import React from "react";
import Logo from "../my-logo.png";
function Header() {
  return (
    <div className="header container-fluid">
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-12 col-md-4 ps-5 justify-content-start logo-content">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="col-12 col-md-4  py-3 align-items-center">
          <h2 className="text-center ps-4">Hava Durumu</h2>
        </div>
        <div className="col-12 col-md-4  "></div>
      </div>
    </div>
  );
}

export default Header;
