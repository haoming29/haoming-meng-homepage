import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EFlogo from "../public/images/EF_Education_First_logo.jpeg";
import YBlogo from "../public/images/yiban-logo.jpeg";

import collegelistLogo from "../public/images/logo-for-favicon.png";
import collegelistThumbnail from "../public/images/collegelist-thumbnail.png";
import activityGoLogo from "../public/images/logo-dark.png";
import activityGoThumbnail from "../public/images/activitygo-thumbnail.png";
import sayingLogo from "../public/images/sayingLogo.jpeg";
import sayingThumbnail from "../public/images/theatrebooking-thumbnail.png";

import RhinocerosInLove from "../public/images/RhinocerosInLove.png";

export const aboutIntro = `I’m a junior student at University of Wisconsin - Madison,
studying Computer Science and Communication Arts, film track and
also a software developer with emphasize on frontend. I expect to
graduate in summer 2023 and am actively seeking for summer
internships.`;

export const experience = [
  {
    name: "EF Education First",
    title: "Frontend intern",
    companyLogo: EFlogo,
    companyLogoAlt: "Education First logo",
    date: "Jun. 2021 - Aug. 2021",
    location: "Shanghai, China",
    description: `Refactored the company’s virtual classroom operation website
    using Typescript, React, and Node.js\n
    Implemented Azure Active Directory to the project, providing SSO
    ability via OAuth protocol\n
    Built Docker image and deploy project on Kubernetes with Helm
    chart and automated Jenkins workflow\n
    Practiced uniformed coding style with code review and by
    development tools such as ESlint, husky, prettier`,
  },
  {
    name: "Shanghai Yiban Enterprise Developement Co., Ltd.",
    title: "Frontend intern",
    companyLogo: YBlogo,
    companyLogoAlt: "Education First logo",
    date: "Mar. 2021 - Jun. 2021",
    location: "Shanghai, China",
    description: `Involved the front-end development for national-wide educational
    management service with 100,000 DAU\n
    Collected, reported, and fixed bugs of the company's Vue.js web
    apps\n
    Tested the UI components of company’s UI framework using Jest
    and Vue Test Utils`,
  },
];

export const skills = [
  "Python",
  "Java",
  "Javascript",
  "Typescript",
  "Django",
  "Node.js",
  "React",
  "Vue",
  "Flask",
  "Webpack",
  "Babel",
  "Pandas",
  "Numpy",
  "MySQL",
  "Git",
  "Docker",
  "CI/CD",
  "Scrum",
];

export const funFacts = [
  "I’m 6’ 3’’ tall.",
  "I was a director of a theater play during pandemic.",
  "I don’t play basketball. lol",
];

export const codingIntro = `Coding and programming has become part of my daily life, and through
building multiple programming project, I am deeply convinced that
lines of code can actually make changes to daily life of human beings.
Therefore, I want to share projects I’ve done with you and hope that
they are inspiring.`;

export const codingProjects = [
  {
    name: "College List",
    id: "college-list",
    link: "",
    type: "Web App",
    date: "Mar. 2021 - Oct. 2021",
    logoSrc: collegelistLogo,
    thumbnailSrc: collegelistThumbnail,
    thumbnailAlt: "College List",
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
    features: [
      {
        name: "",
        intro: "",
        image: "",
      },
    ],
    systemArchitecture: [
      {
        image: "",
        description: "",
        alt: "",
      },
    ],
  },
  {
    name: "Activity Go",
    id: "activity-go",
    link: "",
    type: "Web App",
    date: "Sep.2021 – Dec. 2021",
    logoSrc: activityGoLogo,
    thumbnailSrc: activityGoThumbnail,
    thumbnailAlt: "Activity Go",
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
    id: "theatre-booking-website",
    link: "",
    type: "Web App",
    date: "Sep.2019 – Mar. 2021",
    logoSrc: sayingLogo,
    thumbnailSrc: sayingThumbnail,
    thumbnailAlt: "Theatre Booking Website",
    description:
      "A ticket booking website for a theatre club with over 500 patrons per show.",
    techStack: ["node", "express", "bootstrap", "mongodb", "linux", "nginx"],
  },
];

export const filmIntro = `Coding and programming has become part of my daily life, and through
building multiple programming project, I am deeply convinced that
lines of code can actually make changes to daily life of human beings.
Therefore, I want to share projects I’ve done with you and hope that
they are inspiring.`;

export const featuredFilm = {
  name: "Rhinoceros In Love",
  type: "Online Drama",
  coverSrc: RhinocerosInLove,
  coverAlt: "Rhinoceros In Love",
  date: "May 2021",
  roles: ["Director", "Postproduction"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
  youtubeURL: "https://www.youtube.com/watch?v=JSwKosGOIFc",
};

export const filmProjects = [
  {
    name: "She Was Smiling #MentalHealth PSA",
    type: "Short Film",
    coverSrc: "",
    coverAlt: "",
    date: "Oct 2020",
    roles: [
      "Director",
      "Script",
      "Producer",
      "Cinematographer",
      "Postproduction",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    youtubeURL: "https://www.youtube.com/watch?v=wIkZf37JIXM",
  },
  // {
  //   name: "Final Prize",
  //   type: "Short Film",
  //   coverSrc: "",
  //   coverAlt: "",
  //   date: "Dec 2020",
  //   roles: ["Director", "Producer", "Cinematographer", "Postproduction"],
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
  //   youtubeURL: "",
  // },
  {
    name: "Memory Blocked",
    type: "Short Film",
    coverSrc: "",
    coverAlt: "",
    date: "June 2019",
    roles: ["Director", "Producer", "Cinematographer", "Postproduction"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dignissim dui mattis metus. Sodales mollis consequat, integer eu. Fringilla elementum morbi est nullam ut. Adipiscing diam, est ornare bibendum leo, varius. Nunc nunc nisl vel tempus non ipsum. Sed vitae malesuada fermentum, aliquam tincidunt fermentum. Nunc habitasse nulla id lorem purus quisque.",
    youtubeURL: "https://youtu.be/m_8cNjdE30o",
  },
];
