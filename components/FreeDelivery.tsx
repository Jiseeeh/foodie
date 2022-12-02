import React from "react";

import Button from "./Button";

const FreeDelivery: React.FC = () => {
  return (
    <section className="p-3 min-h-screen text-dimmed-blue flex flex-col justify-center items-center bg-food-bg bg-cover">
      <h1 className="mb-3 text-4xl font-bold md:text-5xl">Free Delivery</h1>
      <p className="md:max-w-xl md:text-xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Reiciendis mollitia accusamus doloremque quis nam, similique earum
        rerum. In, explicabo ea!
      </p>
      <Button content="Get Voucher" />
    </section>
  );
};

export default FreeDelivery;
