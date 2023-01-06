import React from "react";
import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <section className={`${styles.heading}`}>
      <div className={`container ${styles.headingContainer}`}>
        <div className={styles.headingName}>Haoming Meng</div>
        <div className={styles.headingPosition}>
          Software Developer, Film Maker, Stage Hand 
        </div>
        <div
          className={`${styles.headingMainHeadline} ${styles.headingMainHeadlineHey}`}
        >
          Hey there!{" "}
        </div>
        <div className={styles.headingMainHeadline}>
          I am a Computer Science & Film major student at University of
          Wisconsin Madison.
        </div>
      </div>
    </section>
  );
};

export default Heading;
