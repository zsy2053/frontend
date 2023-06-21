import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 6,
  border: "2px solid #1C1C1C",
  width: 24,
  height: 24,

  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundPosition: "center",
  backgroundImage: `url(/icons/checkboxInternal.svg)`,
  backgroundRepeat: "no-repeat",
  justifyContent: "center",
  "&:before": {
    display: "block",
    width: 18,
    height: 18,
    content: '""',
  },
});

const CustomCheckbox = ({ props, sx }) => {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
        padding: "0",
      }}
      disableRipple
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
};

export default CustomCheckbox;
