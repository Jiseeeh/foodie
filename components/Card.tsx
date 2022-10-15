import React from "react";
import Image from "next/image";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  cardTitle: string;
  cardDesc: string;
  price: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <section className="w-52 h-80 flex flex-col items-center transition ease-in-out hover:-translate-y-1 hover:scale-110">
        <section className="w-full h-52 relative">
          <Image
            className="object-cover"
            src={props.imgSrc}
            layout="fill"
            alt={props.imgAlt}
          />
        </section>
        <section className="p-3 bg-white">
          <h1 className="font-bold">{props.cardTitle}</h1>

          <p>{props.cardDesc}</p>
          <p className="font-semibold">{props.price}</p>
        </section>
      </section>
    </>
  );
};

export default Card;
