import { useRouter } from "next/router";
import Image from "next/image";
import { navbar } from "../config";
import styles from "./NavBar.module.css";
import logo from "../public/portfolio-website-logo.png";
import Link from "next/link";

const NavBar = ({ dark }) => {
  const router = useRouter();

  return (
    <div className={`${dark && styles.navbarDark}`}>
      <div className={`${styles.navbar} container`}>
        <div className={styles.navbarImageContainer}>
          <Link href={"/"} passHref={true}>
            <Image
              src={logo}
              alt="logo"
              className={`link ${styles.navbarImage}`}
            />
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          {navbar.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={`${styles.navbarLink} link ${
                  router.pathname === item.path && styles.navbarCurrent
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
