import React from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FilmProject.module.scss";
import classNames from "classnames";

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
  specUrl,
}) => {
  const isYoutubeURL =
    youtubeURL &&
    !youtubeURL.startsWith("https://www.youtube.com/live/") &&
    (youtubeURL.startsWith("https://www.youtube.com") ||
      youtubeURL.startsWith("https://youtu.be"));

  const handleCoverClick = (url) => {
    if (!url) {
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.referrerPolicy = "noopener,noreferrer";
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
      <div
        className={classNames(styles.player, {
          [styles.playerTop]: top,
        })}
      >
        {isYoutubeURL ? (
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
          <div
            className={`${styles.texts} ${top && styles.topTexts}`}
            onClick={() => {
              handleCoverClick(youtubeURL);
            }}
          >
            <div className={`${styles.type} ${top && styles.topType}`}>
              {type}
            </div>
            <div className={`${styles.name} ${top && styles.topName}`}>
              {name}
            </div>
            {youtubeURL && (
              <FontAwesomeIcon
                className={`${styles.icon} ${top && styles.topIcon}`}
                icon={["far", "play-circle"]}
              />
            )}
            <div className={`${styles.imageContainer}`}>
              <Image
                className={`${styles.image}`}
                src={coverSrc}
                alt={coverAlt}
              />
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
          {specUrl && (
            <a
              className={styles.techSpec}
              href={specUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                className={styles.extIcon}
                icon={["fas", "external-link-alt"]}
              />
              Tech Spec
            </a>
          )}
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
