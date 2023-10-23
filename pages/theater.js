import React from "react";
import Head from "next/head";
import IntroSection from "../components/common/IntroSection";
import FilmProject from "../components/Film/FilmProject";
import MajorLayout from "../components/layouts/MajorLayout";
import HeadingImage from "../public/images/3d-construction-construction-abstract-glass.png";
import { title } from "../utils";
import styles from "./film.module.scss";
import {
  featuredTheaterWork,
  theaterIntro,
  theaterProjects,
} from "../config/cms";

const Theater = () => {
  return (
    <MajorLayout>
      <Head>
        <title>{`${title("Theater")}`}</title>
      </Head>
      <style jsx global>{`
        body {
          background: #261515;
          color: #f5f9ff;
        }
      `}</style>
      <div className="container">
        <IntroSection
          dark={true}
          heading={"THEATER"}
          imageSrc={HeadingImage}
          imageHeight={400}
          imageWidth={392}
          imageAlt={"3d-construction-construction-abstract-glass"}
        >
          {theaterIntro}
        </IntroSection>
        <div className={styles.featuredFilm}>
          <FilmProject
            top={true}
            key={featuredTheaterWork.name}
            name={featuredTheaterWork.name}
            type={featuredTheaterWork.type}
            coverSrc={featuredTheaterWork.coverSrc}
            coverAlt={featuredTheaterWork.coverAlt}
            date={featuredTheaterWork.date}
            roles={featuredTheaterWork.roles}
            description={featuredTheaterWork.description}
            youtubeURL={featuredTheaterWork.youtubeURL}
          />
        </div>
        <div className={styles.filmProjects}>
          {theaterProjects.map((item) => (
            <FilmProject
              key={item.name}
              name={item.name}
              type={item.type}
              coverSrc={item.coverSrc}
              coverAlt={item.coverAlt}
              date={item.date}
              roles={item.roles}
              description={item.description}
              youtubeURL={item.youtubeURL}
            />
          ))}
        </div>
      </div>
    </MajorLayout>
  );
};

export default Theater;
