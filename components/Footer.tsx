import React from "react";

const Footer: React.FC = () => {
  const headingClass = "mx-2 text-xl md:text-2xl";
  const unOrderedListClass = "mx-4";

  return (
    <footer className="text-white flex flex-col bg-dimmed-blue md:flex-row md:justify-between ">
      <section className="p-7">
        <h1 className={`${headingClass} mx-0`}>ABOUT</h1>
        <p className="md:max-w-2xl">
          Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
          eiusmod tempor incididunt ultimam quantum Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aut suscipit voluptatem hic aspernatur!
          Ipsa nulla dolorem nam dignissimos voluptatum laborum.
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
