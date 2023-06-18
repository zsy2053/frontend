import React from 'react'
import { Stack, Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { House, Fire, PartyPopper, BarChart, OpenBook, ShoppingBag, Laptop, LightBulb, ClinkingGlasses,
    Gear, Briefcase, VideoGame, MoneyBag, Pill, Globe, Headphone, ArtistPalette } from "../../assets";

const pinnedCategories = [
    { name: "All", icon: House },
    { name: "Popular", icon: Fire }
];

const categories = [
    { name: "Fun", icon: PartyPopper },
    { name: "Marketing", icon: BarChart },
    { name: "Education", icon: OpenBook },
    { name: "Shopping & Food", icon: ShoppingBag },
    { name: "Developer Tools", icon: Laptop },
    { name: "Productivity", icon: LightBulb },
    { name: "Social", icon: ClinkingGlasses },
    { name: "Utilities", icon: Gear },
    { name: "Business", icon: Briefcase },
    { name: "Gaming", icon: VideoGame },
    { name: "Finance", icon: MoneyBag },
    { name: "Health & Fitness", icon: Pill },
    { name: "Travel", icon: Globe },
    { name: "Music", icon: Headphone },
    { name: "Design", icon: ArtistPalette }
];

const CommunityMenu = () => {
    return (
        <Stack className=' w-72 overflow-auto pb-10 bg-white'>
            <Box className='mt-8 ml-4 mb-2 text-menuText'>
                Categories
            </Box>
            <Box className='ml-4 mb-1 text-menuText'>
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
            <Box className='ml-4 mt-1 text-menuText'>
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