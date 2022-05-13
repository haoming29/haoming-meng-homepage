import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { title } from "../../utils";
import MajorLayout from "../../components/layouts/MajorLayout";
import TechStackIcon from "../../components/common/TechStackIcon";
import { codingProjects } from "../../config/cms";
import styles from "./projectDetail.module.css";
import Button from "../../components/common/Button";
import Feature from "../../components/Coding/Feature";

const CodingDetail = ({ project }) => {
  const detailImages =
    project &&
    project.detailImages &&
    project.detailImages.map((item, index) => (
      <div key={index} className={styles.detailImageContainer}>
        <Image src={item} alt={"Detail Image"}></Image>
      </div>
    ));
  return (
    <MajorLayout>
      {project && (
        <Head>
          <title>{`${title(project.name)}`}</title>
        </Head>
      )}
      {project && (
        <div className="container">
          <section className={styles.projectOverview}>
            <div className={styles.texts}>
              <div className={styles.heading}>
                <div className={styles.headingLogoName}>
                  <div className={styles.headingLogo}>
                    {project.logoSrc && (
                      <Image
                        src={project.logoSrc}
                        alt="Project logo"
                        layout="fill"
                        objectFit="contain"
                      ></Image>
                    )}
                  </div>
                  <div className={styles.name}>{project.name}</div>
                </div>
                <div>
                  <span className={styles.info}>{project.type}</span>
                  <span className={styles.info}>{project.role}</span>
                  <span className={styles.info}>{project.date}</span>
                </div>
              </div>
              <div className={styles.description}>{project.description}</div>
              <div className={`${styles.techStack}`}>
                {project.techStack.map((item, index) => (
                  <TechStackIcon key={index} icon={item} light={true} />
                ))}
              </div>
              <div className={styles.button}>
                <Button href={project.link} external>
                  Visit
                </Button>
              </div>
            </div>
            <div
              className={
                project.hasDetailImage
                  ? styles.detailImages
                  : styles.thumbNailImage
              }
            >
              {project.hasDetailImage
                ? detailImages
                : project.thumbnailSrc && (
                    <Image
                      src={project.thumbnailSrc}
                      alt={project.thumbnailAlt}
                    ></Image>
                  )}
            </div>
          </section>
          {project.features && <Feature features={project.features} />}
          {project.systemArchitecture?.image && (
            <section className={styles.systemArchitecture}>
              <div className={styles.sectionHeading}>System Architecture</div>
              {project.systemArchitecture.image && (
                <div className={styles.systemArchitectureImage}>
                  <div className={styles.systemArchitectureImageContainer}>
                    <Image
                      src={project.systemArchitecture.image}
                      alt={project.systemArchitecture.alt}
                      objectFit="contain"
                      layout="fill"
                    ></Image>
                  </div>
                  <div className={styles.systemArchitectureImageDescription}>
                    {project.systemArchitecture.description}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      )}
    </MajorLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: codingProjects.map((item) => `/coding/${item.id}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const project = codingProjects.filter((item) => item.id === params.pid)[0];
  return {
    props: {
      project,
    },
  };
}

export default CodingDetail;
