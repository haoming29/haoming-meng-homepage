import React from "react";
import IntroSection from "../components/common/IntroSection";
import MajorLayout from "../components/layouts/MajorLayout";
import ProjectSection from "../components/Coding/ProjectSection";
import HeadingImage from "../public/images/business-3d-new-flies-with-laptop-man-1.png";
import collegelistLogo from "../public/images/logo-for-favicon.png";
import collegelistThumbnail from "../public/images/collegelist-thumbnail.png";
import activityGoLogo from "../public/images/logo-dark.png";
import activityGoThumbnail from "../public/images/activitygo-thumbnail.png";
import sayingLogo from "../public/images/sayingLogo.jpeg";
import sayingThumbnail from "../public/images/theatrebooking-thumbnail.png";

const Coding = () => {
  const projects = [
    {
      name: "College List",
      type: "Web App",
      date: "Mar. 2021 - Oct. 2021",
      thumbnailSrc: collegelistLogo,
      imageSrc: collegelistThumbnail,
      imageAlt: "College List",
      description:
        "Provide university search, filter, college list making, application tracking capabilities to prospective high school students and their parents, including data of over 6000 universities in the U.S.",
      techStack: [
        "django",
        "vue",
        "python",
        "pandas",
        "numpy",
        "axios",
        "docker",
        "github actions",
      ],
    },
    {
      name: "Activity Go",
      type: "Web App",
      date: "Sep.2021 – Dec. 2021",
      thumbnailSrc: activityGoLogo,
      imageSrc: activityGoThumbnail,
      imageAlt: "Activity Go",
      description:
        "Activity Go helps users achieve their fitness goals by recommending activities based on their personal interests and health conditions and awarding them gift cards for completing activities.",
      techStack: [
        "react",
        "figma",
        "mysql",
        "flask",
        "aws",
        "scrum",
        "docker",
        "github actions",
      ],
    },
    {
      name: "Theatre Booking Website",
      type: "Web App",
      date: "Sep.2019 – Mar. 2021",
      thumbnailSrc: sayingLogo,
      imageSrc: sayingThumbnail,
      imageAlt: "Theatre Booking Website",
      description:
        "A ticket booking website for a theatre club with over 500 patrons per show.",
      techStack: ["node", "express", "bootstrap", "mongodb", "linux", "nginx"],
    },
  ];
  return (
    <MajorLayout>
      <div className="container">
        <IntroSection
          heading={"CODING"}
          imageSrc={HeadingImage}
          imageHeight={455}
          imageWidth={364}
          imageAlt={"a man sits and holds a laptop"}
        >
          Coding and programming has become part of my daily life, and through
          building multiple programming project, I am deeply convinced that
          lines of code can actually make changes to daily life of human beings.
          Therefore, I want to share projects I’ve done with you and hope that
          they are inspiring.
        </IntroSection>
        <div>
          {projects.map((item, index) => (
            <ProjectSection
              key={index}
              name={item.name}
              type={item.type}
              date={item.date}
              description={item.description}
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
              thumbnailSrc={item.thumbnailSrc}
              techStack={item.techStack}
            />
          ))}
        </div>
      </div>
    </MajorLayout>
  );
};

export default Coding;
