import React from 'react'
import { Stack, Box } from '@mui/system'
import { refreshIcon, shareIcon, threeDotIcon } from '../../assets'

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
          <img src={refreshIcon} />
        </button>
        <button className='mr-5'>
          <img src={shareIcon} />
        </button>
        <button className='mr-5'>
          <img src={threeDotIcon} />
        </button>
      </Box>
    </Stack>
  )
}

export default Navbar