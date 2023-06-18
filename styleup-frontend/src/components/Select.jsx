import React from "react";
import CustomTooltip from "./CustomTooltip";
const Select = ({
  id,
  options,
  placeholder,
  required = false,
  tooltipMsg = "Please fill out this field",
}) => {
  return (
    <div className='w-full relative'>
      <select
        className='block px-5 py-4 w-full h-[56px] text-menuText bg-transparent rounded-[14px] text-opacity-80 focus:outline-none appearance-none 
      border-styleupPurple border-opacity-60 border-[2px]
      invalid:border-primary invalid:border-opacity-10 invalid:border-[1px]
        '
        id={id}
        required={required}
      >
        <option value='' selected hidden disabled>
          {placeholder}
        </option>
        {options.map((op, index) => (
          <option value={op.value} className='w-20'>
            {op.text}
          </option>
        ))}
      </select>

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
        className='hidden'
      >
        <span className='absolute z-10 origin-[0] bottom-1 left-12'></span>
      </CustomTooltip>
    </div>
  );
};

export default Select;
