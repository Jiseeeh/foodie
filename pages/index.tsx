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
          content="Healthy foods for you! Order now and you'll get 50% discount!"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
