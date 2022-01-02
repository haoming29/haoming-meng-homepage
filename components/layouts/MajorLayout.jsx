import Head from "next/head";
import Footer from "../Footer";
import NavBar from "../NavBar";
import styles from "./MajorLayout.module.css";

const MajorLayout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title ?? "Haoming Meng Homepage"}</title>
        <meta
          name="description"
          content={description ?? "This is the homepage of Haoming Meng"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar dark={true} />
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MajorLayout;
