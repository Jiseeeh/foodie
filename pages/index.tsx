import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Foodie</title>
        <meta
          name="description"
          content="Healthy foods for you! Order now and you'll get 50% discount!"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar />
      <Menu />
    </section>
  );
};

export default Home;
