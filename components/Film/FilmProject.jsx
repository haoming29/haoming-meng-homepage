import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FilmProject.module.css";

const FilmProject = ({
  top,
  name,
  type,
  coverSrc,
  coverAlt,
  date,
  roles,
  description,
}) => {
  return (
    <div className={`${styles.projectSection} ${top && styles.topProject}`}>
      <div className={styles.player}>
        <div className={styles.texts}>
          <div className={`${styles.type} ${top && styles.topType}`}>
            {type}
          </div>
          <div className={`${styles.name} ${top && styles.topName}`}>
            {name}
          </div>
          <FontAwesomeIcon
            className={`${styles.icon} ${top && styles.topIcon}`}
            icon={["far", "play-circle"]}
          />
        </div>
        <div
          className={`${styles.imageContainer} ${
            coverSrc && styles.imageContainerWI
          }`}
        >
          {coverSrc && (
            <Image
              className={styles.image}
              src={coverSrc}
              alt={coverAlt}
              objectFit="contain"
            ></Image>
          )}
        </div>
      </div>
      <div className={styles.descriptions}>
        <div className={styles.dateRoles}>
          <div className={styles.date}>{date}</div>
          <div className={styles.roles}>
            {roles.map((item) => (
              <span className={styles.role} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        {top && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
};

export default FilmProject;
