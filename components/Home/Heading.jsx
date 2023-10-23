import React from "react";
import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <section className={`${styles.heading}`}>
      <div className={`container ${styles.headingContainer}`}>
        <div className={styles.headingName}>Haoming Meng</div>
        <div className={styles.headingPosition}>
          Software Engineer, Film Maker, Live Audio Engineer
        </div>
        <div
          className={`${styles.headingMainHeadline} ${styles.headingMainHeadlineHey}`}
        >
          Hey there!{" "}
        </div>
        <div className={styles.headingMainHeadline}>
          I am a Research Software Engineer at the Morgridge Institute for
          Research.
        </div>
      </div>
    </section>
  );
};

export default Heading;
