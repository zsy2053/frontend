import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../components/Home/Sidebar';
import MySpaceMenu from '../components/Home/MySpaceMenu';
import Navbar from '../components/Home/Navbar';

function Home() {
    return (
        <Stack>
        <Navbar/>
        <Stack sx={{ flexDirection: 'row'}}>
            <Box sx={{ height: { sx: 'auto', md: 'vh' }, borderRight: '1px solid #eaecf0' }}>
                <Sidebar/>
            </Box>
            <Box sx={{ height: 'vh', borderRight: '1px solid #eaecf0'}}>
                <MySpaceMenu/>
            </Box>
            <Box sx={{ height: 'vh', flex: 2}}>
                Calendar Agent
            </Box>
        </Stack>
        </Stack>
    );
}

export default Home