import React from 'react'

import {
    CheckBoxOutlineBlankOutlined,
    HomeOutlined,
    InboxOutlined,
} from "@mui/icons-material";
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
    return (
        <div className='h-screen w-20 overflow-auto mt-8 bg-white'>
            {data.map((item, index) => (
                <div key={index} className='flex mb-2 justify-center'>
                    <button className='flex flex-col justify-center items-center'>
                        <span className='text-homeInactiveIcon'>
                            {item.icon}</span>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Sidebar