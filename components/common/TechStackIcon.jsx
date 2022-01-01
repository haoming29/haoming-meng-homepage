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
      <FontAwesomeIcon
        key={icon}
        className={`${styles.icon}`}
        icon={["fab", iconMapping[icon]]}
      />
    );
  } else {
    // return <div className={`${styles.iconText}`}>{icon}</div>;
    return <div className={`${styles.iconText}`}>{icon.slice(0, 1)}</div>;
  }
};

export default TechStackIcon;
