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

import collegelistdetail1 from "../public/images/featured-image-1.png";
import collegelistdetail2 from "../public/images/featured-image-2.png";

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
    link: "https://collegelist.cc/",
    type: "Web App",
    date: "Mar. 2021 - Oct. 2021",
    role: "Personal Project",
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
    hasDetailImage: true,
    detailImages: [collegelistdetail1, collegelistdetail2],
    features: [
      {
        name: "map",
        intro:
          "Display all higher education institutions in the U.S. on an interactive map. User can zoom in and out to browse directly on the map, or use the simple search and filter function to find their prospective school to see its geographic location.",
        image: "",
      },
      {
        name: "database",
        intro:
          "Gather, clean, and display over 6000 institutions detailed information, including but not limited to admission rate, student composition, standard test scores. Raw data is from official sources and are designed to be readable and easy-to-interpret by general users.",
        image: "",
      },
      {
        name: "search",
        intro:
          "User can search by institution name to find the school in our database, or the user can use the provided filters to eliminate their results.",
        image: "",
      },
      {
        name: "college list",
        intro:
          "After browsing over the school information, users can add schools to their list and make a school list for themselves, with customized ranking, ordering, and tagging. Users can then add their comment and notes on each school and edit the list in their personal dashboard.",
        image: "",
      },
    ],
    systemArchitecture: {
      image: "",
      description: `Built front-end with Vue.js, using Element UI, Axios, and Vue i18n. \nProvided Restful API through Django, with Pandas and NumPy to generate customized college list. \nDeployed project with Docker and GitHub Actions to achieve continuous development and integration.`,
      alt: "College List System Architecture",
    },
  },
  {
    name: "Activity Go",
    id: "activity-go",
    link: "https://activitygo.mingx.tech/",
    type: "Web App",
    date: "Sep.2021 – Dec. 2021",
    role: "Project Manager, Full-stack Developer",
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
    hasDetailImage: true,
    detailImages: [collegelistdetail1, collegelistdetail2],
    features: [
      {
        name: "OAuth",
        intro:
          "Connect user to our service via Epic’s MyChart, where patient can easily authenticate and share their health information with us using a single click.",
        image: "",
      },
      {
        name: "Activities",
        intro:
          "Local activities are imported to our database and will recommend to user by their geographic location. In the later phase, recommendation will based on user’s favors and their health conditions via machine learning.",
        image: "",
      },
      {
        name: "Records",
        intro:
          "User can save the recommended activities for later reference. They may also start/finish the activities to update the status of their saved activities.",
        image: "",
      },
      {
        name: "Rewards",
        intro:
          "When finished each activities, rewards points are granted to the user, which can be redeemed for git cards as incentive to help user keep track of their goals.",
        image: "",
      },
    ],
    systemArchitecture: {
      image: "",
      description: `Built front-end with Vue.js, using Element UI, Axios, and Vue i18n. \nProvided Restful API through Django, with Pandas and NumPy to generate customized college list. \nDeployed project with Docker and GitHub Actions to achieve continuous development and integration.`,
      alt: "Activity Go System Architecture",
    },
  },
  {
    name: "Theatre Booking Website",
    id: "theatre-booking-website",
    link: "https://mingx.tech/",
    type: "Web App",
    date: "Sep.2019 – Mar. 2021",
    role: "Personal Project",
    logoSrc: sayingLogo,
    thumbnailSrc: sayingThumbnail,
    thumbnailAlt: "Theatre Booking Website",
    description:
      "A ticket booking website for a theatre club with over 500 patrons per show.",
    techStack: ["node", "express", "bootstrap", "mongodb", "linux", "nginx"],
    hasDetailImage: false,
    features: [
      {
        name: "Seats",
        intro:
          "With jQuery Seat Charts, patrons can select seats by interacting with a seat map. Multiple rules are added to avoid unexpected user behavior such as maximum seats, ect.",
        image: "",
      },
      {
        name: "form",
        intro:
          "After the selection, patron is asked to fill out their personal information",
        image: "",
      },
      {
        name: "CrossCheck",
        intro:
          "When user select the seat, the seat will be locked so that other user have no access to it, and the seat will be freed and releases after 10minutes if the patron doesn’t proceed to the confirmation.",
        image: "",
      },
    ],
    systemArchitecture: {
      image: "",
      description: ``,
      alt: "",
    },
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
