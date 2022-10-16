import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const headingClass = "mx-2 text-xl md:text-2xl";
  const unOrderedListClass = "mx-4";

  return (
    <footer className="text-white flex flex-col bg-dimmed-blue md:flex-row md:justify-between ">
      <section className="p-7">
        <h1 className={`${headingClass} mx-0`}>ABOUT</h1>
        <p className="md:max-w-2xl">
          Some of the icons were from&nbsp;
          <a className="italic font-bold" href="https://icons8.com/">
            Icons8&nbsp;
          </a>
          and&nbsp;
          <a className="italic font-bold" href="https://lordicon.com/">
            Lordicon.&nbsp;
          </a>
          Web design was from&nbsp;
          <a className="italic font-bold" href="http://www.freepik.com">
            Freepik&nbsp;
          </a>
          and was made by&nbsp;
          <a className="italic font-bold" href="https://github.com/Jiseeeh">
            Jiseeeh!{" "}
            <Image src="/heart.png" alt="heart icon" width={10} height={10} />
          </a>
        </p>
      </section>
      <section className="p-7 text-center flex justify-center">
        <ul className={unOrderedListClass}>
          <h1 className={headingClass}>ABOUT</h1>
          <li>Team</li>
          <li>Join us</li>
          <li>Ethic</li>
          <li>Goals</li>
        </ul>

        <ul className={unOrderedListClass}>
          <h1 className={headingClass}>ABOUT</h1>
          <li>Team</li>
          <li>Join us</li>
          <li>Ethic</li>
          <li>Goals</li>
        </ul>

        <ul className={unOrderedListClass}>
          <h1 className={headingClass}>ABOUT</h1>
          <li>Team</li>
          <li>Join us</li>
          <li>Ethic</li>
          <li>Goals</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
