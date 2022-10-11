import React from "react";
import { Animated } from "react-animated-css";

function Settings() {
  return (
    <div className="settings-page">
      <div className="container mt-1 pt-1">
        <div className="d-flex flex-column atustify-content-center align-items-center mt-3">
          <div>
            <button className="btn btn-warning btn-sm mb-3 btn-prev">
              Geri
            </button>
          </div>
          <div>
            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                TR / ENG
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                °C / °F
              </label>
            </div>
            {/* buranın altına */}
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div>hello world ;)</div>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
