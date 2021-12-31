import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../config";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMediaContainer}>
        {socialMedia.map((item) => {
          return (
            <FontAwesomeIcon
              key={item.name}
              className={`${styles.socialMediaIcon} link`}
              icon={["fab", item.icon]}
            />
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
