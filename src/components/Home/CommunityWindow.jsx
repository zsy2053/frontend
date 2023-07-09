import React from "react";
import { Stack, Box } from "@mui/system";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import Label from "./Label";

const AgentCard = ({ item }) => {
  return (
    <Box className='w-[284px] flex flex-col transition duration-500 hover:scale-110'>
      <img src={item.image} className="aspect-[270/192] rounded-2xl" />
      <div className='py-4 flex-col justify-start items-start gap-2 flex'>
        <div className='w-[230px] h-10 justify-start items-center gap-4 inline-flex'>
          <img
            className='w-10 h-10 relative rounded-[800px]'
            src='/icons/Female06.svg'
          />
          <div className='text-zinc-900 text-[14px] font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis'>
            {item.title}
          </div>
        </div>
        <Box className='text-zinc-900 text-opacity-80 text-[12px] font-normal leading-none w-full line-clamp-2'>
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
    <Stack className='flex flex-col h-[100vh] w-full items-center overflow-y-scroll ' sx={{ border: '0px' }}>
      <Box className='flex flex-col mt-12 mb-7 items-center w-full '>
        <div className="w-full max-w-7xl h-[326px] relative rounded-bl-2xl rounded-br-2xl" style={{ backgroundImage: `url(/images/community_bg.jpg)`, backgroundSize: 'cover' }}>
          <div className="h-[174px] left-[40px] top-[76px] absolute">
            <div className="w-[322px] h-[87px] left-0 top-0 absolute text-white text-[40px] font-bold">Get Started with Popular Agents</div>
            <div className="w-[278px] h-[47px] left-0 top-[127px] absolute justify-start items-start gap-[21px] inline-flex">
              <button>
                <div className="flex h-[47px] w-[125px] items-center bg-gray-100 hover:bg-gray-200 transition rounded-full justify-center">
                  <div className="text-black text-[17.5px] font-semibold">Create</div>
                  <img className="w-[18px] h-[18px] relative" src="/icons/cheveron-down_black.svg" />
                </div>
              </button>
              <button>
                <div className="flex h-[47px] w-[125px] items-center rounded-full justify-center bg-gray-950 hover:bg-gray-900 transition">
                  <div className="text-white text-[17.5px] font-semibold">Explore</div>
                  <img className="w-[18px] h-[18px] relative" src="/icons/cheveron-down_white.svg" />
                </div>
              </button>
            </div>
          </div>
        </div>
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

      <Box className='flex flex-wrap gap-6 mx-20 max-w-7xl justify-center items-center py-6'>
        {agentCards.map((item, index) => (
          <AgentCard key={index} item={item} />
        ))}
      </Box>
    </Stack>
  );
};

export default CommunityWindow;
