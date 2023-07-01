import React from "react";
import { Stack, Box } from "@mui/system";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import Label from "./Label";

const AgentCard = ({ item }) => {
  return (
    <Box className='w-[284px] h-[403px] flex flex-col'>
      <img src={item.image} />
      <div className='px-6 py-4 h-[163px] flex-col justify-start items-start gap-2 flex'>
        <div className='w-[230px] h-10 justify-start items-center gap-4 inline-flex'>
          <img
            className='w-10 h-10 relative rounded-[800px]'
            src='/icons/Female06.svg'
          />
          <div className='text-zinc-900 text-[14px] font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis'>
            {item.title}
          </div>
        </div>
        <Box className='text-zinc-900 text-opacity-80 text-[12px] font-normal leading-none w-full overflow-hidden text-ellipsis'>
          {item.desc}
        </Box>
        <Box className='flex flex-wrap gap-2'>
          {item.labels.map((l, index) => (
            <Label key={index} text={l} />
          ))}
        </Box>
      </div>
    </Box>
  );
};

const agentCards = [
  {
    image: "/images/card1.png",
    title: "聊天学红楼",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card2.png",
    title: "原神骨灰级必备",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card3.png",
    title: "Pokemon Go快速晋级攻略",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card4.png",
    title: "全网找低价好物",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card5.png",
    title: "旅行规划，游击自动生成",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card6.png",
    title: "问问成功人士“怎么创业”",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card7.png",
    title: "一键帮你生成微信公众号文章",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card8.png",
    title: "高效人士-日程管理",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
  {
    image: "/images/card9.png",
    title: "一个就够了-社交媒体投放规划",
    desc: 'The "my calendar" agent can check your calendar for events and schedule new ones!',
    labels: ["Calendar", "Time Management", "Event"],
  },
];

const CommunityWindow = () => {
  return (
    <Stack className='flex flex-col h-screen w-full items-center' sx={{border:'0px'}}>
      <Box className='flex flex-col mt-12 mb-7 items-center'>
        <p className='text-[28px]'>Find Your Favorite Agents</p>
        <p className='mt-2 text-sm text-gray-600'>
          Find agents to power your life and work
        </p>
        <Box className='my-3 flex gap-2'>
          <Label text='Game' />
          <Label text='Design' />
          <Label text='Coding' />
          <Label text='Productivity' />
        </Box>
        <Box className='mb-6 flex gap-2'>
          <Label text='Social' />
          <Label text='Health' />
          <Label text='Travel' />
        </Box>
      </Box>
      {/* <Input
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
      /> */}

      <Box className='flex flex-wrap overflow-scroll gap-6 mx-20 my-4 max-w-7xl'>
        {agentCards.map((item, index) => (
          <AgentCard key={index} item={item} />
        ))}
      </Box>
    </Stack>
  );
};

export default CommunityWindow;
