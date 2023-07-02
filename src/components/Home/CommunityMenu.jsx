import React from 'react'
import { Stack, Box } from '@mui/system';
import Divider from '@mui/material/Divider';

const pinnedCategories = [
    { name: "All", icon: '/icons/House.svg' },
    { name: "Popular", icon: '/icons/Fire.svg' }
];

const categories = [
    { name: "Fun", icon: '/icons/PartyPopper.svg' },
    { name: "Marketing", icon: '/icons/BarChart.svg' },
    { name: "Education", icon: '/icons/OpenBook.svg' },
    { name: "Shopping & Food", icon: '/icons/ShoppingBags.svg' },
    { name: "Developer Tools", icon: '/icons/Laptop.svg' },
    { name: "Productivity", icon: '/icons/LightBulb.svg' },
    { name: "Social", icon: '/icons/ClinkingGlasses.svg' },
    { name: "Utilities", icon: '/icons/Gear.svg' },
    { name: "Business", icon: '/icons/Briefcase.svg' },
    { name: "Gaming", icon: '/icons/VideoGame.svg' },
    { name: "Finance", icon: '/icons/MoneyBag.svg' },
    { name: "Health & Fitness", icon: '/icons/Pill.svg' },
    { name: "Travel", icon: '/icons/Globe.svg' },
    { name: "Music", icon: '/icons/Headphone.svg' },
    { name: "Design", icon: '/icons/ArtistPalette.svg' }
];

const CommunityMenu = () => {
    return (
        <Stack className='w-72 py-8 px-4 bg-white border-r flex-shrink-0'>
            <Box className='mb-4 text-menuText'>
                Categories
            </Box>
            <Box className='mb-1 text-menuText'>
                {pinnedCategories.map((item, index) => (
                    <div key={index}>
                        <button name={item.name} className='flex h-10 items-center'>
                            <img className='mx-2' src={item.icon} />
                            <p className='text-menuText'>{item.name}</p>
                        </button>
                    </div>
                ))}
            </Box>
            <Divider variant='middle' />
            <Box className='mt-1 text-menuText'>
                {categories.map((item, index) => (
                    <div key={index}>
                        <button name={item.name} className='flex h-10 items-center'>
                            <img className='mx-2' src={item.icon} />
                            <p className='text-menuText'>{item.name}</p>
                        </button>
                    </div>
                ))}
            </Box>
        </Stack>
    )
}

export default CommunityMenu
