import React, { useState, useEffect } from 'react'
import axios from 'axios';

import {
    CheckBoxOutlineBlankOutlined,
    HomeOutlined,
    InboxOutlined,
} from "@mui/icons-material";
import { Vector, chatIcon, books, books1, books2 } from "../../assets";
import { Stack, Icon } from '@mui/material';
import { Box } from '@mui/system';
import AgentType from './AgentType';

const agentsData = [
    {
        name: "Add agent",
        icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box>
    },
    {
        name: "Calendar agent", icon: <Icon><img src={books} /></Icon>,
        type: AgentType.CalendarAgent
    },
    {
        name: "AI tutor", icon: <Icon><img src={books1} /></Icon>,
        type: AgentType.AITutor
    },
    {
        name: "Agent 3", icon: <Icon><img src={books2} /></Icon>,
        type: AgentType.ChatWithDataFile
    },
];

const libraryData = [
    { name: "Add file", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box> },
    { name: "Add website", icon: <Box className='h-6 w-6 flex justify-center'><img src={Vector} className='place-self-center' /></Box> },
    /*{ name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},*/
];

const fetchData = (setCollectionList) => {
    axios({
        method: 'get',
        url: `${import.meta.env.VITE_API_URL}/api/bots/get_collections`,
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem('jwt')
        },
    }).then((res) => {
        console.log(res);
        let resData = []
        for (let i = 0; i < res.data.data.length; i++) {
            resData.push({ name: res.data.data[i], icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box> })
        }
        setCollectionList(resData);
    }).catch((err) => {
        console.log(err);
        // navigate(-1);
    });
}

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

const MySpaceMenu = ({ showUploadFilesModel, showAddWebsiteModel, setActiveAgent }) => {
    let spaceStateInit = [
        { name: "Add file", state: false, setActiveFunc: showUploadFilesModel },
        { name: "Add website", state: false, setActiveFunc: showAddWebsiteModel },
    ];
    const [spaceState, setSpaceState] = useState(spaceStateInit);
    const [collectionList, setCollectionList] = useState([]);
    const handleState = (event) => setSpaceState(mapStatesUpdate(spaceState, event.currentTarget.name));
    useEffect(() => {
        fetchData(setCollectionList);
    }, []);
    return (
        <Stack className=' w-72 overflow-auto pb-10 bg-white'>
            <Box className='mt-8 ml-4 text-menuText'>
                Agents
                <Stack className='h-40 mt-4'>
                    {agentsData.map((item, index) => (
                        <div key={index}>
                            <button className='flex h-10 items-center' onClick={()=> item.type && setActiveAgent(item.type)}>
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
