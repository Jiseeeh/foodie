import React, { useState, useRef } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const ulElement = useRef<HTMLUListElement>(null);
  const liClass = "mr-7 text-white w-full md:w-auto cursor-pointer";
  const liELements = [
    {
      title: "Home",
      class: liClass,
      onclick: () => {},
    },
    {
      title: "Our Menu",
      class: liClass,
      onclick: () => {},
    },
    {
      title: "Promo",
      class: liClass,
      onclick: () => {},
    },
    {
      title: "Order",
      class: liClass,
      onclick: () => {},
    },
  ];
  return (
    <nav>
      <section className="flex flex-wrap md:flex-nowrap md:items-center bg-dimmed-blue">
        <Image src="/logo.svg" width={60} height={60} />
        <h1 className="self-center">FOODIE</h1>
        <button
          className="ml-auto md:hidden"
          onClick={() => {
            setIsMenuToggled((prevIsMenuToggled) => !prevIsMenuToggled);

            if (isMenuToggled) {
              ulElement?.current?.classList.remove("flex");
              ulElement?.current?.classList.add("hidden");
            } else {
              ulElement?.current?.classList.add("flex", "flex-col");
              ulElement?.current?.classList.remove("hidden");
            }
          }}
        >
          <Image
            src={isMenuToggled ? "/menu-close.svg" : "/menu-open.svg"}
            width={40}
            height={40}
          />
        </button>
        <ul
          className="text-center hidden w-full md:flex md:flex-row md:justify-end"
          ref={ulElement}
        >
          {liELements.map((element, index) => (
            <li key={index} className={element.class} onClick={element.onclick}>
              {element.title}
            </li>
          ))}
        </ul>
      </section>
      <section className="h-80 w-full bg-dimmed-blue text-center text-white flex flex-col justify-center items-center ">
        <h1 className="text-4xl">HEALTHY FOOD RESTAURANT</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      </section>
      {/* spacer */}
      <section className="w-full bg-nav-wave bg-no-repeat bg-cover bg-center aspect-960/300"></section>
    </nav>
  );
};

export default Navbar;
