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
      <section className="w-52 h-80 flex flex-col items-center scale-hover">
        <section className="w-full h-52 relative">
          <Image
            className="object-cover  rounded-t-lg"
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
