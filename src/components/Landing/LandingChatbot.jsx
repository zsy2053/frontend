import React, { useState, useContext } from "react";
import axios from "axios";
import { Grow, Fade } from "@mui/material";
import EAButton from "./EAButton.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import { StyleUpContext } from "../../context/StyleUpContext.jsx";
import {
  chatbotTipsOptions,
  styleUpCollection,
  styleUpAPIKey,
  exampleChat,
  chatbotSelectors,
} from "../../constants";

const sendStyleUpMsg = (msg, setStyleMsgHistory, setIsLoading) => {
  setStyleMsgHistory((oldMessages) => [...oldMessages, "Human: " + msg]);
  setIsLoading(true);
  axios({
    method: "post",
    url: `${import.meta.env.VITE_API_URL}/api/bots/chat`,
    data: {
      input: msg,
      collection_name: styleUpCollection,
    },
    headers: {
      "Content-Type": "application/json",
      "bot-api-key": styleUpAPIKey,
    },
  })
    .then((res) => {
      setIsLoading(false);
      console.log(res);
      setStyleMsgHistory((oldMessages) => [
        ...oldMessages,
        "AI: " + res.data.data,
      ]);
    })
    .catch((err) => {
      setIsLoading(false);
      window.alert(err.message);
      console.log(err);
      // navigate(-1);
    });
};

const LandingChatbot = () => {
  const useStyleUp = useContext(StyleUpContext);
  const [open, setOpen] = useState(false);
  const [chatbotTips, setChatbotTips] = useState(false);
  const useExampleChat = false;
  return (
    // Icon
    <div className='fixed sm:bottom-14 sm:right-14 bottom-4 right-4 z-50'>
      <img
        src='/images/logoChatbot.svg'
        onClick={() => setOpen(true)}
        className={open ? "hidden" : "sm:h-[150px] h-[80px]"}
      ></img>
      {/* Chatbox */}
      <Grow direction='up' in={open} mountOnEnter unmountOnExit>
        <div
          className={`sm:w-[1067px] sm:h-[88vh] fixed right-16 bottom-16 flex justify-end `}
        >
          {/* Chatbox left */}
          <div
            className='sm:w-3/5 bg-white mr-2 sm:border-[2px] border-[#EAECF0] sm:rounded-[20px] flex flex-col sm:static
          w-full fixed top-0 left-0 h-full'
          >
            {/* Chatbox left logo bar */}
            <div className='sticky top-0 flex h-32 w-full px-9 items-center border-b-[1px] border-[#EAECF0] sm:flex-shrink-0 z-10'>
              <img
                src='/images/logoChatbox.svg'
                width={173}
                height={46}
                className='sm:block hidden'
              />
              <div className='text-black text-[20px] font-bold sm:hidden block'>
                STYLEUP
              </div>
              <div className='ml-auto flex space-x-10'>
                {chatbotTips ? (
                  <>
                    <img
                      src='/icons/chatbotTips2.svg'
                      width={24}
                      height={24}
                      className='lg:hidden'
                      onClick={() => setChatbotTips((p) => !p)}
                    />
                    <Fade
                      direction='down'
                      in={chatbotTips}
                      mountOnEnter
                      unmountOnExit
                    >
                      <div className='flex absolute flex-col justify-start bg-white rounded-2xl shadow right-5 top-28 py-[10px] pl-[10px] z-10'>
                        <span className='font-medium text-[18px] leading-5 text-primary mb-3 px-[20px] py-[10px] '>
                          ✦Try Prompts
                        </span>
                        <ul className='list-none space-y-[16px]'>
                          {chatbotTipsOptions.map((nav, index) => (
                            <li
                              key={nav.id}
                              className={
                                "font-medium text-[16px] leading-5 text-primary px-[20px] py-[10px]"
                              }
                              onClick={() => useStyleUp.setStyleUpMsg(nav.text)}
                            >
                              {nav.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Fade>
                  </>
                ) : (
                  <img
                    src='/icons/chatbotTips.svg'
                    width={24}
                    height={24}
                    className='lg:hidden '
                    onClick={() => setChatbotTips((p) => !p)}
                  ></img>
                )}
                <img
                  src='/icons/chatbotRefresh.svg'
                  width={24}
                  height={24}
                ></img>
                <img
                  src='/icons/chatbotX.svg'
                  width={24}
                  height={24}
                  onClick={() => setOpen(false)}
                ></img>
              </div>
            </div>
            {/* Chatbox left chat area */}
            <div className='mt-6 px-9 w-full flex-grow overflow-y-scroll scrollbar-none mb-4 space-y-[10px] break-words'>
              {useStyleUp.styleMsgHistory &&
              useStyleUp.styleMsgHistory.length > 0 ? (
                useStyleUp.styleMsgHistory.map((item, index) =>
                  item.startsWith("Human: ") ? (
                    <div className='flex justify-end text-end'>
                      <span
                        key={index}
                        className='text-neutral-800
                      font-medium
                      leading-normal
                      max-w-[85%]
                      px-4
                      py-2
                      bg-indigo-50
                      rounded-l-2xl
                      rounded-tr-2xl
                      text-left'
                      >
                        {item}
                      </span>
                    </div>
                  ) : (
                    <div className='flex group'>
                      <span
                        key={index}
                        className='text-neutral-800
                      font-medium
                      leading-normal
                      max-w-[85%]
                      px-4
                      py-2
                      bg-[#f9fafb]
                      rounded-r-2xl
                      rounded-tl-2xl
                      text-left'
                      >
                        {item}
                      </span>
                    </div>
                  )
                )
              ) : useExampleChat ? (
                exampleChat.map((item, index) => (
                  <div className='flex group odd:justify-end odd:text-end'>
                    <span
                      key={index}
                      className='text-neutral-800
                    font-medium
                    leading-normal
                    max-w-[85%]
                    px-4
                    py-2
                    group-odd:bg-indigo-50
                    group-odd:rounded-2xl'
                    >
                      {item}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex">
                  <span
                    className='text-neutral-800
                      font-medium
                      leading-normal
                      max-w-[85%]
                      px-4
                      py-2
                      bg-[#f9fafb]
                      rounded-r-2xl
                      rounded-tl-2xl
                      text-left'
                  >
                    👋 Hi! I am StyleUp AI, ask me anything about StyleUp!
                  </span>
                </div>
              )}
            </div>
            <div>
              {/* Chatbox left selectors */}
              <div className='mx-9 h-[40px] flex overflow-x-scroll overflow-y-visible whitespace-nowrap scrollbar-none'>
                {chatbotSelectors.map((name) => (
                  <button
                    className='bg-[#EEEEEE] w-fit h-[40px] px-[16px] py-[10px]
                    rounded-lg shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)]
                    font-medium text-[16px] leading-5 mr-8'
                    onClick={() => useStyleUp.setStyleUpMsg(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              {/* Chatbox left input */}
              <form
                className='relative mt-8 px-9 w-full h-[75px] z-[1]'
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!useStyleUp.isloading) {
                    sendStyleUpMsg(
                      useStyleUp.styleUpMsg,
                      useStyleUp.setStyleMsgHistory,
                      useStyleUp.setIsLoading
                    );
                    useStyleUp.setStyleUpMsg("");
                  }
                }}
              >
                <input
                  onChange={(event) =>
                    useStyleUp.setStyleUpMsg(event.target.value)
                  }
                  value={useStyleUp.styleUpMsg}
                  className='w-full h-[75px] rounded-2xl focus:outline-none appearance-none border-[1px] border-[#555555]
                  pl-5 pr-20 py-4'
                  placeholder='Type new questions...'
                />
                {useStyleUp.isloading ? (
                  <CircularProgress
                    className='absolute right-16 top-1/4'
                    sx={{ color: "black" }}
                  />
                ) : (
                  <button type='submit' disabled={!useStyleUp.styleUpMsg}>
                    <img
                      src='/icons/chatboxSubmit.svg'
                      height={40}
                      width={40}
                      className='absolute right-16 top-1/4 hover:cursor-pointer'
                    />
                  </button>
                )}
              </form>
              {/* Chatbox left footer */}
              <div className='flex mt-5 mb-7 w-full justify-center items-center'>
                <span className='font-semibold text-[14px] leading-[20px]'>
                  Build with StyleUp
                </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-2/5 h-full bg-white border-[2px] border-[#EAECF0] rounded-[20px] flex-col lg:flex hidden'>
            <div className='flex flex-col justify-start px-11 mt-11 max-h-[324px] w-full flex-shrink overflow-y-scroll scrollbar-none shadow'>
              <span className='font-medium text-[18px] leading-5 text-primary mb-6'>
                ✦Try Prompts
              </span>

              <ul className='list-none space-y-[16px]'>
                {chatbotTipsOptions.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={"font-medium text-[16px] leading-5 text-primary"}
                  >
                    <button
                      className='text-left'
                      onClick={() => useStyleUp.setStyleUpMsg(nav.text)}
                    >
                      {nav.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='px-20 flex items-center text-center flex-1'>
              <span className='font-medium text-[24px] leading-[29px] text-primary'>
                Create your first ChatGPT App with StyleUp AI.
              </span>
            </div>
            <div className='sticky bottom-0 px-20 mb-10 flex items-center'>
              <img
                src='images/illustChatbox.png'
                className='absolute bottom-[18px] right-[72px]'
              />
              <EAButton
                type='button'
                name={"Get Started"}
                className={`w-full h-[48px] overflow-visible mt-72`}
              ></EAButton>
            </div>
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default LandingChatbot;
