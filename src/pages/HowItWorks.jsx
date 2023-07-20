import React from "react";
import {
  LandingFooter,
  LandingNav,
  LandingDesc1,
  LandingDesc2,
  LandingDesc3,
  LandingDesc4,
  LandingChatbot,
} from "../components";
import { Link, useNavigate } from "react-router-dom";
import styles from "../style";
import Marquee from "react-fast-marquee";
import { InlineWidget } from "react-calendly";
import { landingSectionText } from "../constants";
const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <div className=' bg-white h-full w-full overflow-hidden'>
      <div className={`${styles.paddingX} flex justify-center`}>
        <div className={`flex-1 xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>
      <div className=' bg-white w-full flex justify-center items-center flex-col'>
        <div className='lg:min-w-[960px] text-center flex flex-col mt-10 xs:mb-32 mb-[50px]'>
          <span className='text-zinc-900 xs:text-[80px] text-4xl font-bold xs:leading-[80px] leading-[46px]'>
            Build AI apps in 5 minutes
          </span>
          <span className='text-zinc-900 xs:text-[40px] text-xl font-bold xs:leading-[80px]'>
            Let GPT power your life and work.
          </span>
        </div>
        <div className='flex flex-col relative justify-center items-center w-full'>
          <div className='absolute top-12 z-0 h-40 flex flex-col gap-3 items-center'>
            <h1 class='h-8 text-center text-zinc-900 text-xl font-medium overflow-hidden whitespace-nowrap animate-typing border-r-4 border-r-black transition-none ss:flex hidden'>
              styleup.fun
            </h1>
            <button className='w-[135px] h-[35px] px-2 bg-stone-950 rounded-[32px] self-center' onClick={() => navigate("/signin")}>
              <span className='text-center text-white text-base font-medium'>
                Start Free ✦
              </span>
            </button>
          </div>
          <div className='absolute bottom-10 z-0 h-40 flex flex-col gap-3'>
            <Marquee autoFill='true' direction='left' className='h-11'>
              {[...Array(20)].map((item, index) => (
                <div key={index + "marquee1"} className='sm:flex hidden'>
                  <img
                    src={`/images/howitworks/howItWorks (${
                      Math.floor(Math.random() * 50) + 1
                    }).jpg`}
                    className='mr-6 h-11 rounded'
                  />
                </div>
              ))}
            </Marquee>
            <Marquee autoFill='true' direction='right' className='h-11'>
              {[...Array(20)].map((item, index) => (
                <div key={index + "marquee1"} className='xs:flex hidden'>
                  <img
                    src={`/images/howitworks/howItWorks (${
                      Math.floor(Math.random() * 50) + 1
                    }).jpg`}
                    className='mr-6 h-11 rounded'
                  />
                </div>
              ))}
            </Marquee>
            <Marquee autoFill='true' direction='left' className='h-11'>
              {[...Array(20)].map((item, index) => (
                <div key={index + "marquee1"}>
                  <img
                    src={`/images/howitworks/howItWorks (${
                      Math.floor(Math.random() * 50) + 1
                    }).jpg`}
                    className='mr-6 h-11 rounded'
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <img src='/images/laptopFrame.svg' className='z-10'></img>
        </div>
        <div
          className={`w-full xl:max-w-[1920px] md:my-[100px] my-[70px] sm:px-16 px-6 flex md:flex-row flex-col xl:space-x-12 md:space-x-6 items-center justify-center md:space-y-0 space-y-[50px]`}
        >
          {landingSectionText.map((i, index) => (
            <div className='max-w-[547px] md:px-10 md:pt-6 px-4 py-5 bg-white rounded-[60px] shadow-hiw justify-start items-start flex flex-col flex-1 md:self-stretch'>
              <div className='xs:w-[100px] xs:h-[100px] w-[80px] h-[80px] xs:mb-[50px] mb-2'>
                <img src={i.image} className='w-full h-full' />
              </div>
              <div className='w-full text-zinc-900 xs:text-[40px] text-xl font-semibold leading-[60px]'>
                {i.title}
              </div>
              <span className='text-neutral-600 xs:text-2xl text-base mb-4'>
                {i.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div
          className={`w-full xl:max-w-[1920px] md:my-[140px] my-[60px] sm:px-16 px-6`}
        >
          <LandingDesc1 />
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div
          className={`w-full xl:max-w-[1920px] md:my-[140px] my-[60px] sm:px-16 px-6`}
        >
          <LandingDesc2 />
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div
          className={`w-full xl:max-w-[1920px] md:my-[140px] my-[60px] sm:px-16 px-6`}
        >
          <LandingDesc3 />
        </div>
      </div>
      {/* <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px]`}>
        <LandingDesc4 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:mt-[140px] mt-[70px]`}>
        <LandingExplore />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:mt-[140px] mt-[70px]`}>
        <LandingFAQs />
      </div>
    </div> */}
      <div className={`${styles.flexCenter}`}>
        <div
          className={`w-full xl:max-w-[1920px] md:mt-[140px] mt-[70px] flex flex-col justify-center items-center mb-5`}
        >
          <h1 className='text-zinc-900 xs:text-[64px] text-4xl font-bold leading-[80px]'>
            Let's Chat.
          </h1>
          <span className='text-zinc-900 xs:text-[28px] text-xl font-normal xs:leading-[80px]'>
            Tell us about your ideas and goals.
          </span>
        </div>
      </div>
      <div className={`${styles.flexCenter} mb-36`}>
        <div className={`h-[730px] w-full xl:max-w-[1920px] sm:px-16 xs:px-6 `}>
          <InlineWidget
            url='https://calendly.com/xplorer01/30min'
            styles={{ height: "750px", minWidth: "320px" }}
          />
        </div>
      </div>
      <div className='w-full relative'>
        <LandingFooter variant />
      </div>
      <LandingChatbot />
    </div>
  );
};

export default HowItWorks;
