import React from "react";
import { Stack, Box } from "@mui/system";
import Input from "@mui/material/Input";
import Label from "./Label";

const templateCards = [
  {
    image: "/images/template1.png",
    icon: "/icons/Female06-1.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template2.png",
    icon: "/icons/Female06-2.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template3.png",
    icon: "/icons/Female06-3.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template4.png",
    icon: "/icons/Female06-4.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template5.png",
    icon: "/icons/Female06-5.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template6.png",
    icon: "/icons/Female06-6.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template7.png",
    icon: "/icons/Female06-7.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template8.png",
    icon: "/icons/Female06-8.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template9.png",
    icon: "/icons/Sample-0.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template10.png",
    icon: "/icons/Sample-1.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template11.png",
    icon: "/icons/Sample-2.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template12.png",
    icon: "/icons/Sample-3.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template13.png",
    icon: "/icons/Sample-4.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template14.png",
    icon: "/icons/Sample-5.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template15.png",
    icon: "/icons/Sample-6.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
  {
    image: "/images/template16.png",
    icon: "/icons/Sample-7.svg",
    title: "Black & purple template",
    author: "JonathanK",
  },
];

const TemplateCard = ({ item }) => {
  return (
    <Box className='w-[284px] h-[240px]'>
      <img src={item.image} />
      <Box className='flex py-2 items-center'>
        <img src={item.icon} className='mr-4' />
        <Box className='flex flex-col items-start'>
          <p>{item.title}</p>
          <p className='text-[#1c1c1c90]'>Made by {item.author}</p>
        </Box>
      </Box>
    </Box>
  );
};

const BuildWindow = ({ buildWebsite, webUrl, setWebsiteUrl }) => {
  return (
    <Stack className='flex flex-col h-[calc(100vh-44px)] w-full items-center'>
      <div className='my-12 flex-col justify-center items-center gap-7 flex min-w-[494px]'>
        <p className='text-[28px]'>Already have a website/app?</p>
        <Box className='flex'>
          <Box className='flex h-11 rounded-lg border border-gray-300'>
            <div className='px-3 py-2.5 rounded-tl-lg rounded-bl-lg justify-start items-center flex border-r'>
              <span className='text-neutral-400 text-[16px] font-normal leading-normal select-none'>
                http://
              </span>
            </div>
            <input
              type='text'
              id='outlined-folder-name-input'
              placeholder='www.untitled.com'
              className='text-[16px] font-normal leading-normal focus:outline-none px-[14px] py-[10px] rounded-lg'
              onChange={(event) => setWebsiteUrl(event.target.value)}
            />
          </Box>
          <button
            className='flex w-40 ml-6 justify-center items-center h-11 bg-styleupPurple rounded-lg text-white'
            onClick={() => buildWebsite(webUrl)}
          >
            Generate
          </button>
        </Box>
      </div>

      <Box className='flex justify-between w-[580px] threeCol:w-[880px] fourCol:w-[1180px] items-end'>
        <Box className='flex flex-col'>
          <p className='text-[28px]'>Build from a template?</p>
          <p className='text-[14px] text-[#1c1c1c90]'>
            Find agents to power your life and work
          </p>
          <Box className='mt-3 flex gap-2'>
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

      <Box className='flex flex-wrap overflow-scroll justify-center gap-6  mx-20 my-4 max-w-7xl'>
        {templateCards.map((item, index) => (
          <TemplateCard key={index} item={item} />
        ))}
      </Box>
    </Stack>
  );
};

export default BuildWindow;
