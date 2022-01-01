import Image from "next/image";
import React from "react";
import styles from "./GridBox.module.css";

const GridBox = ({ src, link, size, name, type }) => {
  return (
    <div className={`${styles.gridbox}`}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={src} alt=" " layout="fill" />
      </div>
      <div className={styles.texts}>
        <div className={styles.name}>{name}</div>
        <div className={styles.type}>{type}</div>
      </div>
    </div>
  );
};

export default GridBox;
