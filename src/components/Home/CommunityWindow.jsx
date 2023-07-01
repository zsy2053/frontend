import React from 'react'
import { Stack, Box } from '@mui/system'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import Label from './Label';

const AgentCard = ({ item }) => {
  return (
    <Box className='w-[284px] h-[410px] mx-2 mb-4'>
      <img src={item.image} />
      <Box className='flex mt-4 mx-3 h-10 items-center'>
        <img src='/icons/Female06.svg' className='mr-4' />
        {item.title}
      </Box>
      <Box className='mt-2 mx-3'>
        {item.desc}
      </Box>
      <Box className='flex flex-wrap mt-2 mx-3'>
        {
          item.labels.map((l, index) => (
            <Label key={index} text={l} />
          ))
        }
      </Box>
    </Box>
  )
}

const agentCards = [
  {
    image: '/images/card1.png',
    title: '聊天学红楼',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card2.png',
    title: '原神骨灰级必备',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card3.png',
    title: 'Pokemon Go快速晋级攻略',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card4.png',
    title: '全网找低价好物',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card5.png',
    title: '旅行规划，游击自动生成',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card6.png',
    title: '问问成功人士“怎么创业”',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card7.png',
    title: '一键帮你生成微信公众号文章',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card8.png',
    title: '高效人士-日程管理',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: '/images/card9.png',
    title: '一个就够了-社交媒体投放规划',
    desc: 'The "my calendar" agent can check your calendar for events...',
    labels: ['Calendar', 'Time Management', 'Event']
  },
]

const CommunityWindow = () => {
  return (
    <Stack className='flex flex-col h-full items-center'>
      <Box className='flex flex-col mt-12 mb-7 items-center'>
        <p className='text-[28px]'>
          Find Your Favorite Agents
        </p>
        <p className='mt-2 text-sm text-gray-600'>
          Find agents to power your life and work
        </p>
      </Box>
      <Input
        className='bg-[#00000005] rounded-lg'
        placeholder='Search'
        disableUnderline
        id="search-agent"
        startAdornment={<InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>}
        endAdornment={<InputAdornment position="end">
          <Box>
            <button className='flex mr-2 justify-center items-center'>
              <KeyboardCommandKeyIcon fontSize='small' />
              <p className='text-xl'>/</p>
            </button>
          </Box>
        </InputAdornment>}
      />
      <Box className='mt-3 flex'>
        <Label text='Game' />
        <Label text='Design' />
        <Label text='Coding' />
        <Label text='Productivity' />
      </Box>
      <Box className='mb-6 flex'>
        <Label text='Social' />
        <Label text='Health' />
        <Label text='Travel' />
      </Box>
      <Box className='flex overflow-auto mx-20 flex-wrap justify-center max-w-7xl'>
        {agentCards.map((item, index) => (
          <AgentCard key={index} item={item} />
        ))}
      </Box>
    </Stack>
  )
}

export default CommunityWindow
