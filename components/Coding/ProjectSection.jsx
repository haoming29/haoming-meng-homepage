import React from "react";
import Image from "next/image";
import TechStackIcon from "../common/TechStackIcon";
import styles from "./ProjectSection.module.css";

const ProjectSection = ({
  name,
  type,
  date,
  thumbnailSrc,
  imageSrc,
  imageAlt,
  description,
  techStack,
}) => {
  return (
    <div className={styles.projectSection}>
      <div className={styles.texts}>
        <div className={styles.heading}>
          <div className={styles.headingThumbnail}>
            {thumbnailSrc && (
              <Image
                src={thumbnailSrc}
                alt="Project thumbnail"
                height={35}
                width={35}
                objectFit={"contain"}
              ></Image>
            )}
          </div>
          <div className={styles.headingTexts}>
            <div className={styles.name}>{name}</div>
            <div>
              <span className={styles.type}>{type}</span>
              <span className={styles.date}>{date}</span>
            </div>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={`${styles.techStack}`}>
          {techStack.map((item, index) => (
            <TechStackIcon key={index} icon={item} />
          ))}
        </div>
      </div>
      <div className={styles.image}>
        {imageSrc && <Image src={imageSrc} alt={imageAlt}></Image>}
      </div>
    </div>
  );
};

export default ProjectSection;
