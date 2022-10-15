import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Foodie</title>
        <meta
          name="description"
          content="Healthy foods for you! Order now and you'll get 50% discount!"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
    </div>
  );
};

export default Home;
