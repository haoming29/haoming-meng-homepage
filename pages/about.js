import React from "react";
import MajorLayout from "../components/layouts/MajorLayout";
import styles from "./about.module.css";
import sectionImage from "../public/images/business-3d-318.png";
import Image from "next/image";
import Button from "../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EFlogo from "../public/images/EF_Education_First_logo.jpeg";
import YBlogo from "../public/images/yiban-logo.jpeg";

const about = () => {
  const skills = [
    "Python",
    "Java",
    "Javascript",
    "Typescript",
    "Django",
    "Node.js",
    "React",
    "Vue",
    "Flask",
    "Webpack",
    "Babel",
    "Pandas",
    "Numpy",
    "MySQL",
    "Git",
    "Docker",
    "CI/CD",
    "Scrum",
  ];

  const funFacts = [
    "I’m 6’ 3’’ tall.",
    "I was a director of a theater play during pandemic.",
    "I don’t play basketball. lol",
  ];

  const socialMedia = [
    {
      name: "LinkedIn",
      icon: (
        <FontAwesomeIcon
          className={`${styles.socialmediaIcon}`}
          icon={["fab", "linkedin"]}
        />
      ),
      link: "https://www.linkedin.com/in/haomingmeng/",
    },
    {
      name: "YouTube",
      icon: (
        <FontAwesomeIcon
          className={`${styles.socialmediaIcon}`}
          icon={["fab", "youtube"]}
        />
      ),
    },
    {
      name: "GitHub",
      icon: (
        <FontAwesomeIcon
          className={`${styles.socialmediaIcon}`}
          icon={["fab", "github"]}
        />
      ),
      link: "https://github.com/Techming",
    },
  ];
  return (
    <MajorLayout>
      <div className="container">
        <section className={`${styles.introSection}`}>
          <div className={styles.introSectionTexts}>
            <text className={"page-subheading"}>Hey There!</text>
            <div className="page-heading">I’m Haoming Meng</div>
            <div className="page-description">
              I’m a junior student at University of Wisconsin - Madison,
              studying Computer Science and Communication Arts, film track and
              also a software developer with emphasize on frontend. I expect to
              graduate in summer 2023 and am actively seeking for summer
              internships.
            </div>
            <div className={styles.buttonContainer}>
              <Button>Resume</Button>
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
          <div className={styles.experienceInstance}>
            <div className={styles.experienceName}>
              <div className={styles.expericenLogoContainer}>
                <Image
                  src={EFlogo}
                  alt="Education First logo"
                  className={styles.expericenLogo}
                />
              </div>
              EF Education First
            </div>
            <div className={styles.expericenDetail}>
              <div className={styles.experienceAttributes}>
                <div className={styles.experienceTitle}>Frontend intern</div>
                <div className={styles.experienceDate}>
                  Jun. 2021 - Aug. 2021
                </div>
                <div className={styles.experiecnePlace}>Shanghai, China</div>
              </div>
              <div className={styles.expericenDescription}>
                Refactored the company’s virtual classroom operation website
                using Typescript, React, and Node.js <br />
                Implemented Azure Active Directory to the project, providing SSO
                ability via OAuth protocol <br />
                Built Docker image and deploy project on Kubernetes with Helm
                chart and automated Jenkins workflow <br />
                Practiced uniformed coding style with code review and by
                development tools such as ESlint, husky, prettier
              </div>
            </div>
          </div>
          <div className={styles.experienceInstance}>
            <div className={styles.experienceName}>
              <div className={styles.expericenLogoContainer}>
                <Image
                  src={YBlogo}
                  alt="Yiban logo"
                  className={styles.expericenLogo}
                />
              </div>
              Shanghai Yiban Enterprise Developement Co., Ltd.
            </div>
            <div className={styles.expericenDetail}>
              <div className={styles.experienceAttributes}>
                <div className={styles.experienceTitle}>Frontend intern</div>
                <div className={styles.experienceDate}>
                  Mar. 2021 - Jun. 2021
                </div>
                <div className={styles.experiecnePlace}>Shanghai, China</div>
              </div>
              <div className={styles.expericenDescription}>
                Involved the front-end development for national-wide educational
                management service with 100,000 DAU
                <br />
                Collected, reported, and fixed bugs of the company's Vue.js web
                apps
                <br />
                Tested the UI components of company’s UI framework using Jest
                and Vue Test Utils
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Technical Skills</div>
          <div className={styles.skillsContent}>
            <div className={styles.skillsIntro}>
              With two internships and multiple full-stack project experiences,
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
        <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Fun Facts</div>
          <div className={styles.funfactsContainer}>
            {funFacts.map((item, index) => (
              <div key={index} className={styles.funfact}>
                <div className={styles.funfactName}>{`#${index}`}</div>
                <div className={styles.funfactContent}>{item}</div>
              </div>
            ))}
          </div>
        </section>
        <section className={`${styles.section}`}>
          <div className={styles.sectionHeader}>Social Media</div>
          <div className={styles.socialmediaContainer}>
            {socialMedia.map((item) => (
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
