import React from 'react'
import { Stack, Box } from '@mui/system'
import Input from '@mui/material/Input';
import Label from './Label';

const templateCards = [
    {
        image: '/images/template1.png',
        icon: '/icons/Female06-1.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template2.png',
        icon: '/icons/Female06-2.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template3.png',
        icon: '/icons/Female06-3.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template4.png',
        icon: '/icons/Female06-4.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template5.png',
        icon: '/icons/Female06-5.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template6.png',
        icon: '/icons/Female06-6.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template7.png',
        icon: '/icons/Female06-7.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template8.png',
        icon: '/icons/Female06-8.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template9.png',
        icon: '/icons/Sample-0.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template10.png',
        icon: '/icons/Sample-1.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template11.png',
        icon: '/icons/Sample-2.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template12.png',
        icon: '/icons/Sample-3.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template13.png',
        icon: '/icons/Sample-4.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template14.png',
        icon: '/icons/Sample-5.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template15.png',
        icon: '/icons/Sample-6.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
    {
        image: '/images/template16.png',
        icon: '/icons/Sample-7.svg',
        title: 'Black & purple template',
        author: 'JonathanK'
    },
]

const TemplateCard = ({ item }) => {
    return (
        <Box className='w-[284px] h-[240px] mx-2 mb-12'>
            <img src={item.image} />
            <Box className='flex mt-4 mr-3 h-10 items-center'>
                <img src={item.icon} className='mr-4' />
                <Box className='flex flex-col items-start'>
                <p>{item.title}</p>
                <p className='text-[#1c1c1c90]'>Made by {item.author}</p>
                </Box>
            </Box>
        </Box>
    )
}

const BuildWindow = ({buildWebsite, webUrl, setWebsiteUrl}) => {
    return (
        <Stack className='flex flex-col h-full border items-center'>
            <Box className='flex flex-col mt-12 mb-7 items-center'>
                <p className='text-[28px]'>
                    Already have a website/app?
                </p>
            </Box>
            <Box className='flex mb-8'>
                <Box className='flex pl-2 mb-6 h-11 rounded-lg border border-gray-300'>
                    <Input
                        disableUnderline
                        id="outlined-folder-name-input"
                        placeholder='https://www.styleup.fun'
                        onChange={(event) => setWebsiteUrl(event.target.value)}
                    />
                </Box>
                <button
                  className='flex w-40 ml-6 justify-center items-center h-11 bg-styleupPurple rounded-lg'
                  onClick={() => buildWebsite(webUrl)}>
                    Generate
                </button>
            </Box>
            <Box className='flex justify-between w-[580px] threeCol:w-[880px] fourCol:w-[1180px] items-end'>
                <Box className='flex flex-col' >
                    <p className='text-[28px]'>
                        Build from a template?
                    </p>
                    <p className='text-[14px] text-[#1c1c1c90]'>
                        Find agents to power your life and work
                    </p>
                    <Box className='mt-3 flex'>
                        <Label text='Game' />
                        <Label text='Design' />
                        <Label text='Coding' />
                        <Label text='Productivity' />
                    </Box>
                </Box>
                <button className='border border-styleupPurple text-styleupPurple rounded-lg px-5 py-2.5 mb-2 mr-3'>
                    Blank Canvas
                </button>
            </Box>
            <Box className='flex overflow-auto mx-20 mt-12 flex-wrap justify-center max-w-7xl'>
                {templateCards.map((item, index) => (
                    <TemplateCard key={index} item={item} />
                ))}
            </Box>
        </Stack>
    )
}

export default BuildWindow
