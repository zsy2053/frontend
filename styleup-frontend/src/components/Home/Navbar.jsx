import React from 'react'
import { Stack } from '@mui/material'
import { BorderBottom } from '@mui/icons-material'

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{
        height: '44px',
        position: 'sticky',
        top: 0,
        justifyContent: 'space-between',
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #eaecf0',
    }}>

    </Stack>
  )
}

export default Navbar