import React, {useState} from 'react'

import {
    CheckBoxOutlineBlankOutlined,
    HomeOutlined,
    InboxOutlined,
} from "@mui/icons-material";
import { Vector, chatIcon, books, books1, books2 } from "../../assets";
import { Stack, Icon } from '@mui/material';
import { Box } from '@mui/system';

const agentsData = [
    { name: "Add agent", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>},
    { name: "Calendar agent", icon: <Icon><img src={books} /></Icon> },
    { name: "AI tutor", icon: <Icon><img src={books1} /></Icon> },
    { name: "Agent 3", icon: <Icon><img src={books2} /></Icon> },
];

const libraryData = [
    { name: "Add file", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>},
    { name: "Add website", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>},
    /*{ name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},*/
];

const mapStatesUpdate = (states, targetName) => {
    return states.map((item) => {
        if (item.name === targetName) {
            item.state = true;
        } else {
            item.state = false;
        }
        item.setActiveFunc(item.state)
        return item
    });
}

const MySpaceMenu = ({showUploadFilesModel, showAddWebsiteModel}) => {
    let spaceStateInit = [
        { name: "Add file", state: false, setActiveFunc: showUploadFilesModel},
        { name: "Add website", state: false, setActiveFunc: showAddWebsiteModel },
    ];
    const [spaceState, setSpaceState] = useState(spaceStateInit);
    const handleState = (event) => setSpaceState(mapStatesUpdate(spaceState, event.currentTarget.name));

    return (
        <Stack className=' w-72 overflow-auto pb-10 bg-white'>
            <Box className='mt-8 ml-4 text-menuText'>
                Agents
                <Stack className='h-40 mt-4'>
                    {agentsData.map((item, index) => (
                        <div key={index}>
                            <button className='flex h-10 items-center'>
                                <span className='mr-2'>{item.icon}</span>
                                <p className='text-menuText'>{item.name}</p>
                            </button>
                        </div>
                    ))}
                </Stack>
            </Box>
            <Box className='mt-8 ml-4'>
                Library
                <Stack className='h-40 mt-4'>
                    {libraryData.map((item, index) => (
                        <div key={index}>
                            <button className='flex h-10 items-center' name={item.name} onClick={handleState}>
                                <span className='mr-2'>{item.icon}</span>
                                <p className='text-menuText'>{item.name}</p>
                            </button>
                        </div>
                    ))}
                </Stack>
            </Box>
        </Stack>

        // <div className='h-screen w-72 overflow-auto pb-10 bg-white'>
        //     {data.map((item, index) => (
        //         <div key={index} className='flex h-24 justify-center'>
        //             <button className='flex flex-col justify-center items-center'>
        //                 <span className='text-homeInactiveIcon'>
        //                     {item.icon}</span>
        //                 <p className='text-homeInactiveIcon'>{item.name} </p>
        //             </button>
        //         </div>
        //     ))}
        // </div>
    )
}

export default MySpaceMenu