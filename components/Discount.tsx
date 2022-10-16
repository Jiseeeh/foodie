import React from "react";

import Button from "./Button";
import IDiscount from "../interfaces/IDiscount";

const Discount: React.FC<IDiscount> = (props) => {
  const leftSide = `h-1/2 ${props.background} bg-cover md:h-full md:w-1/2`;
  const rightSide =
    "h-1/2 p-3 flex flex-col md:h-full md:justify-center bg-white md:w-1/2";
  // this class is added to the side to reverse the position
  const position = "md:absolute md:right-0 md:top-0";
  const content = (
    <>
      <h1 className="mb-3 text-2xl font-bold md:text-4xl">{props.title}</h1>
      <p className="md:text-2xl">{props.desc}</p>
      <Button content={props.buttonContent} />
      <hr></hr>
    </>
  );
  return (
    <article id="promo" className="h-screen relative">
      {props.contentPosition === "right" ? (
        <>
          <section className={leftSide}></section>
          <section className={`${rightSide} ${position}`}>{content}</section>
        </>
      ) : (
        <>
          <section className={rightSide}>{content}</section>
          <section className={`${leftSide} ${position}`}></section>
        </>
      )}
    </article>
  );
};

export default Discount;
