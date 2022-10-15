import "../styles/globals.css";
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Menu/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
