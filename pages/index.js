import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Featured from "../components/Home/Featured";
import Grid from "../components/Home/Grid";
import Heading from "../components/Home/Heading";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import { baseDescription } from "../config";
import { title } from "../utils";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`${title("")}`}</title>
        <meta name="description" content={baseDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <Heading />
        <Featured />
        <Grid />
      </main>
      <Footer />
    </div>
  );
}
