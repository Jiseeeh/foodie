import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Menu from "../components/Menu";
import Discount from "../components/Discount";
import IDiscount from "../interfaces/IDiscount";
import Order from "../components/Order";
import FreeDelivery from "../components/FreeDelivery";
import Testimonial from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const Home: NextPage = () => {
  const discounts: IDiscount[] = [
    {
      contentPosition: "right",
      background: "bg-ramen-egg",
      title: "Discount up to 50% All Menu",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      buttonContent: "Read more",
    },
    {
      contentPosition: "left",
      background: "bg-ramen",
      title: "December's Promo! Buy 1 Get 1 Free!",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      buttonContent: "Read more",
    },
  ];
  return (
    <section className="relative">
      <Head>
        <title>Foodie</title>
        <meta
          name="description"
          content="Foodie delivers faster than light. Healthy Foods near you. Healthy foods for you! Order now and you'll get 50% discount!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Foodie, Healthy Foods, Free Delivery, Foods near me, Healthy Foods near me, "
        ></meta>
        <meta
          property="og:description"
          content="The best and all healthy foods are served!"
        />
        <meta
          property="og:image"
          content="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ScrollToTop smooth style={{ display: "grid", placeItems: "center" }} />
      <Navbar />
      <Heading />
      <Menu />
      {discounts.map((discount, index) => (
        <Discount key={index} {...discount} />
      ))}
      <Order />
      <FreeDelivery />
      <Testimonial />
      <Footer />
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </section>
  );
};

export default Home;
