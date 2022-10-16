import React from "react";

const Heading: React.FC = () => {
  return (
    <>
      <section className="h-80 w-full bg-dimmed-blue text-center text-white flex flex-col justify-center items-center ">
        <h1 className="mb-3 text-4xl lg:text-5xl">HEALTHY FOOD RESTAURANT</h1>
        <p className="text-1xl max-w-md lg:text-2xl ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consectetur architecto
          quidem nesciunt nulla illo dicta atque aliquam! Distinctio, quae
          numquam.
        </p>
      </section>
      {/* spacer */}
      <section className="w-full bg-nav-wave bg-no-repeat bg-cover bg-center aspect-960/300"></section>
    </>
  );
};

export default Heading;
