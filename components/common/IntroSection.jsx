import React from "react";
import Button from "./Button";
import Image from "next/image";
import styles from "./IntroSection.module.css";

const IntroSection = ({
  heading,
  subheading,
  buttonText,
  buttonURL,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  children,
}) => {
  return (
    <section className={`${styles.introSection}`}>
      <div className={styles.introSectionTexts}>
        <text className={"page-subheading"}>{subheading}</text>
        <div className="page-heading">{heading}</div>
        <div className="page-description">{children}</div>
        {buttonText && (
          <div className={styles.buttonContainer}>
            <Button>{buttonText}</Button>
          </div>
        )}
      </div>
      {imageSrc && (
        <div className={styles.introSectionHeadingImageContainer}>
          <Image
            className={styles.introSectionHeadingImage}
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      )}
    </section>
  );
};

export default IntroSection;
