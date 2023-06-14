import React from 'react'

import {
    CheckBoxOutlineBlankOutlined,
    HomeOutlined,
    InboxOutlined,
} from "@material-ui/icons";
import { useState } from 'react';

const data = [
    { name: "MySpace", icon: <HomeOutlined fontSize='large' /> },
    { name: "Community", icon: <InboxOutlined fontSize='large' /> },
    { name: "Build", icon: <CheckBoxOutlineBlankOutlined fontSize='large' /> },
    { name: "Learn", icon: <CheckBoxOutlineBlankOutlined fontSize='large' /> },
];

const Sidebar = () => {
    return (
        <div className='h-screen w-24 overflow-auto pb-10 bg-homeInactiveBg'>
            {data.map((item, index) => (
                <div key={index} className='flex h-24 justify-center'>
                    <button className='flex flex-col justify-center items-center'>
                        <span className='text-homeInactiveIcon'>
                            {item.icon}</span>
                        <p className='text-homeInactiveIcon'>{item.name} </p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Sidebar