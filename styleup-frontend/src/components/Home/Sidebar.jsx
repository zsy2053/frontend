import React from 'react'
import { useNavigate } from "react-router-dom";
import { googleLogout } from '@react-oauth/google';
import { myspaceIconActive, communityIconInactive, buildIconInactive, learnIconInactive, apikeysIconInactive, settingIconInactive, logoutIconInactive } from "../../assets";
import { Icon } from '@mui/material';

const data = [
    { name: "MySpace", icon: <Icon fontSize='large'><img src={myspaceIconActive} /></Icon> },
    { name: "Community", icon: <Icon fontSize='large'><img src={communityIconInactive} /></Icon> },
    { name: "Build", icon: <Icon fontSize='large'><img src={buildIconInactive} /></Icon> },
    { name: "Learn", icon: <Icon fontSize='large'><img src={learnIconInactive} /></Icon> },
    { name: "API Keys", icon: <Icon fontSize='large'><img src={apikeysIconInactive} /></Icon> },
];

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className=' w-20 overflow-auto mt-8 bg-white flex flex-col justify-between'>
            <div className='flex flex-col'>
                {data.map((item, index) => (
                    <div key={index} className='flex mb-2 justify-center'>
                        <button className='flex flex-col justify-center items-center'>
                            <span className='text-homeInactiveIcon'>
                                {item.icon}</span>
                        </button>
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
                    onClick={()=>{
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