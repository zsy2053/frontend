import React from 'react'
import { Stack, Box } from '@mui/system'

const Navbar = () => {
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
        <button className='mr-5'>
          <img src='/icons/refresh.svg' />
        </button>
        <button className='mr-5'>
          <img src='/icons/share.svg' />
        </button>
        <button className='mr-5'>
          <img src='/icons/three-dot.svg' />
        </button>
      </Box>
    </Stack>
  )
}

export default Navbar
