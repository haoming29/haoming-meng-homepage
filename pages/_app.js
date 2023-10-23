import "../styles/main.scss";
import "react-medium-image-zoom/dist/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faPython,
  faJsSquare,
  faJava,
  faNode,
  faReact,
  faVuejs,
  faDocker,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faExternalLinkAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  faGithub,
  faYoutube,
  faLinkedin,
  faCheckSquare,
  faCoffee,
  faPython,
  faJsSquare,
  faJava,
  faNode,
  faReact,
  faVuejs,
  faDocker,
  faFigma,
  faGitAlt,
  faPlayCircle,
  faExternalLinkAlt,
  faBars
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
