import React from 'react'

import {
    CheckBoxOutlineBlankOutlined,
    HomeOutlined,
    InboxOutlined,
} from "@mui/icons-material";
import { Vector, chatIcon, books, books1, books2 } from "../../assets";
import { Stack, Icon } from '@mui/material';
import { Box } from '@mui/system';

const agentsData = [
    { name: "Add agent", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>, icon_raw: Vector},
    { name: "Calendar agent", icon: <Icon><img src={books} /></Icon>, icon_raw: books },
    { name: "AI tutor", icon: <Icon><img src={books1} /></Icon>, icon_raw: books1 },
    { name: "Audio agent", icon: <Icon><img src={books2} /></Icon>, icon_raw: books2 },
];

const libraryData = [
    { name: "Add file", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>},
    { name: "Add website", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>},
    /*{ name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},*/
];

const MySpaceMenu = ({showUploadFilesModel, showAddWebsiteModel, collectionList, handleState, handleFocus}) => {
    return (
        <Stack className=' w-72 overflow-auto pb-10 bg-white'>
            <Box className='mt-8 ml-4 text-menuText'>
                Agents
                <Stack className='h-40 mt-4'>
                    {agentsData.map((item, index) => (
                        <div key={index}>
                            <button onClick={(event) => handleFocus(agentsData.filter((item) => item.name === event.currentTarget.name)[0])} name={item.name} className='flex h-10 items-center'>
                                <span className='mr-2'>{item.icon}</span>
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
