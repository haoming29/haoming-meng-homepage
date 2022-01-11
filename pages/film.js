import React from "react";
import IntroSection from "../components/common/IntroSection";
import FilmProject from "../components/Film/FilmProject";
import MajorLayout from "../components/layouts/MajorLayout";
import HeadingImage from "../public/images/3d-flame-camera-polaroid-3.png";
import RhinocerosInLove from "../public/images/RhinocerosInLove.png";
import styles from "./film.module.css";

const Coding = () => {
  const projects = [
    {
      name: "Rhinoceros In Love",
      type: "Online Drama",
      coverSrc: RhinocerosInLove,
      coverAlt: "Rhinoceros In Love",
      date: "May 2021",
      roles: ["Director", "Postproduction"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    },
    {
      name: "Rhinoceros In Love",
      type: "Online Drama",
      coverSrc: "",
      coverAlt: "",
      date: "May 2021",
      roles: ["Director", "Postproduction"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    },
    {
      name: "Rhinoceros In Love",
      type: "Online Drama",
      coverSrc: "",
      coverAlt: "",
      date: "May 2021",
      roles: ["Director", "Postproduction"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    },
    {
      name: "Rhinoceros In Love",
      type: "Online Drama",
      coverSrc: "",
      coverAlt: "",
      date: "May 2021",
      roles: ["Director", "Postproduction"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    },
    {
      name: "Rhinoceros In Love",
      type: "Online Drama",
      coverSrc: "",
      coverAlt: "",
      date: "May 2021",
      roles: ["Director", "Postproduction"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    },
  ];
  return (
    <MajorLayout>
      <style jsx global>{`
        body {
          background: #1f1f23;
          color: #f5f9ff;
        }
      `}</style>
      <div className="container">
        <IntroSection
          dark={true}
          heading={"FILM"}
          imageSrc={HeadingImage}
          imageHeight={418}
          imageWidth={423}
          imageAlt={"a man sits and holds a laptop"}
        >
          Coding and programming has become part of my daily life, and through
          building multiple programming project, I am deeply convinced that
          lines of code can actually make changes to daily life of human beings.
          Therefore, I want to share projects I’ve done with you and hope that
          they are inspiring.
        </IntroSection>
        <div className={styles.featuredFilm}>
          <FilmProject
            top={true}
            name={"Rhinoceros In Love"}
            type={"Online Drama"}
            coverSrc={RhinocerosInLove}
            coverAlt={"Rhinoceros In Love"}
            date={"May 2021"}
            roles={["Director", "Postproduction"]}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque."
            }
          />
        </div>
        <div className={styles.filmProjects}>
          {projects.map((item) => (
            <FilmProject
              key={item.name}
              name={item.name}
              type={item.type}
              coverSrc={item.coverSrc}
              coverAlt={item.coverAlt}
              date={item.date}
              roles={item.roles}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </MajorLayout>
  );
};

export default Coding;
