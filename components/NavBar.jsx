import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Head from "next/head";
import { navbar } from "../config";
import styles from "./NavBar.module.scss";
import logo from "../public/portfolio-website-logo.png";
import Link from "next/link";
import { useState } from "react";

const NavBar = ({ dark }) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className={styles.mobileMenu}>
          <FontAwesomeIcon
            icon="bars"
            className={styles.bars}
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          />
          <div
            className={classNames(styles.mobileLinks, {
              [styles.mobileLinksClosed]: !mobileMenuOpen,
            })}
          >
            {navbar.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={classNames("link", styles.mobileLink, {
                    [styles.mobileCurrent]: router.pathname === item.path,
                  })}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
