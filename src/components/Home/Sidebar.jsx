import React from 'react'
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';
import {
    myspaceIconInactive, communityIconInactive, buildIconInactive, learnIconInactive, apikeysIconInactive,
    myspaceIconActive, communityIconActive, buildIconActive, learnIconActive, apikeysIconActive,
    settingIconInactive, logoutIconInactive
} from "../../assets";
import { Icon } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const data = [
    {
        name: "MySpace",
        icon: <Icon fontSize='large'><img src={myspaceIconInactive} /></Icon>,
        iconActive: <Icon fontSize='large'><img src={myspaceIconActive} /></Icon>,
    },
    {
        name: "Community",
        icon: <Icon fontSize='large'><img src={communityIconInactive} /></Icon>,
        iconActive: <Icon fontSize='large'><img src={communityIconActive} /></Icon>,
    },
    {
        name: "Build",
        icon: <Icon fontSize='large'><img src={buildIconInactive} /></Icon>,
        iconActive: <Icon fontSize='large'><img src={buildIconActive} /></Icon>,
    },
    {
        name: "Learn",
        icon: <Icon fontSize='large'><img src={learnIconInactive} /></Icon>,
        iconActive: <Icon fontSize='large'><img src={learnIconActive} /></Icon>,
    },
    {
        name: "API Keys",
        icon: <Icon fontSize='large'><img src={apikeysIconInactive} /></Icon>,
        iconActive: <Icon fontSize='large'><img src={apikeysIconActive} /></Icon>,
    },
];

const Sidebar = ({ sidebarSelection, setSidebarSelection }) => {
    const navigate = useNavigate()
    return (
        <div className=' w-20 overflow-auto pt-8 bg-white flex flex-col justify-between border-r'>
            <div className='flex flex-col'>
                {data.map((item, index) => (
                    <div key={index} className='flex mb-2 justify-center'>
                        <Tooltip title={item.name} arrow placement='right'>
                            <button onClick={() => setSidebarSelection(item.name)}
                                className='flex flex-col justify-center items-center'>
                                <span className='text-homeInactiveIcon'>
                                    {(sidebarSelection === item.name) ? item.iconActive : item.icon}</span>
                            </button>
                        </Tooltip>
                    </div>
                ))}
            </div>
            <div className='flex flex-col'>
                <div className='flex mb-2 justify-center'>
                    <button className='flex flex-col justify-center items-center'>
                        <span className='text-homeInactiveIcon'>
                            <Icon fontSize='large'><img src={settingIconInactive} /></Icon></span>
                    </button>
                </div>
                <div className='flex mb-2 justify-center'>
                    <button className='flex flex-col justify-center items-center'
                        onClick={() => {
                            localStorage.clear();
                            googleLogout();
                            navigate('/signin');
                        }}>
                        <span className='text-homeInactiveIcon'>
                            <Icon fontSize='large'><img src={logoutIconInactive} /></Icon></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar