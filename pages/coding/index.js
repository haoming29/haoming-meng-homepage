import React from "react";
import Head from "next/head";
import IntroSection from "../../components/common/IntroSection";
import MajorLayout from "../../components/layouts/MajorLayout";
import ProjectSection from "../../components/Coding/ProjectSection";
import HeadingImage from "../../public/images/business-3d-new-flies-with-laptop-man-1.png";

import { title } from "../../utils";
import { codingIntro, codingProjects } from "../../config/cms";

const Coding = () => {
  return (
    <MajorLayout>
      <Head>
        <title>{`${title("Coding")}`}</title>
      </Head>
      <div className="container">
        <IntroSection
          heading={"CODING"}
          imageSrc={HeadingImage}
          imageHeight={455}
          imageWidth={364}
          imageAlt={"a man sits and holds a laptop"}
        >
          {codingIntro}
        </IntroSection>
        <div>
          {codingProjects.map((item, index) => (
            <ProjectSection
              key={index}
              id={item.id}
              name={item.name}
              type={item.type}
              date={item.date}
              description={item.description}
              thumbnailSrc={item.thumbnailSrc}
              thumbnailAlt={item.thumbnailAlt}
              logoSrc={item.logoSrc}
              techStack={item.techStack}
            />
          ))}
        </div>
      </div>
    </MajorLayout>
  );
};

export default Coding;
