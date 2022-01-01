import "../styles/globals.css";
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
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

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
  faGitAlt
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
