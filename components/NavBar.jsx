import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";
import Head from "next/head";
import { navbar } from "../config";
import styles from "./NavBar.module.scss";
import logo from "../public/portfolio-website-logo.png";
import Link from "next/link";

const NavBar = ({ dark }) => {
  const router = useRouter();

  return (
    <div className={`${dark && styles.navbarDark}`}>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className={`${styles.navbar} container`}>
        <div className={styles.navbarImageContainer}>
          <Link href={"/"} passHref={true} className={styles.navbarLink}>
            <Image
              src={logo}
              alt="logo"
              className={`link ${styles.navbarImage}`}
              objectFit="contain"
              layout="fill"
            />
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          {navbar.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={classNames("link", styles.navbarLink, {
                  [styles.navbarCurrent]: router.pathname === item.path,
                })}
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
