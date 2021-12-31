import React from "react";
import Image from "next/image";
import { navbar } from "../config";
import styles from "./NavBar.module.css";
import logo from "../public/portfolio-website-logo.png";

const NavBar = () => {
  return (
    <div className={`${styles.navbar} container`}>
      <div className={styles.navbarImageContainer}>
        <Image src={logo} alt="logo" className={styles.navbarImage} />
      </div>
      <div className={styles.navbarLinks}>
        {navbar.map((item) => (
          <div key={item.path} className={`${styles.navbarLink} link`}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
