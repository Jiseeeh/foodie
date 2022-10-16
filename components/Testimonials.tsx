import React from "react";
import Image from "next/image";

const Testimonial: React.FC = () => {
  const iconSize = 50;

  return (
    <section>
      <section className="p-3 min-h-screen text-dimmed-blue flex flex-col justify-center items-center bg-dimmed-green">
        <Image src="/quote.svg" width={70} height={70} />
        <p className="text-xl md:text-3xl md:max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis{" "}
        </p>
        <h1 className="py-6 text-2xl font-bold md:text-4xl">The Great Mamba</h1>
        {/* icons */}
        <section className="flex justify-center items-center">
          <Image
            src="/fb.svg"
            alt="fb icon"
            width={iconSize}
            height={iconSize}
          />
          <Image
            src="/twitter.svg"
            alt="twitter icon"
            width={iconSize}
            height={iconSize}
          />
          <Image
            src="/instagram.svg"
            alt="instagram icon"
            width={iconSize}
            height={iconSize}
          />
        </section>
      </section>
      {/* spacer */}
      <section className="w-full bg-testimonial-wave bg-no-repeat bg-cover bg-center aspect-960/300"></section>
    </section>
  );
};

export default Testimonial;
