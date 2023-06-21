import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import agentsData from './Agents';

const libraryData = [
    { name: "Add file", icon: <Box className='h-6 w-6 flex justify-center'><img src='/icons/PlusIcon.svg' className='place-self-center' /></Box> },
    { name: "Add website", icon: <Box className='h-6 w-6 flex justify-center'><img src='/icons/PlusIcon.svg' className='place-self-center' /></Box> },
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

const MySpaceMenu = ({ collectionList, handleState, handleFocus }) => {
    return (
        <Stack className=' w-72 overflow-auto pb-10 bg-white'>
            <Box className='mt-8 ml-4 text-menuText'>
                Agents
                <Stack className='h-40 mt-4'>
                    {agentsData.map((item, index) => (
                        <div key={index}>
                            <button onClick={(event) => handleFocus(agentsData.filter((item) => item.name === event.currentTarget.name)[0])} name={item.name} className='flex h-10 items-center'>
                                <span className='mr-2'>{item.menuIcon}</span>
                                <p className='text-menuText'>{item.name}</p>
                            </button>
                        </div>
                    ))}
                </Stack>
            </Box>
            <Box className='mt-8 ml-4'>
                Library
                <Stack className='h-50 mt-4'>
                    {libraryData.map((item, index) => (
                        <div key={index}>
                            <button className='flex h-10 items-center' name={item.name} onClick={handleState}>
                                <span className='mr-2'>{item.icon}</span>
                                <p className='text-menuText'>{item.name}</p>
                            </button>
                        </div>
                    ))}
                    {collectionList.map((item, index) => (
                        <div key={index}>
                            <button className='flex h-10 items-center' onClick={(event) => handleFocus(collectionList.filter((item) => item.name === event.currentTarget.name)[0])} name={item.name}>
                                <span className='mr-2'>{item.icon}</span>
                                <p className='text-menuText'>{item.name}</p>
                            </button>
                        </div>
                    ))}
                </Stack>
            </Box>
        </Stack>
    )
}

export default MySpaceMenu
