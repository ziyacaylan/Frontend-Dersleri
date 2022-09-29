import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="footer footer-up">
        <div className="icons">
          <div>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-down"></div>
    </div>
  );
}

export default Footer;
