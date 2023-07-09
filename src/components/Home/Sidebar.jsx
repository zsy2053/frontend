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
    /*{
        name: "Build",
        icon: <Icon fontSize='large'><img src='/icons/buildIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/buildIconActive.svg' /></Icon>,
    },*/
    /*{
        name: "Learn",
        icon: <Icon fontSize='large'><img src='/icons/learnIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/learnIconActive.svg' /></Icon>,
    },*/
    {
        name: "API Keys",
        icon: <Icon fontSize='large'><img src='/icons/apikeysIconInactive.svg' /></Icon>,
        iconActive: <Icon fontSize='large'><img src='/icons/apikeysIconActive.svg' /></Icon>,
    },
];

const Sidebar = ({ sidebarSelection, setSidebarSelection }) => {
    const navigate = useNavigate()
    return (
        <div className='max-h-[100vh] pt-8 flex-shrink-0 w-20 bg-white flex flex-col justify-between border-r'>
            <div className='flex flex-col'>
                {data.map((item, index) => (
                    <div key={index} className='flex mb-2 justify-center '>
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
            <div className='flex flex-col justify-center items-center'>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="1" viewBox="0 0 48 1" fill="none" className="my-6 justify-center items-center">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48 1H0V0H48V1Z" fill="#555555" />
                </svg>
                <StyledTooltip text={localStorage.getItem('user_name')} direction="right">
                    <img src={`${localStorage.getItem('user_avatar')}`} className="rounded-full h-12 w-12 mb-6" />
                </StyledTooltip>
            </div>
        </div>
    )
}

export default Sidebar
