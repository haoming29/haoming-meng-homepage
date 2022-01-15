import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "./GridBox.module.css";

const GridBox = ({ src, link, name, type }) => {
  const router = useRouter();
  return (
    <div className={`${styles.gridbox}`} onClick={() => router.push(link)}>
      <div className={styles.imageContainer}>
        {src && (
          <Image
            className={styles.image}
            src={src}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className={styles.texts}>
        <div className={styles.name}>{name}</div>
        <div className={styles.type}>{type}</div>
      </div>
    </div>
  );
};

export default GridBox;
