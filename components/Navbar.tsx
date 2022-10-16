import React, { useState, useRef } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const ulElement = useRef<HTMLUListElement>(null);
  const liClass = "mr-7 text-white w-full md:w-auto cursor-pointer scale-hover";
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
  return (
    <nav id="#" className=" sticky top-0 ">
      {/* nav */}
      <section className="flex flex-wrap bg-dimmed-blue md:flex-nowrap md:items-center ">
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
            <li key={index} className={element.class}>
              <a href={element.linkTo}>{element.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
