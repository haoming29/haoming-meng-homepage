import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./TechStackIcon.module.css";

const TechStackIcon = ({ icon, light }) => {
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
      <div
        key={icon}
        className={`${styles.iconText} ${light && styles.iconTextLight}`}
      >
        <FontAwesomeIcon
          className={`${styles.icon} ${light && styles.iconLight}`}
          icon={["fab", iconMapping[icon]]}
        />
        {icon}
      </div>
    );
  } else {
    return (
      <div
        key={icon}
        className={`${styles.iconText}  ${light && styles.iconTextLight}`}
      >
        {icon}
      </div>
    );
  }
};

export default TechStackIcon;
