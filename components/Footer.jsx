import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMedia } from "../config";

const Footer = () => {
  const dateTimeStamp = new Date("2023-01-07");
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
      <div
        className={styles.lastBuild}
      >{`Last build on: ${dateTimeStamp}`}</div>
    </footer>
  );
};

export default Footer;
