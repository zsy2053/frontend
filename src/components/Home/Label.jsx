import React from 'react'
import { Box } from '@mui/system'

const Label = ({ text }) => {
    return (
      <Box className='bg-[#e5ecf6] text-gray-600 rounded px-1 mr-2 mb-2 text-sm'>
        {text}
      </Box>
    )
  }

export default Label