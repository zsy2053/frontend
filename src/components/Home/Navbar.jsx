import React from 'react'
import { Stack, Box } from '@mui/system'
import StyledTooltip from './StyledTooltip'

const Navbar = ({ resetContext }) => {
  return (
    <Stack direction='row' alignItems='center' py={2} sx={{
      height: '44px',
      position: 'sticky',
      top: 0,
      justifyContent: 'right',
      backgroundColor: '#f9fafb',
      borderBottom: '1px solid #eaecf0',
    }}>
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
