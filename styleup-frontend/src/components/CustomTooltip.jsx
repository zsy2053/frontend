import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#1C1C1C",
    left: "10px !important",
  },
  [`& .${tooltipClasses.tooltip} `]: {
    backgroundColor: "#1C1C1C",
    padding: "8px",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: 0,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: "8px",
  },
}));

export default CustomTooltip;
