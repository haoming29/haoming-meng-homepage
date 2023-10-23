import EFlogo from "../public/images/EF_Education_First_logo.jpeg";
import LabLogo from "../public/images/people-and-robot-lab-logo.jpeg";
import AI4AfricaLogo from "../public/images/AI-ARTWORK-CUTOUT-NEW.png";
import BevyLogo from "../public/images/bevy-logo.png";
import MorgridgeLogo from "../public/images/morgridge-logo.png";

import collegelistLogo from "../public/images/logo-for-favicon.png";
import collegelistThumbnail from "../public/images/collegelist-thumbnail.png";
import activityGoLogo from "../public/images/logo-dark.png";
import activityGoThumbnail from "../public/images/activitygo-thumbnail.png";
import sayingLogo from "../public/images/sayingLogo.jpeg";
import sayingThumbnail from "../public/images/theatrebooking-thumbnail.png";
import RhinocerosInLove from "../public/images/RhinocerosInLove.png";
import chineseBarber from "../public/images/ChineseBarber-Cover.jpg";
import me2vshe2 from "../public/images/me2-vs-he2-cover.jpeg";
import thePillowman from "../public/images/the-pillowman.jpg";
import revival from "../public/images/revival.PNG";
import anEndlessPoetry from "../public/images/an-endless-poetry.png";
import samaraJoy from "../public/images/samara-joy.jpeg";
import cssa2023 from "../public/images/cssa-2023-spring-fesival.png";

import collegelistdetail1 from "../public/images/featured-image-1.png";
import collegelistdetail2 from "../public/images/featured-image-2.png";

import clSearch from "../public/images/guide-search-filter.jpg";
import clCL from "../public/images/guide-school-note.png";
import clMap from "../public/images/guide-map.png";
import clDB from "../public/images/guide-database.png";
import clSA from "../public/images/collegelist-SA.png";

import activityDetail1 from "../public/images/activitygo-detail-1.png";
import activityDetail2 from "../public/images/activitygo-detail-2.png";
import activityOauth from "../public/images/activitygo-oauth.png";
import activityActivity from "../public/images/activitygo-activity.png";
import activityRecord from "../public/images/activitygo-record.png";
import activityRewards from "../public/images/activitygo-rewards.png";
import activityDesign from "../public/images/activitygo-SystemDesign.png";

import sayingDetail1 from "../public/images/saying-detail-1.png";
import sayingDetial2 from "../public/images/saying-detail-2.png";
import sayingSeats from "../public/images/saying-seats.png";
import sayingCrossCheck from "../public/images/saying-crosscheck.png";
import sayingForm from "../public/images/saying-form.png";

export const aboutIntro = `I’m a Research Software Engineer at the Morgridge Institute for Research. I graduated from University of Wisconsin - Madison in May 2023,
with a degree in Computer Science and Communication Arts (film track). I'm interested in full-stack development, product design, and 3D reconstruction. Let's connect!`;

export const experience = [
  {
    name: "Morgridge Institute for Research",
    title: "Research Software Engineer",
    companyLogo: MorgridgeLogo,
    companyLogoAlt: "Morgridge Institute for Research logo",
    date: "Oct. 2023 - Now",
    location: "Madison, WI",
    description: `Work at research computing team to build the Pelican Platform which makes deploying data easy and accessing this data easier via well documented APIs and client tools.`,
  },
  {
    name: "People and Robot Lab",
    title: "Undergraduate Research Assistant",
    companyLogo: LabLogo,
    companyLogoAlt: "People and Robot Lab logo",
    date: "May 2022 - Now",
    location: "Madison, WI",
    description: `Composed a web app that empowers remote collaboration of physical tasks, including real-time robot poses rendering in 3D, a live camera feed, collaborative drawing, video conferencing with Dolby.io, and RBAC with Azure Active Directory.`,
  },
  {
    name: "Bevy",
    title: "Software Developer Intern",
    companyLogo: BevyLogo,
    companyLogoAlt: "Bevy logo",
    date: "Jun. 2022 - Aug. 2022",
    location: "Remote",
    description: `Collaborated with an agile team using Django and React to build and maintain virtual event platform, updated live chat API, rebuilt “End Event” user flow, integrated Vonage event composition API for immersive event recording.`,
  },
  {
    name: "AI4Africa",
    title: "Software Development Lead",
    companyLogo: AI4AfricaLogo,
    companyLogoAlt: "AI4Africa logo",
    date: "Jan. 2022 - Aug. 2022",
    location: "Madison, WI",
    description: `Lead the development of multiple React Native apps including a social app with ML-powered features including minority language translations and a health chatbot, a ML utility app to collect text reading recordings for the NLP training dataset.`,
  },
  {
    name: "EF, Education First",
    title: "Frontend intern",
    companyLogo: EFlogo,
    companyLogoAlt: "Education First logo",
    date: "Jun. 2021 - Aug. 2021",
    location: "Shanghai, China",
    description: `Updated the tech stack for the virtual classroom support website using React, and Node.js in TypeScript, and introduced search and filtering capabilities for classrooms and attendees.`,
  },
];

export const skills = [
  "Python",
  "Java",
  "Golang",
  "Javascript",
  "Typescript",
  "C",
  "C++",
  "Django",
  "Flask",
  "Spring",
  "Node.js",
  "React",
  "Vue",
  "Next.js",
  "Webpack",
  "Babel",
  "Pandas",
  "Numpy",
  "MySQL",
  "NoSQL",
  "AWS",
  "Firebase",
  "Git",
  "Docker",
  "ELK",
  "CI/CD",
  "Scrum",
];

export const funFacts = [
  "I’m 6’ 3’’.",
  "I was a director of a theater play during the lockdown in pandemic.",
  "I don’t play basketball.",
];

export const codingIntro = `Coding and programming has become part of my daily life, and through
building multiple programming project, I am deeply convinced that
lines of code can actually make changes to daily life of human beings.
Therefore, I want to share projects I’ve done with you and hope that
they are inspiring. For more projects, please refer to my LinkedIn page.`;

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
        image: clMap,
      },
      {
        name: "database",
        intro:
          "Gather, clean, and display over 6000 institutions detailed information, including but not limited to admission rate, student composition, standard test scores. Raw data is from official sources and are designed to be readable and easy-to-interpret by general users.",
        image: clDB,
      },
      {
        name: "search",
        intro:
          "User can search by institution name to find the school in our database, or the user can use the provided filters to eliminate their results.",
        image: clSearch,
      },
      {
        name: "college list",
        intro:
          "After browsing over the school information, users can add schools to their list and make a school list for themselves, with customized ranking, ordering, and tagging. Users can then add their comment and notes on each school and edit the list in their personal dashboard.",
        image: clCL,
      },
    ],
    systemArchitecture: {
      image: clSA,
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
    detailImages: [activityDetail2, activityDetail1],
    features: [
      {
        name: "OAuth",
        intro:
          "Connect user to our service via Epic’s MyChart, where patient can easily authenticate and share their health information with us using a single click.",
        image: activityOauth,
      },
      {
        name: "Activities",
        intro:
          "Local activities are imported to our database and will recommend to user by their geographic location. In the later phase, recommendation will based on user’s favors and their health conditions via machine learning.",
        image: activityActivity,
      },
      {
        name: "Records",
        intro:
          "User can save the recommended activities for later reference. They may also start/finish the activities to update the status of their saved activities.",
        image: activityRecord,
      },
      {
        name: "Rewards",
        intro:
          "When finished each activities, rewards points are granted to the user, which can be redeemed for git cards as incentive to help user keep track of their goals.",
        image: activityRewards,
      },
    ],
    systemArchitecture: {
      image: activityDesign,
      // description: `Built front-end with React.js, using Ant Design UI library, and Axios. \nProvided Restful API through Flask, with Pandas and NumPy to generate customized college list. \nDeployed project with Docker and GitHub Actions to achieve continuous development and integration.`,
      alt: "Activity Go System Architecture",
    },
  },
  {
    name: "Theatre Booking Website",
    id: "theatre-booking-website",
    link: "https://mingx.tech/",
    type: "Web App",
    date: "Sep.2019 – Mar. 2020",
    role: "Personal Project",
    logoSrc: sayingLogo,
    thumbnailSrc: sayingThumbnail,
    thumbnailAlt: "Theatre Booking Website",
    description:
      "A ticket booking website for a theatre club with over 500 patrons per show.",
    techStack: ["node", "express", "bootstrap", "mongodb", "linux", "nginx"],
    hasDetailImage: true,
    detailImages: [sayingDetail1, sayingDetial2],
    features: [
      {
        name: "Seats",
        intro:
          "With jQuery Seat Charts, patrons can select seats by interacting with a seat map. Multiple rules are added to avoid unexpected user behavior such as maximum seats, ect.",
        image: sayingSeats,
      },
      {
        name: "form",
        intro:
          "After the selection, patron is asked to fill out their personal information",
        image: sayingForm,
      },
      {
        name: "CrossCheck",
        intro:
          "When user select the seat, the seat will be locked so that other user have no access to it, and the seat will be freed and releases after 10minutes if the patron doesn’t proceed to the confirmation.",
        image: sayingCrossCheck,
      },
    ],
    systemArchitecture: {
      image: "",
      description: ``,
      alt: "",
    },
  },
];

export const filmIntro = `As my second major, watching films and producing short film/video contribute to one important part of my life. By producing, script writing, directing, filming, and editing, I involved in a variety of video/short film project and practiced comprehensive skills and aesthetic tastes.`;

export const featuredFilm = {
  name: "Chinese Barber - Coming Soon",
  type: "Documentary Short",
  coverSrc: chineseBarber,
  coverAlt: "Chinese Barber",
  date: "May 2022",
  roles: ["Director", "Producer", "Cinematographer", "Postproduction"],
  description:
    "Chinese Barber is a 15-minute (tentative) documentary short that observes the daily operations of Fashion Salon, a barbershop located in downtown Madison, Wisconsin run by a Chinese Barber Mrs. Chen Xuan that provides various Asian style haircuts to the local students and residents. Following Mrs. Chen’s life as a barber and a wife from a completely different country, this documentary will try to unveil how Chinese immigrants try to fit themselves into a foreign country and how they contribute to the diversity of the local community.",
};

export const filmProjects = [
  {
    name: "Rhinoceros In Love",
    type: "Online Drama",
    coverSrc: RhinocerosInLove,
    coverAlt: "",
    date: "May 2021",
    roles: ["Director", "Postproduction"],
    description:
      "Rhinoceros in Love is a famous Chinese modern love tragedy directed by Jinghui Meng. It features stream-of-consciousness lines and scenic design, with the pioneering idea of expressing the spark and gloom of a young pair. To reproduce such a great theatrical work under the physical constraints, we rehearsed and recorded the play via Zoom where actors and staff were isolated around the world. By deliberate conceive of screen layout and editing tricks, we tried our best to connect the interactions between characters on the screen.",
    youtubeURL: "https://www.youtube.com/watch?v=JSwKosGOIFc",
  },
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
      "“Smiling depression” is a subset of depression disorder that the patients cover their depression by superficial happiness and it’s oblivious to others that he or she may suffer from huge emotional fluctuation. In this short PSA, I present such a protagonist with smiling depression who experiences a flood of emotion when she is alone. Filmed by iPhone Xr with ProTake.",
    youtubeURL: "https://www.youtube.com/watch?v=wIkZf37JIXM",
  },
  {
    name: "Memory Blocked",
    type: "Short Film",
    coverSrc: "",
    coverAlt: "",
    date: "June 2019",
    roles: ["Director", "Producer", "Cinematographer", "Postproduction"],
    description:
      "When memory becomes illusion, and illusion becomes reality, will you feel cured, or will you be frightened. Shot by Sony FX5.",
    youtubeURL: "https://youtu.be/m_8cNjdE30o",
  },
];

export const theaterIntro = `Theater is my dream place. Starting as a student stagehand during my freshman year at my school's theater, I stepped into this wonderland and immediately got trapped by the fascinating work people have done in theater. During college time, I grew to be a technical director at Saying Theatre Club as well as an audio specialist at Wisconsin Union Theatre. Mixing audio for live performance and putting up a show from script shaped my theater life.`;

export const featuredTheaterWork = {
  name: "Me2 and He2",
  type: "Drama",
  coverSrc: me2vshe2,
  coverAlt: "Me2 and He2 cover image",
  date: "April 2023",
  roles: ["Technical Director"],
  description:
    'Me2 vs He2 tells the story of More from mainland China and Jing from Taiwan, who meet during a business negotiation in Hong Kong about the merger of their two companies. Along the way, they meet two mysterious people who claim to be their past selves from ten years ago, eager to help them retrieve their lost memories. However, no one can see these two people except themselves. Through their "past selves," they discover that they once knew each other and even had a promise of eternal love. Note that this video is in Chinese.',
  youtubeURL: "https://youtu.be/TUQDG1scSSM?si=HbslVQykdfG8HDsW",
};

export const theaterProjects = [
  {
    name: "Samara Joy - Madison Concert",
    type: "Live Concert",
    coverSrc: samaraJoy,
    coverAlt: "Samara Joysa cover image",
    date: "May 2023",
    roles: ["OB Audio Engineer"],
    description:
      "Twenty-three-year-old jazz singer Samara Joy has been celebrated for her effortless control of timeless jazz standards. Just a few months after winning her first two GRAMMY Awards, including the coveted award for Best New Artist, she will showcase her smooth, mature vocals when she performs at Shannon Hall in Memorial Union on May 4 at 7:30 p.m. CST. Joy’s performance is part of the Wisconsin Union Theater’s 2022-23 Jazz Series.      ",
  },
  {
    name: "Revival Band Spring 2023 Showcase",
    type: "Live Concert",
    coverSrc: revival,
    coverAlt: "Revival Band Spring 2023 Showcase cover image",
    date: "April 2023",
    roles: ["Audio Engineer"],
    description:
      "Revival Band is a Chinese band at Madison, WI who brings Chinese pop music to the campus community. They brought over 15 songs for their spring 2023 showcase.",
  },
  {
    name: "CSSA 2023 Spring Festival Gala",
    type: "Gala",
    coverSrc: cssa2023,
    coverAlt: "CSSA 2023 Spring Festival Gala cover image",
    date: "Jan 2023",
    roles: ["Audio Engineer", "Lead Stagehand"],
    description:
      "Spring Festival Gala is a yearly show brought by UW-Madison Chinese Student and Scholars Association (CSSA) during Chinese Spring Festival, featuring live band, dancing, singing, talk show, and Chinese traditional shows. This year the gala has 8 wireless channels, 2 live bands, 40 audio inputs and more than 10 outputs.  Note that this video is in Chinese.",
    youtubeURL: "https://www.youtube.com/live/59SVrnXAkpY?si=NMY3GVMru046ArRR",
  },
  {
    name: "An Endless Poetry - Foundland Musical",
    type: "Musical",
    coverSrc: anEndlessPoetry,
    coverAlt: "An Endless Poetry cover image",
    date: "Nov 2022",
    roles: ["Audio Engineer"],
    description:
      "An Endless Poetry is an original Chinese musical by Foundland Musical. Note that this video is in Chinese.",
    youtubeURL: "https://www.bilibili.com/video/BV1eW4y157V4",
  },
  {
    name: "The Pillowman - Saying Theatre",
    type: "Drama",
    coverSrc: thePillowman,
    coverAlt: "The Pillowman - Saying Theatre cover image",
    date: "April 2022",
    roles: ["Technical Director", "Lighting Designer"],
    description:
      "The Pillowman is a 2003 play by British-Irish playwright Martin McDonagh.  It tells the tale of Katurian, a fiction writer living in a police state, who is interrogated about the gruesome content of his short stories and their similarities to a number of bizarre child murders occurring in his town. Note that this video is in Chinese.",
    youtubeURL: "https://www.bilibili.com/video/BV1TY4y1b7LX/",
  },
  {
    name: "CSSA 2022 Spring Festival Gala",
    type: "Gala",
    date: "Jan 2022",
    roles: ["Stage Manager"],
    description:
      "Spring Festival Gala is a yearly show brought by UW-Madison Chinese Student and Scholars Association (CSSA) during Chinese Spring Festival, featuring live band, dancing, singing, talk show, and Chinese traditional shows.",
    youtubeURL: "https://www.youtube.com/watch?v=LPuIUYQmQr0",
  },
  {
    name: "CSSA 2020 Spring Festival Gala",
    type: "Gala",
    date: "Jan 2020",
    roles: ["Audio Engineer"],
    description:
      "Spring Festival Gala is a yearly show brought by UW-Madison Chinese Student and Scholars Association (CSSA) during Chinese Spring Festival, featuring live band, dancing, singing, talk show, and Chinese traditional shows.",
    youtubeURL: "https://www.youtube.com/watch?v=GX2KXY3AqNk",
  },
];
