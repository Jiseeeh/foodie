import React from "react";

import Card from "./Card";
import Button from "./Button";

const Menu: React.FC = () => {
  const cards = [
    {
      imgSrc: "/ramen.webp",
      imgAlt: "Bowl of Ramen",
      cardTitle: "Ramen",
      cardDesc: "Lorem ipsum dolor sit amet, consectetur  adipisicing...",
      price: "$13",
    },
    {
      imgSrc: "/ramen-1.webp",
      imgAlt: "Bowl of Ramen",
      cardTitle: "Ramen",
      cardDesc: "Lorem ipsum dolor sit amet, consectetur  adipisicing...",
      price: "$13",
    },
    {
      imgSrc: "/ramen-2.webp",
      imgAlt: "Bowl of Ramen",
      cardTitle: "Ramen",
      cardDesc: "Lorem ipsum dolor sit amet, consectetur  adipisicing...",
      price: "$13",
    },
  ];

  return (
    <main
      id="menu"
      className="flex flex-col items-center bg-dimmed-green md:-mt-40 lg:-mt-52 xl:-mt-60"
    >
      <h1 className="mb-4 mt-16 font-bold text-3xl text-dimmed-blue">
        Popular Menu
      </h1>
      <section className="grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
      <Button content="Show more" />
    </main>
  );
};

export default Menu;
