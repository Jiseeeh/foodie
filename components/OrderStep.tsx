import React from "react";

interface OrderStepProps {
  stepNumber: string;
  title: string;
  desc: string;
}

const OrderStep: React.FC<OrderStepProps> = (props) => {
  return (
    <section className="p-3 flex flex-col items-center">
      <section className="h-14 w-14 text-dimmed-blue text-3xl font-bold rounded-full bg-white grid place-items-center md:h-20 md:w-20">
        <p>{props.stepNumber}</p>
      </section>
      <h2 className="py-3 text-2xl md:text-3xl">{props.title}</h2>
      <p className="max-w-xs md:text-xl">{props.desc}</p>
    </section>
  );
};

export default OrderStep;
