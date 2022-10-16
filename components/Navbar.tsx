import React, { useState, useRef } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const ulElement = useRef<HTMLUListElement>(null);
  const liClass =
    "mr-7 text-white w-full md:w-auto cursor-pointer md:scale-hover";
  const visibleClasses = [
    "flex",
    "flex-col",
    "opacity-100",
    "visible",
    "max-h-screen",
  ];
  const invisibleClasses = ["invisible", "opacity-0", "max-h-0"];
  const liELements = [
    {
      title: "Home",
      class: liClass,
      linkTo: "#",
    },
    {
      title: "Our Menu",
      class: liClass,
      linkTo: "#menu",
    },
    {
      title: "Promo",
      class: liClass,
      linkTo: "#promo",
    },
    {
      title: "Order",
      class: liClass,
      linkTo: "#order",
    },
  ];

  const toggleMenu = () => {
    ulElement?.current?.classList.add(...visibleClasses);
    ulElement?.current?.classList.remove(...invisibleClasses);
  };

  const unToggleMenu = () => {
    ulElement?.current?.classList.remove(...visibleClasses);
    ulElement?.current?.classList.add(...invisibleClasses);
  };

  return (
    <nav id="#" className="z-50 sticky top-0 ">
      {/* nav */}
      <section className="flex flex-wrap bg-dimmed-blue md:flex-nowrap md:items-center ">
        <Image src="/logo.svg" width={60} height={60} alt="Foodie logo" />
        <h1 className="text-white text-2xl font-bold self-center">FOODIE</h1>
        <button
          className="ml-auto md:hidden"
          onClick={() => {
            setIsMenuToggled((prevIsMenuToggled) => !prevIsMenuToggled);

            isMenuToggled ? unToggleMenu() : toggleMenu();
          }}
        >
          <Image
            src={isMenuToggled ? "/menu-close.svg" : "/menu-open.svg"}
            width={40}
            height={40}
            alt="Menu logo"
          />
        </button>
        <ul
          className="text-center  w-full flex max-h-0 invisible opacity-0 transition-all ease-in-out duration-700  md:visible md:opacity-100 md:flex md:flex-row md:justify-end md:items-center"
          ref={ulElement}
        >
          {liELements.map((element, index) => (
            <li key={index} className={element.class}>
              <a
                href={element.linkTo}
                onClick={() => {
                  setIsMenuToggled(false);
                  unToggleMenu();
                }}
              >
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
