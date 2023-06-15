import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../components/Home/Sidebar';
import MySpaceMenu from '../components/Home/MySpaceMenu';
import Navbar from '../components/Home/Navbar';
import ChatWindow from '../components/Home/ChatWindow';

function Home() {
    return (
        <Stack className='h-screen flex flex-col'>
        <Navbar/>
        <Stack className='flex flex-auto divide-x' sx={{flexDirection:'row'}}>
            <Box className='border-r-borderGrey'>
                <Sidebar/>
            </Box>
            <Box className='border-r-borderGrey'>
                <MySpaceMenu/>
            </Box>
            <Box className='flex-auto'>
                <ChatWindow/>
            </Box>
        </Stack>
        </Stack>
    );
}

export default Home