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
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.name}
              className={`${styles.socialMediaIconWrapper} link`}
            >
              <FontAwesomeIcon
                className={`${styles.socialMediaIcon}`}
                icon={["fab", item.icon]}
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
