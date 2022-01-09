import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./TechStackIcon.module.css";

const TechStackIcon = ({ icon }) => {
  const iconMapping = {
    git: "git-alt",
    figma: "figma",
    docker: "docker",
    vue: "vuejs",
    react: "react",
    node: "node",
    java: "java",
    javascript: "js-square",
    python: "python",
  };

  if (Object.keys(iconMapping).includes(icon)) {
    return (
      <div key={icon} className={styles.iconText}>
        <FontAwesomeIcon
          className={`${styles.icon}`}
          icon={["fab", iconMapping[icon]]}
        />
        {icon}
      </div>
    );
  } else {
    return (
      <div key={icon} className={`${styles.iconText}`}>
        {icon}
      </div>
    );
  }
};

export default TechStackIcon;
