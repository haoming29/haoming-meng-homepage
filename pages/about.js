import React from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MajorLayout from "../components/layouts/MajorLayout";
import styles from "./about.module.scss";
import sectionImage from "../public/images/business-3d-318.png";
import Image from "next/image";
import Button from "../components/common/Button";
import { title } from "../utils";

import { aboutIntro, experience, funFacts, skills } from "../config/cms";

const about = () => {
  const socialMedias = [
    {
      name: "LinkedIn",
      icon: (
        <FontAwesomeIcon
          className={styles.socialmediaIcon}
          icon={["fab", "linkedin"]}
        />
      ),
      link: "https://www.linkedin.com/in/haomingmeng/",
    },
    {
      name: "GitHub",
      icon: (
        <FontAwesomeIcon
          className={styles.socialmediaIcon}
          icon={["fab", "github"]}
        />
      ),
      link: "https://github.com/haoming29",
    },
    {
      name: "YouTube",
      icon: (
        <FontAwesomeIcon
          className={styles.socialmediaIcon}
          icon={["fab", "youtube"]}
        />
      ),
      link: "https://www.youtube.com/channel/UC1jz7jNrbqshQPBxX8_ZC_Q",
    },
  ];
  return (
    <MajorLayout>
      <Head>
        <title>{`${title("About")}`}</title>
      </Head>
      <div className="container">
        <section className={`${styles.introSection}`}>
          <div className={styles.introSectionTexts}>
            <text className={"page-subheading"}>Hey There!</text>
            <div className="page-heading">{`I’m Haoming Meng`}</div>
            <div className="page-description">{aboutIntro}</div>
            <div className={styles.buttonContainer}>
              <Button external href="https://www.linkedin.com/in/haomingmeng/">
                Resume
              </Button>
            </div>
          </div>
          <div className={styles.introSectionHeadingImageContainer}>
            <Image
              className={styles.introSectionHeadingImage}
              src={sectionImage}
              alt="a man with heart shape above him"
              width={304}
              height={392}
            />
          </div>
        </section>
        <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Experience</div>
          {experience.map((item) => (
            <div key={item.name} className={styles.experienceInstance}>
              <div className={styles.experienceLogoName}>
                <div className={styles.expericenLogoContainer}>
                  <Image
                    src={item.companyLogo}
                    alt={item.companyLogoAlt}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.experienceName}>{item.name}</div>
              </div>
              <div className={styles.expericenDetail}>
                <div className={styles.experienceAttributes}>
                  <div className={styles.experienceTitle}>{item.title}</div>
                  <div className={styles.experienceDate}>{item.date}</div>
                  <div className={styles.experiecnePlace}>{item.location}</div>
                </div>
                <div className={styles.expericenDescription}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Technical Skills</div>
          <div className={styles.skillsContent}>
            <div className={styles.skillsIntro}>
              With four internships and multiple full-stack project experiences,
              I grasped programming languages including Python, Java, and
              Javascript, packages such as Numpy, Pandas, Babel, Webpack, and
              web frameworks like React, Vue, Flask, Django.
            </div>
            <div className={styles.skillsGrid}>
              {skills.map((item, index) => (
                <div key={index} className={styles.skillsGridItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Fun Facts</div>
          <div className={styles.funfactsContainer}>
            {funFacts.map((item, index) => (
              <div key={index} className={styles.funfact}>
                <div className={styles.funfactName}>{`#${index}`}</div>
                <div className={styles.funfactContent}>{item}</div>
              </div>
            ))}
          </div>
        </section> */}
        <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Social Media</div>
          <div className={styles.socialmediaContainer}>
            {socialMedias.map((item) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.name}
                className={`${styles.socialmedia} link`}
              >
                {item.icon}
                <div className={styles.socialmediaName}>{item.name}</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </MajorLayout>
  );
};

export default about;
