import React from "react";
import { useState } from "react";
import CustomTooltip from "./CustomTooltip";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const Select = ({
  id,
  options,
  onChange,
  placeholder,
  required = false,
  tooltipMsg = "Please fill out this field",
  showTooltip = false,
  // setTooltip,
}) => {
  const [phText, setPhText] = useState(placeholder);
  const [open, setOpen] = useState(false);

  const handleSelect = (id, ph) => {
    setOpen(false);
    setPhText(ph);
    onChange(id);
  };

  return (
    <div className='w-full relative'>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div>
          <button
            className={`block px-5 py-4 w-full h-[56px] text-menuText bg-transparent rounded-[14px] text-opacity-80 focus:outline-none appearance-none
        text-left
      ${
        phText === placeholder && !open
          ? "border-primary border-opacity-10 border-[1px]"
          : "border-styleupPurple border-opacity-60 border-[2px]"
      }
        `}
            id={id}
            type='button'
            onClick={() => {
              setOpen((prev) => !prev);
              //setTooltip(false);
            }}
          >
            {phText}
          </button>

          <ul
            className={`list-none flex flex-col justify-end items-start bg-white flex-1 z-10 absolute border-[1px] w-full
        rounded-lg
        ${open ? "visible" : "hidden"}`}
            style={{
              boxShadow:
                "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
            }}
          >
            {options.map((op, index) => (
              <li
                key={op.id}
                className={
                  "w-full font-inter font-medium cursor-pointer text-[16px] leading-6 text-menuText p-[14px] hover:bg-slate-200 first:rounded-t-lg last:rounded-b-lg"
                }
                onClick={() => handleSelect(op.id, op.text)}
              >
                <div className='flex'>
                  <p className='flex-grow'>{op.text}</p>
                  <img
                    src='/icons/check.svg'
                    className={phText === op.text ? `visible` : "hidden"}
                  ></img>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ClickAwayListener>
      <CustomTooltip
        PopperProps={{
          disablePortal: true,
        }}
        open
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={tooltipMsg}
        placement='bottom-start'
        arrow
        className={required && showTooltip ? "visible" : "hidden"}
      >
        <span className='absolute z-10 origin-[0] bottom-1 left-12'></span>
      </CustomTooltip>
    </div>
  );
};

export default Select;
