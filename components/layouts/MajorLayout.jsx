import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import Footer from "../Footer";
import NavBar from "../NavBar";
import MotionPage from "./MotionPage";

const MajorLayout = ({ title, description, children }) => {
  const router = useRouter();

  return (
    <>
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
      <AnimatePresence>
        <MotionPage key={router.route}>
          <main>{children}</main>
        </MotionPage>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MajorLayout;
