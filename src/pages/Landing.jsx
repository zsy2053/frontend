import React from "react";
import styles from "../style";
import {
  LandingHero,
  LandingNav,
  LandingFooter,
  LandingDesc1,
  LandingDesc2,
  LandingDesc3,
  LandingDesc4,
  LandingExplore,
  LandingFAQs,
  LandingChatbot,
} from "../components";
import { landingSectionText } from "../constants";
import { InlineWidget } from "react-calendly";

const Landing = () => (
  <div className='w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px]`}>
        <LandingNav />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full md:mt-[140px] mt-[70px]`}>
        <LandingHero />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6 space-x-4 hidden md:flex`}
      >
        {landingSectionText.map((i, index) => (
          <div className='flex flex-col flex-1'>
            <h1 className='max-w-[602px] text-black text-[56px] font-bold leading-10 mb-6'>
              {i.title}
            </h1>
            <span className='max-w-[567px] text-neutral-600 text-[24px] font-medium'>
              {i.text}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6`}
      >
        <LandingDesc1 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6`}
      >
        <LandingDesc2 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6`}
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
        className={`h-[730px] w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6 `}
      >
        <InlineWidget  url='https://calendly.com/xplorer01/30min' styles={{height:'750px', minWidth:'320px'}}/>
      </div>
    </div>

    <div className='w-full'>
      <LandingFooter />
    </div>
    <LandingChatbot />
  </div>
);

export default Landing;
