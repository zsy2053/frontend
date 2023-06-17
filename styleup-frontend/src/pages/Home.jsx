import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../components/Home/Sidebar';
import MySpaceMenu from '../components/Home/MySpaceMenu';
import Navbar from '../components/Home/Navbar';
import ChatWindow from '../components/Home/ChatWindow';
import UploadFilesModal from '../components/Home/UploadFilesModal';
import AddWebsiteModal from '../components/Home/AddWebsiteModal';
import AgentType from '../components/Home/AgentType';

function Home() {
    const [uploadFilesModalActive, setUploadFilesModalActive] = useState(false)
    const [addWebsiteModalActive, setAddWebsiteModalActive] = useState(false)
    const [agentType, setAgentType] = useState(AgentType.AITutor)
    return (
        <Stack className='h-screen flex flex-col'>
            <Navbar />
            {uploadFilesModalActive && <UploadFilesModal setActive={setUploadFilesModalActive} />}
            {addWebsiteModalActive && <AddWebsiteModal setActive={setAddWebsiteModalActive} />}
            <Stack className='flex flex-auto divide-x' sx={{ flexDirection: 'row' }}>
                <Box className='border-r-borderGrey'>
                    <Sidebar />
                </Box>
                <Box className='border-r-borderGrey'>
                    <MySpaceMenu
                        showUploadFilesModel={setUploadFilesModalActive}
                        showAddWebsiteModel={setAddWebsiteModalActive}
                        setActiveAgent={setAgentType}
                        />
                </Box>
                <Box className='flex-auto'>
                    <ChatWindow agentType={agentType} />
                </Box>
            </Stack>
        </Stack>
    );
}

export default Home