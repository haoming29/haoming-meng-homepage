import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ href, external, icon, onClick, children }) => {
  const onClickHelper = (event) => {
    if (href) {
      if (external) {
        window.open(href);
      } else {
        window.location.href(href);
      }
    } else {
      onClick && onClick(event);
    }
  };

  const externalIcon = (
    <FontAwesomeIcon
      className={styles.icon}
      icon={["fas", "external-link-alt"]}
    />
  );
  return (
    <button
      className={styles.customButton}
      onClick={(event) => onClickHelper(event)}
    >
      {external && externalIcon}
      {icon && <i className={styles.icon}>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
