import React from "react";

import Card from "./Card";

const Menu: React.FC = () => {
  const cards = [
    {
      imgSrc: "/ramen.jpg",
      imgAlt: "Bowl of Ramen",
      cardTitle: "Ramen",
      cardDesc: "Lorem ipsum dolor sit amet, consectetur  adipisicing...",
      price: "$13",
    },
    {
      imgSrc: "/ramen-1.jpg",
      imgAlt: "Bowl of Ramen",
      cardTitle: "Ramen",
      cardDesc: "Lorem ipsum dolor sit amet, consectetur  adipisicing...",
      price: "$13",
    },
    {
      imgSrc: "/ramen-2.jpg",
      imgAlt: "Bowl of Ramen",
      cardTitle: "Ramen",
      cardDesc: "Lorem ipsum dolor sit amet, consectetur  adipisicing...",
      price: "$13",
    },
  ];

  return (
    <main className="flex flex-col items-center bg-dimmed-green md:-mt-40 lg:-mt-52 xl:-mt-60">
      <h1 className="text-3xl mb-4 text-dimmed-blue">Popular Menu</h1>
      <section className="grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
      <button className="my-7 p-2 w-40 text-white rounded-full transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-dimmed-blue">
        Show more
      </button>
    </main>
  );
};

export default Menu;
