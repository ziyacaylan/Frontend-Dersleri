import React from "react";
import Logo from "../my-logo.png";
import SettingsBtn from "./IconComponent/SettingsBtn";

function Header() {
  return (
    <div className="header container-fluid">
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-12 col-md-4 ps-5 d-flex justify-content-start logo-content">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="col-12 col-md-4  py-3">
          <h2 className="text-center ps-4">Hava Durumu</h2>
        </div>
        <div className="col-12 col-md-4 settings-content d-flex justify-content-end pe-3 ">
          {/* <a href={"asd"} target="blank">
            <img src={settingsIcon} alt="" className="settings-icon" />
          </a> */}
          <SettingsBtn />
        </div>
      </div>
    </div>
  );
}

export default Header;
