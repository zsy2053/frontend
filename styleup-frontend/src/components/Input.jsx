import React from "react";
import CustomTooltip from "./CustomTooltip";
// first line is common styling, second and third lines are highlighted styling
// third line class placeholder-shown is the default input(not pressed and no value) styling
// goes to default style when held down, can be fixed by active: if needed.

const Input = ({
  label,
  id,
  required = false,
  tooltipMsg = "Please fill out this field",
}) => {
  return (
    <div className='w-full relative'>
      <input
        class='block px-5 pt-4 pb-1 w-full h-[54px] text-menuText bg-transparent rounded-[14px] text-opacity-80 focus:outline-none appearance-none 
      border-styleupPurple border-opacity-60 border-[2px]
      focus:border-styleupPurple focus:border-opacity-60 focus:border-[2px] 
      placeholder-shown:border-primary placeholder-shown:border-opacity-10 placeholder-shown:border-[1px]
        peer'
        placeholder=' '
        id={id}
        type='text'
        required={required}
      />
      <label
        class='absolute text-menuText text-opacity-80 duration-300 transform z-10 origin-[0] left-[22px]
        peer-focus:scale-75 peer-focus:-translate-y-2 peer-focus:top-3
        scale-75 -translate-y-2 top-3
        peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
        '
        for={id}
      >
        {label}
      </label>

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
        // className='hidden'
      >
        <span className='absolute z-10 origin-[0] bottom-1 left-12'></span>
      </CustomTooltip>
    </div>
  );
};

export default Input;
