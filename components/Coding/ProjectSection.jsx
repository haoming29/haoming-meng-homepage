import React from "react";
import Image from "next/image";
import TechStackIcon from "../common/TechStackIcon";
import styles from "./ProjectSection.module.scss";
import Link from "next/link";

const ProjectSection = ({
  id,
  name,
  type,
  date,
  logoSrc,
  thumbnailSrc,
  thumbnailAlt,
  description,
  techStack,
}) => {
  return (
    <Link href={`/coding/${id}`} passHref>
      <div className={styles.projectSection}>
        <div className={styles.texts}>
          <div className={styles.heading}>
            <div className={styles.headingLogo}>
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt="Project logo"
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
          {thumbnailSrc && (
            <Image src={thumbnailSrc} alt={thumbnailAlt}></Image>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectSection;
