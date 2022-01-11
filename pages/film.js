import React from "react";
import Head from "next/head";
import IntroSection from "../components/common/IntroSection";
import FilmProject from "../components/Film/FilmProject";
import MajorLayout from "../components/layouts/MajorLayout";
import HeadingImage from "../public/images/3d-flame-camera-polaroid-3.png";
import { title } from "../utils";
import styles from "./film.module.css";
import { featuredFilm, filmIntroduction, filmProjects } from "../config/cms";

const Coding = () => {
  return (
    <MajorLayout>
      <Head>
        <title>{`${title("Film")}`}</title>
      </Head>
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
          {filmIntroduction}
        </IntroSection>
        <div className={styles.featuredFilm}>
          <FilmProject
            top={true}
            key={featuredFilm.name}
            name={featuredFilm.name}
            type={featuredFilm.type}
            coverSrc={featuredFilm.coverSrc}
            coverAlt={featuredFilm.coverAlt}
            date={featuredFilm.date}
            roles={featuredFilm.roles}
            description={featuredFilm.description}
          />
        </div>
        <div className={styles.filmProjects}>
          {filmProjects.map((item) => (
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
