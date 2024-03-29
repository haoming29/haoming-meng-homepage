import React from "react";
import Button from "./Button";
import Image from "next/image";
import styles from "./IntroSection.module.scss";
import classNames from "classnames";

const IntroSection = ({
  heading,
  subheading,
  buttonText,
  buttonURL,
  dark,
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  children,
}) => {
  return (
    <section className={`${styles.introSection}`}>
      <div
        className={classNames(styles.introSectionTexts, {
          [styles.introSectionTextsDark]: dark,
        })}
      >
        <div className={`page-subheading ${dark && "page-dark"}`}>
          {subheading}
        </div>
        <div className={`page-heading ${dark && "page-dark"}`}>{heading}</div>
        <div className={`page-description ${dark && "page-dark"}`}>
          {children}
        </div>
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
            objectFit={"cover"}
          />
        </div>
      )}
    </section>
  );
};

export default IntroSection;
