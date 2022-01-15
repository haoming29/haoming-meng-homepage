import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import styles from "./Featured.module.css";
import featuredImg1 from "../../public/images/featured-image-1.png";
import featuredImg2 from "../../public/images/featured-image-2.png";
import TechStackIcon from "../common/TechStackIcon";

const Featured = () => {
  const techStack = [
    "django",
    "vue",
    "python",
    "pandas",
    "numpy",
    "axios",
    "docker",
    "github actions",
  ];
  const router = useRouter();
  return (
    <section
      className={styles.featured}
      onClick={() => router.push("/coding/college-list")}
    >
      <div className={`container ${styles.featuredContainer}`}>
        <div className={`${styles.texts}`}>
          <div className={`${styles.decorationTitle}`}>Featured</div>
          <div className={`${styles.Name}`}>College List</div>
          <div className={`${styles.attributes}`}>
            <span className={styles.attibute}>Web App</span>
            <span className={styles.attibute}>Mar. 2021 - Oct. 2021</span>
          </div>
          <div className={`${styles.description}`}>
            Provide university search, filter, college list making, application
            tracking capabilities to prospective high school students and their
            parents, including data of over 6000 universities in the U.S.
          </div>
          <div className={`${styles.techStack}`}>
            {techStack.map((item, index) => (
              <TechStackIcon key={index} icon={item} />
            ))}
          </div>
        </div>
        <div className={`${styles.imageContainer}`}>
          <div className={`${styles.image} ${styles.image1}`}>
            <Image src={featuredImg1} alt="featured project image 1 " />
          </div>
          {/* <div className={`${styles.image} ${styles.image2}`}>
            <Image src={featuredImg2} alt="featured project image 2 " />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Featured;
