import React from "react";
import { Box } from "@mui/system";

const Label = ({ text }) => {
  return (
    <Box
      className='bg-[#e5ecf6] rounded px-1 text-zinc-900
      text-opacity-60
      text-[12px]
      font-normal'
    >
      {text}
    </Box>
  );
};

export default Label;
