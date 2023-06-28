import React from 'react'
import { Stack, Box } from '@mui/system'
import StyledTooltip from './StyledTooltip'

const Navbar = ({ resetContext }) => {
  return (
    <Stack
      className="h-[44px] fixed top-0 left-0 right-0 bg-[#f9fafb] border-b border-[#eaecf0] justify-center items-end z-50"
    >
      <Box className='flex'>
        <StyledTooltip text="Reset Chat">
          <button className='mr-5' onClick={resetContext}>
            <img src='/icons/refresh.svg' />
          </button>
        </StyledTooltip>
        <StyledTooltip text="Share Link">
          <button className='mr-5'>
            <img src='/icons/share.svg' />
          </button>
        </StyledTooltip>
        <StyledTooltip text="API">
          <button className='mr-5'>
            <img src='/icons/three-dot.svg' />
          </button>
        </StyledTooltip>
      </Box>
    </Stack>
  )
}

export default Navbar
