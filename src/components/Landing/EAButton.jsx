import React from "react";

const EAButton = ({ className, name, type = "button", onClick, children }) => {
  return (
    <button
      type={type}
      className={`font-inter font-medium p-2 gap-2 text-[20px] text-white bg-black rounded-[14px] ${className}`}
      onClick={onClick}
    >
      {name}
      {children}
    </button>
  );
};

export default EAButton;
