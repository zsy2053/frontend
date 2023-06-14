import React from "react";

const Button = ({ className, name }) => {
  return (
    <button
      type='button'
      className={`font-inter bg-white text-primary font-medium p-2 gap-2 rounded-xl ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
