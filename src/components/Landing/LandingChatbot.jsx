import React from "react";
import { useState } from "react";
import { EAButton } from "..";
import Button from "./EAButton";
import { Grow, Slide } from "@mui/material";
const LandingChatbot = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed bottom-14 right-14 z-10'>
      <img
        src='/images/logoChatbot.svg'
        onClick={() => setOpen(true)}
        className={open ? "hidden" : "visible"}
      ></img>
      <Grow direction='up' in={open} mountOnEnter unmountOnExit>
        <div
          className={`w-[1067px] h-[960px] fixed right-16 top-[184px] flex `}
        >
          {/* left */}
          <div className='w-3/5 h-full bg-white mr-2 border-[1px] border-[#EAECF0] rounded-[20px] flex flex-col'>
            {/* logo bar */}
            <div className='flex h-32 w-full px-9 items-center border-b-[1px] border-[#EAECF0]'>
              <img src='/images/logoChatbox.svg' width={173} height={46}></img>
              <div className='ml-auto flex'>
                <img
                  src='/icons/chatbotRefresh.svg'
                  width={28}
                  height={28}
                  className='mr-12'
                ></img>
                <img
                  src='/icons/chatbotX.svg'
                  width={28}
                  height={28}
                  onClick={() => setOpen(false)}
                ></img>
              </div>
            </div>
            {/* chat area */}
            <div className='mt-12 px-9 w-full flex-1'>
              👋 Hi! I am StyleUp AI, ask me anything about StyleUp!
            </div>
            {/* selectors */}
            <div className='mx-9 h-[40px] w-[calc(100%-64)] flex overflow-x-scroll whitespace-nowrap'>
              <button
                className='bg-[#EEEEEE] w-fit h-[40px] px-[16px] py-[10px]
               rounded-lg shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)]
             font-medium text-[16px] leading-5 mr-8'
              >
                Start Building
              </button>
              <button
                className='bg-[#EEEEEE] w-fit h-[40px] px-[16px] py-[10px]
               rounded-lg shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)]
             font-medium text-[16px] leading-5 mr-8'
              >
                Browse Agents
              </button>
              <button
                className='bg-[#EEEEEE] w-fit h-[40px] px-[16px] py-[10px]
               rounded-lg shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)]
             font-medium text-[16px] leading-5 mr-8'
              >
                MySpace
              </button>
              <button
                className='bg-[#EEEEEE] w-fit h-[40px] px-[16px] py-[10px]
               rounded-lg shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)]
             font-medium text-[16px] leading-5 mr-8'
              >
                MySpace
              </button>
              <button
                className='bg-[#EEEEEE] w-fit h-[40px] px-[16px] py-[10px]
               rounded-lg shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)]
             font-medium text-[16px] leading-5 mr-8'
              >
                MySpace
              </button>
            </div>
            {/* input */}
            <div className='relative mt-8 px-9 w-full h-[75px]'>
              <img
                src='/icons/chatboxSubmit.svg'
                height={40}
                width={40}
                className='absolute right-16 top-1/4'
              />
              <input
                className='w-full h-[75px] rounded-2xl focus:outline-none appearance-none border-[1px] border-[#555555]
            px-5 py-4'
                placeholder='Type new questions...'
              />
            </div>
            {/* footer */}
            <div className='flex mt-5 mb-7 w-full justify-center items-center'>
              <span className='font-semibold text-[14px] leading-[20px]'>
                Build with StyleUp
              </span>
            </div>
          </div>
          {/* right */}
          <div className='w-2/5 h-full bg-white border-[1px] border-[#EAECF0] rounded-[20px] flex flex-col'>
            <div className='flex flex-col justify-start px-11 mt-11 mb-[117px] h-[324px] w-full'>
              <span className='font-medium text-[18px] leading-5 text-primary mb-6'>
                ✦Try Prompts
              </span>
              <ul className='list-none space-y-[16px]'>
                <li className='font-medium text-[16px] leading-5 text-primary'>
                  What is StyleUp?
                </li>
                <li className='font-medium text-[16px] leading-5 text-primary'>
                  How do I add data to my app?
                </li>
                <li className='font-medium text-[16px] leading-5 text-primary'>
                  Can I use StyleUp for commercial purposes?
                </li>
                <li className='font-medium text-[16px] leading-5 text-primary'>
                  Can I use StyleUp in open-source projects?
                </li>
                <li className='font-medium text-[16px] leading-5 text-primary'>
                  Where can I access my download files?
                </li>
                <li className='font-medium text-[16px] leading-5 text-primary'>
                  What about browser support?
                </li>
              </ul>
            </div>
            <div className='px-20 flex items-center text-center '>
              <span className='font-medium text-[24px] leading-[29px] text-primary'>
                Create your first ChatGPT App with StyleUp AI.
              </span>
            </div>
            <div className='px-20 mb-10 flex items-center mt-auto'>
              <img
                src='images/illustChatbox.png'
                className='absolute bottom-[57px] right-[63px]'
              />
              <Button
                type='button'
                name={"Get Started"}
                className={`w-full h-[48px] overflow-visible`}
              ></Button>
            </div>
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default LandingChatbot;
