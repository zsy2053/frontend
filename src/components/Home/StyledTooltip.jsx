import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const finalTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          "&:before": {
            color: "#1c1c1c"
          }
        },
      },
    },
  },
});

const tooltipStyle = {
  sx: {
    "& .MuiTooltip-tooltip": {
      color: "white",
      backgroundColor: "#1c1c1c"
    }
  }
}

const StyledTooltip = ({ children, text, direction }) => {
  return (
    <ThemeProvider theme={finalTheme}>
      <Tooltip title={text} arrow placement={direction ? direction : 'bottom'}
        PopperProps={tooltipStyle}>
        {children}
      </Tooltip>
    </ThemeProvider>
  )
}

export default StyledTooltip;
