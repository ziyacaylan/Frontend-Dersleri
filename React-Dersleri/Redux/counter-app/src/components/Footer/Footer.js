import React from "react";
import styles from "./styles.module.css";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <p>Sosyal Medya ve Github Repo</p>
      </div>
      <div className={styles.social}>
        <div>
          <a
            href="https://www.linkedin.com/in/ziya-caylan/"
            className={styles.btnSocial}
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/ziyacaylan/Frontend-Dersleri/tree/main/React-Dersleri/Redux/counter-app"
            className={styles.btnSocial}
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 Ziya ÇAYLAN</p>
      </div>
    </div>
  );
}

export default Footer;
