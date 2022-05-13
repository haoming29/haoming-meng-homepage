import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Feature.module.css";

const Feature = ({ features }) => {
  const [current, setCurrent] = useState(0);
  const handleFeatureSwitch = (index) => {
    setCurrent(index);
  };

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureHeading}>Features</div>
      <div className={styles.features}>
        <div className={styles.featureList}>
          {features.map((item, index) => (
            <div
              key={item.name}
              className={`${styles.featureName} ${
                index === current && styles.featureNameCurrent
              }`}
              onClick={() => handleFeatureSwitch(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.featureContent}>
            <div className={styles.imageContainer}>
              {features[current].image && (
                <Image
                  src={features[current].image}
                  alt={features[current].name}
                  objectFit="cover"
                  layout="fill"
                  loading="eager"
                />
              )}
            </div>
            <div className={styles.description}>{features[current].intro}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
