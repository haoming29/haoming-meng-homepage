import React from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <section className={`${styles.heading}`}>
      <div className={`container ${styles.headingContainer}`}>
        <div className={styles.headingName}>Haoming Meng</div>
        <div className={styles.headingPosition}>
          Student & Software Developer & Film Maker
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
