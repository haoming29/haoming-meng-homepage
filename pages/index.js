import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Featured from "../components/Home/Featured";
import Heading from "../components/Home/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Haoming Meng Homepage</title>
        <meta
          name="description"
          content="This is the homepage of Haoming Meng"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <Heading />
        <Featured />
      </main>
      <Footer />
    </div>
  );
}
