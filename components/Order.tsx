import React from "react";

import OrderStep from "./OrderStep";

const Order: React.FC = () => {
  const orderSteps = [
    {
      stepNumber: "01",
      title: "Order",
      desc: "Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore.",
    },
    {
      stepNumber: "02",
      title: "Choose Menu",
      desc: "Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore.",
    },
    {
      stepNumber: "03",
      title: "Delivery",
      desc: "Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore.",
    },
  ];

  return (
    <section id="order" className="min-h-screen text-white bg-dimmed-blue ">
      <h1 className="py-16 font-bold text-3xl text-center  md:text-4xl">How to order</h1>
      <section className="min-h-screen grid md:grid-cols-3 md:place-items-center">
        {orderSteps.map((orderStep, index) => (
          <OrderStep key={index} {...orderStep} />
        ))}
      </section>
    </section>
  );
};

export default Order;
