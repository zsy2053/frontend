import React from 'react'
import { Stack, Box } from '@mui/system';
import Divider from '@mui/material/Divider';

const CommunityMenu = () => {
    return (
        <Stack className=' w-72 overflow-auto pb-10 bg-white'>
            <Box className='mt-8 ml-4 text-menuText'>
                Categories
            </Box>
            <Divider variant='middle'/>
        </Stack>
    )
}

export default CommunityMenu