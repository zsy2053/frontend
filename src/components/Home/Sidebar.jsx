import React from 'react'
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';
import { Icon } from '@mui/material';
import StyledTooltip from './StyledTooltip';

const data = [
    {
        name: "MySpace",
        icon: <Icon fontSize='large'><img src='/icons/myspaceIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/myspaceIconActive.svg' /></Icon>,
    },
    {
        name: "Community",
        icon: <Icon fontSize='large'><img src='/icons/communityIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/communityIconActive.svg' /></Icon>,
    },
    {
        name: "Build",
        icon: <Icon fontSize='large'><img src='/icons/buildIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/buildIconActive.svg' /></Icon>,
    },
    {
        name: "Learn",
        icon: <Icon fontSize='large'><img src='/icons/learnIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/learnIconActive.svg' /></Icon>,
    },
    {
        name: "API Keys",
        icon: <Icon fontSize='large'><img src='/icons/apikeysIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/apikeysIconActive.svg' /></Icon>,
    },
];

const Sidebar = ({ sidebarSelection, setSidebarSelection }) => {
    const navigate = useNavigate()
    return (
        <div className=' w-20 overflow-auto pt-8 bg-white flex flex-col justify-between border-r'>
            <div className='flex flex-col'>
                {data.map((item, index) => (
                    <div key={index} className='flex mb-2 justify-center'>
                        <StyledTooltip text={item.name} direction="right">
                            <button onClick={() => setSidebarSelection(item.name)}
                                className='flex flex-col justify-center items-center'>
                                <span className='text-homeInactiveIcon'>
                                    {(sidebarSelection === item.name) ? item.iconActive : item.icon}</span>
                            </button>
                        </StyledTooltip>
                    </div>
                ))}
            </div>
            <div className='flex flex-col'>
                <div className='flex mb-2 justify-center'>
                    <StyledTooltip text="Settings" direction="right">
                        <button className='flex flex-col justify-center items-center'>
                            <span className='text-homeInactiveIcon'>
                                <Icon fontSize='large'><img src='/icons/settingIconInactive.svg' /></Icon></span>
                        </button>
                    </StyledTooltip>
                </div>
                <div className='flex mb-2 justify-center'>
                    <StyledTooltip text="Log Out" direction="right">
                        <button className='flex flex-col justify-center items-center'
                            onClick={() => {
                                localStorage.clear();
                                googleLogout();
                                navigate('/signin');
                            }}>
                            <span className='text-homeInactiveIcon'>
                                <Icon fontSize='large'><img src='/icons/logoutIconInactive.svg' /></Icon></span>
                        </button>
                    </StyledTooltip>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
