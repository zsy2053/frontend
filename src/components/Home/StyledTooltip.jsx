import React from 'react'
import Tooltip from '@mui/material/Tooltip';
//import { makeStyles } from '@mui/styles';

/*const useStyles = makeStyles(theme => ({
  arrow: {
    "&:before": {
      color: "#1c1c1c"
    },
  }
}));*/

const tooltipStyle = {
  sx: {
    "& .MuiTooltip-tooltip": {
      color: "white",
      backgroundColor: "#1c1c1c"
    }
  }
}

const StyledTooltip = ({ children, text, direction }) => {
  //let classes = useStyles();
  return (
    <Tooltip title={text} arrow placement={direction ? direction : 'bottom'}
      PopperProps={tooltipStyle}>
      {children}
    </Tooltip>
  )
}

export default StyledTooltip;
