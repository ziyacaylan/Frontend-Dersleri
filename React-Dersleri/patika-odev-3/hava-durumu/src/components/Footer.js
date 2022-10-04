import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faCodepen,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import PatikaIcon from "./IconComponent/Patika";

function Footer() {
  return (
    <div className="footer">
      <div className="footer footer-up">
        <div className="icons pt-3">
          <div>
            <p className="text-center text-muted">
              <strong>Aşağıdaki </strong>bağlantılardan bana ulaşabilirsiniz.
            </p>
            <ul className="list-unstyled d-flex flex-wrap justify-content-center">
              <li className="py-3">
                <a href="https://github.com/ziyacaylan" target="blank">
                  <FontAwesomeIcon icon={faGithub} className="fa-3x px-4" />
                </a>
              </li>
              <li className="py-3">
                <a
                  href="https://www.linkedin.com/in/ziya-caylan/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa-3x px-4" />
                </a>
              </li>
              <li className="py-3">
                <a href="https://codepen.io/ziya-c/pens/" target="blank">
                  <FontAwesomeIcon icon={faCodepen} className="fa-3x px-4" />
                </a>
              </li>
              <li className="py-3">
                <a
                  href="https://www.freecodecamp.org/ziya_caylan"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={faFreeCodeCamp}
                    className="fa-3x px-4"
                  />
                </a>
              </li>
              <li className="px-4 py-3">
                <a
                  href="https://app.patika.dev/ziyacaylangmailcom"
                  target="blank"
                >
                  <PatikaIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer footer-down">
        <p className="text-center text-muted py-4">
          Copyright © 2022. All rights reserved. | Designed by Ziya ÇAYLAN
        </p>
      </div>
    </div>
  );
}

export default Footer;
