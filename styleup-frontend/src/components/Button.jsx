import React from "react";

const Button = ({ className, name, type = "button", onClick }) => {
  return (
    <button
      type={type}
      className={`font-inter font-medium p-2 gap-2 text-[20px] text-white bg-black rounded-[14px] w-40 ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
