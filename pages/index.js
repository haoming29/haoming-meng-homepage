import Head from "next/head";
import Footer from "../components/Footer";
import Featured from "../components/Home/Featured";
import Grid from "../components/Home/Grid";
import Heading from "../components/Home/Heading";
import NavBar from "../components/NavBar";
import { baseDescription } from "../config";
import { title } from "../utils";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`${title("")}`}</title>
        <meta name="description" content={baseDescription} />
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
