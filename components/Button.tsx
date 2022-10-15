import React from "react";

interface ButtonProps {
  content: string;
  // onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button className="my-7 p-2 w-40 text-white rounded-full transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-dimmed-blue">
        {props.content}
      </button>
    </>
  );
};

export default Button;
