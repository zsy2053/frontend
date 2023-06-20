import React from 'react'
import { Stack, Box } from '@mui/system'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import { card1, card2, card3, card4, card5, card6, card7, card8, card9, Female06 } from '../../assets';

const Label = ({ text }) => {
  return (
    <Box className='bg-[#e5ecf6] text-gray-600 rounded px-1 mr-2 mb-2 text-sm'>
      {text}
    </Box>
  )
}

const AgentCard = ({ item }) => {
  return (
    <Box className='w-[284px] h-[410px] mx-2 mb-4'>
      <img src={item.image} />
      <Box className='flex mt-4 mx-3 h-10 items-center'>
        <img src={Female06} className='mr-4'/>
        {item.title}
      </Box>
      <Box className='mt-2 mx-3'>
        {item.desc}
      </Box>
      <Box className='flex flex-wrap mt-2 mx-3'>
        {
          item.labels.map((l, index) => (
            <Label text={l} />
          ))
        }
      </Box>
    </Box>
  )
}

const agentCards = [
  {
    image: card1,
    title: '',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card2,
    title: '原神骨灰级必备',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card3,
    title: 'Pokemon Go快速晋级攻略',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card4,
    title: '全网找低价好物',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card5,
    title: '旅行规划，游击自动生成',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card6,
    title: '问问成功人士“怎么创业”',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card7,
    title: '一键帮你生成微信公众号文章',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card8,
    title: '高效人士-日程管理',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
  {
    image: card9,
    title: '一个就够了-社交媒体投放规划',
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ['Calendar', 'Time Management', 'Event']
  },
]

const CommunityWindow = () => {
  return (
    <Stack className='flex flex-col h-full items-center'>
      <Box className='flex flex-col mt-12 mb-7 items-center'>
        <p className='text-[28px]'>
          Find Your Favorate Agents
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
      <Box className='flex overflow-auto mx-20 flex-wrap justify-center'>
        {agentCards.map((item, index) => (
          <AgentCard item={item}/>
        ))}
      </Box>
    </Stack>
  )
}

export default CommunityWindow