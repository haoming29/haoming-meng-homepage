import React from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FilmProject.module.css";

const FilmProject = ({
  top,
  name,
  type,
  coverSrc,
  coverAlt,
  youtubeURL,
  date,
  roles,
  description,
}) => {
  const playIcon = (
    <div className={`${styles.texts} ${top && styles.topTexts}`}>
      <div className={`${styles.type} ${top && styles.topType}`}>{type}</div>
      <div className={`${styles.name} ${top && styles.topName}`}>{name}</div>
      <FontAwesomeIcon
        className={`${styles.icon} ${top && styles.topIcon}`}
        icon={["far", "play-circle"]}
      />
    </div>
  );
  return (
    <div className={`${styles.projectSection} ${top && styles.topProject}`}>
      <div className={styles.player}>
        {youtubeURL ? (
          <ReactPlayer
            url={youtubeURL}
            height={"100%"}
            width={"100%"}
            light={true}
            playIcon={playIcon}
            controls={true}
            config={{
              youtube: {
                playerVars: { modestbranding: 1, rel: 0 },
              },
            }}
          />
        ) : (
          <div className={`${styles.texts} ${top && styles.topTexts}`}>
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
            <div className={`${styles.imageContainer}`}>
              <Image src={coverSrc} alt={coverAlt}></Image>
            </div>
          </div>
        )}
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
        <div
          className={`${styles.description} ${top && styles.topDescription}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default FilmProject;
