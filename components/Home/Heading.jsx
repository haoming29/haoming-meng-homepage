import React from "react";
import { motion } from "framer-motion";
import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <section className={`${styles.heading}`}>
      <div className={`container ${styles.headingContainer}`}>
        <motion.div
          key={"home-name"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
          className={styles.headingName}
        >
          Haoming Meng
        </motion.div>
        <motion.div
          key={"home-name-tagline"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 0.8 }}
          className={styles.headingPosition}
        >
          Software Engineer, Film Maker, Live Audio Engineer
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6, delay: 2.2 }}
          key={"home-hey"}
          className={`${styles.headingMainHeadline} ${styles.headingMainHeadlineHey}`}
        >
          Hey there!{" "}
        </motion.div>
        <motion.div
          key={"home-tagline"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.8, delay: 3.2 }}
          className={styles.headingMainHeadline}
        >
          I am a Research Software Engineer at the Morgridge Institute for
          Research.
        </motion.div>
      </div>
    </section>
  );
};

export default Heading;
